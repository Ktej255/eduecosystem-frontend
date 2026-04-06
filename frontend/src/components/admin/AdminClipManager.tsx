'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { Plus, Trash2, Save, Play, Pause, Clock, Youtube, Eye, EyeOff, Search, ChevronRight, Layout, BookOpen, AlertCircle } from 'lucide-react';

interface PausePoint {
  timestamp: number;
  prompt: string;
}

interface Clip {
  id: number;
  module_id: number;
  title: string;
  youtube_id: string | null;
  order_index: number;
  notes_markdown: string | null;
  pause_points: PausePoint[];
  node_ids: string[];
  is_published: boolean;
}

interface Module {
  id: number;
  title: string;
  order_index: number;
}

interface ConceptNode {
  node_id: string;
  node_name: string;
}

export default function AdminClipManager() {
  const [clips, setClips] = useState<Clip[]>([]);
  const [modules, setModules] = useState<Module[]>([]);
  const [concepts, setConcepts] = useState<ConceptNode[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedClip, setSelectedClip] = useState<Clip | null>(null);
  const [saving, setSaving] = useState(false);
  const [filter, setFilter] = useState<string>('');
  const [moduleFilter, setModuleFilter] = useState<number | 'all'>('all');
  const [previewTime, setPreviewTime] = useState<number>(0);
  const [conceptSearch, setConceptSearch] = useState('');

  useEffect(() => {
    fetchInitialData();
  }, []);

  const fetchInitialData = async () => {
    setLoading(true);
    try {
      const [clipsRes, modulesRes, conceptsRes] = await Promise.all([
        fetch('/api/admin/guided/clips'),
        fetch('/api/admin/guided/modules'),
        fetch('/api/admin/guided/concepts')
      ]);
      
      const clipsData = await clipsRes.json();
      const modulesData = await modulesRes.json();
      const conceptsData = await conceptsRes.json();

      setClips(Array.isArray(clipsData) ? clipsData : []);
      setModules(Array.isArray(modulesData) ? modulesData : []);
      setConcepts(Array.isArray(conceptsData) ? conceptsData : []);
    } catch (err) {
      console.error('Failed to fetch initial data', err);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateClip = async () => {
    const firstModule = modules[0]?.id || 1;
    const newRequest = {
      module_id: firstModule,
      title: 'New Untitled Clip',
      youtube_id: '',
      order_index: clips.length,
      notes_markdown: '',
      pause_points: [],
      node_ids: []
    };

    try {
      const res = await fetch('/api/admin/guided/clips', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newRequest)
      });
      if (!res.ok) throw new Error('Create failed');
      const created = await res.json();
      setClips([...clips, created]);
      setSelectedClip(created);
    } catch {
      alert('Failed to create clip');
    }
  };

  const handleDeleteClip = async (id: number) => {
    if (!confirm('Are you sure you want to delete this clip?')) return;
    try {
      const res = await fetch(`/api/admin/guided/clips/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Delete failed');
      setClips(clips.filter(c => c.id !== id));
      if (selectedClip?.id === id) setSelectedClip(null);
    } catch {
      alert('Failed to delete clip');
    }
  };

  const handleSave = async () => {
    if (!selectedClip) return;
    setSaving(true);
    try {
      const res = await fetch(`/api/admin/guided/clips/${selectedClip.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: selectedClip.title,
          youtube_id: selectedClip.youtube_id,
          notes_markdown: selectedClip.notes_markdown,
          pause_points: selectedClip.pause_points,
          node_ids: selectedClip.node_ids,
          is_published: selectedClip.is_published,
          order_index: selectedClip.order_index,
          module_id: selectedClip.module_id,
        }),
      });
      if (!res.ok) throw new Error('Save failed');
      const updated = await res.json();
      setClips((prev) => prev.map((c) => (c.id === updated.id ? updated : c)));
      setSelectedClip(updated);
    } catch {
      alert('Failed to save. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const addPausePoint = () => {
    if (!selectedClip) return;
    setSelectedClip({
      ...selectedClip,
      pause_points: [
        ...selectedClip.pause_points,
        { timestamp: previewTime, prompt: '' },
      ].sort((a, b) => a.timestamp - b.timestamp),
    });
  };

  const removePausePoint = (index: number) => {
    if (!selectedClip) return;
    setSelectedClip({
      ...selectedClip,
      pause_points: selectedClip.pause_points.filter((_, i) => i !== index),
    });
  };

  const updatePausePoint = (index: number, field: keyof PausePoint, value: string | number) => {
    if (!selectedClip) return;
    const updated = [...selectedClip.pause_points];
    updated[index] = { ...updated[index], [field]: value };
    setSelectedClip({ ...selectedClip, pause_points: updated });
  };

  const toggleNode = (nodeId: string) => {
    if (!selectedClip) return;
    const current = selectedClip.node_ids || [];
    const updated = current.includes(nodeId)
      ? current.filter(id => id !== nodeId)
      : [...current, nodeId];
    setSelectedClip({ ...selectedClip, node_ids: updated });
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  const filteredClips = clips.filter(
    (c) =>
      (moduleFilter === 'all' || c.module_id === moduleFilter) &&
      (c.title.toLowerCase().includes(filter.toLowerCase()) ||
        (c.youtube_id || '').includes(filter))
  );

  const filteredConcepts = concepts.filter(c => 
    c.node_name.toLowerCase().includes(conceptSearch.toLowerCase()) ||
    c.node_id.toLowerCase().includes(conceptSearch.toLowerCase())
  ).slice(0, 50);

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#020617] flex font-sans selection:bg-blue-100 dark:selection:bg-blue-900">
      {/* Sidebar — Clip List */}
      <div className="w-85 shrink-0 bg-white dark:bg-[#0F172A] border-r border-slate-200 dark:border-slate-800 flex flex-col h-screen sticky top-0 overflow-hidden shadow-xl z-20">
        <div className="px-5 py-6 border-b border-slate-100 dark:border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-xl text-slate-800 dark:text-white flex items-center gap-2">
              <Youtube className="w-6 h-6 text-red-500" />
              Content Clips
            </h1>
            <button 
              onClick={handleCreateClip}
              className="p-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-100 transition-colors"
              title="Add New Clip"
            >
              <Plus className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search clips..."
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-sm rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
              />
            </div>
            
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
              <button
                onClick={() => setModuleFilter('all')}
                className={`shrink-0 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  moduleFilter === 'all'
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
                }`}
              >
                All
              </button>
              {modules.map((m) => (
                <button
                  key={m.id}
                  onClick={() => setModuleFilter(m.id)}
                  className={`shrink-0 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    moduleFilter === m.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
                  }`}
                >
                  Mod {m.order_index}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar">
          {loading ? (
            <div className="p-4 space-y-3">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-16 bg-slate-50 dark:bg-slate-800/50 rounded-xl animate-pulse" />
              ))}
            </div>
          ) : filteredClips.length === 0 ? (
            <div className="p-10 text-center flex flex-col items-center">
               <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-3">
                 <Search className="w-5 h-5 text-slate-400" />
               </div>
               <p className="text-slate-400 text-sm">No clips found</p>
            </div>
          ) : (
            <div className="p-3 space-y-1.5">
              {filteredClips.map((clip) => (
                <div key={clip.id} className="group relative">
                  <button
                    onClick={() => setSelectedClip({ ...clip })}
                    className={`w-full text-left px-4 py-4 rounded-2xl transition-all duration-200 ${
                      selectedClip?.id === clip.id
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20 ring-4 ring-blue-500/10'
                        : 'hover:bg-slate-100 dark:hover:bg-slate-800/80 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`mt-1 w-2.5 h-2.5 rounded-full shrink-0 shadow-sm ${clip.is_published ? 'bg-emerald-400' : 'bg-amber-400'}`} />
                      <div className="min-w-0">
                        <div className="text-sm font-semibold truncate leading-tight">{clip.title}</div>
                        <div className={`text-[11px] mt-1.5 flex items-center gap-2 ${selectedClip?.id === clip.id ? 'text-blue-100' : 'text-slate-500'}`}>
                          <span className="bg-white/10 px-1.5 py-0.5 rounded uppercase tracking-wider font-bold">M{clip.module_id}</span>
                          <span>{clip.pause_points.length} Pauses</span>
                          <span>{clip.node_ids?.length || 0} Nodes</span>
                        </div>
                      </div>
                    </div>
                  </button>
                  <button 
                    onClick={(e) => { e.stopPropagation(); handleDeleteClip(clip.id); }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-red-400 opacity-0 group-hover:opacity-100 hover:text-red-600 transition-all"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Main Editor */}
      {selectedClip ? (
        <div className="flex-1 overflow-y-auto bg-slate-50 dark:bg-[#020617] h-screen scroll-smooth">
          <div className="max-w-4xl mx-auto px-8 py-10">
            {/* Header Sticky Bar */}
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-200 dark:border-slate-800">
              <div>
                <nav className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                  <span>Modules</span>
                  <ChevronRight className="w-3 h-3" />
                  <span className="text-blue-500 font-medium">Module {selectedClip.module_id}</span>
                </nav>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white leading-tight">
                  {selectedClip.title || 'Untitled Clip'}
                </h2>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setSelectedClip({ ...selectedClip, is_published: !selectedClip.is_published })}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold border-2 transition-all ${
                    selectedClip.is_published
                      ? 'bg-emerald-50 border-emerald-100 text-emerald-700 dark:bg-emerald-900/20 dark:border-emerald-900/40 dark:text-emerald-400'
                      : 'bg-amber-50 border-amber-100 text-amber-700 dark:bg-amber-900/20 dark:border-amber-900/40 dark:text-amber-400'
                  }`}
                >
                  {selectedClip.is_published ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                  {selectedClip.is_published ? 'Visible' : 'Hidden'}
                </button>
                <button
                  onClick={handleSave}
                  disabled={saving}
                  className="flex items-center gap-2.5 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-bold shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-0.5 disabled:opacity-50 disabled:translate-y-0"
                >
                  <Save className="w-4 h-4" />
                  {saving ? 'Saving...' : 'Sync Changes'}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-7 space-y-8">
                {/* Visual Settings Section */}
                <section className="bg-white dark:bg-[#0F172A] rounded-3xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-2 mb-5 text-slate-800 dark:text-slate-200 font-bold">
                    <Layout className="w-5 h-5 text-blue-500" />
                    General Settings
                  </div>
                  <div className="space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2">Module</label>
                        <select 
                          value={selectedClip.module_id}
                          onChange={(e) => setSelectedClip({ ...selectedClip, module_id: Number(e.target.value) })}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm outline-none focus:ring-2 focus:ring-blue-500/20"
                        >
                          {modules.map(m => (
                            <option key={m.id} value={m.id}>Module {m.order_index}: {m.title}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2">Order Index</label>
                        <input
                          type="number"
                          value={selectedClip.order_index}
                          onChange={(e) => setSelectedClip({ ...selectedClip, order_index: Number(e.target.value) })}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm outline-none focus:ring-2 focus:ring-blue-500/20 font-mono"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2">YouTube ID</label>
                      <div className="relative group">
                        <Youtube className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-red-500" />
                        <input
                          type="text"
                          placeholder="e.g. dQw4w9WgXcQ"
                          value={selectedClip.youtube_id || ''}
                          onChange={(e) => setSelectedClip({ ...selectedClip, youtube_id: e.target.value })}
                          className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm outline-none focus:ring-2 focus:ring-blue-500/20 font-mono"
                        />
                      </div>
                      {selectedClip.youtube_id && (
                        <div className="mt-3 aspect-video bg-black rounded-2xl overflow-hidden relative group">
                          <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${selectedClip.youtube_id}`}
                            title="YouTube preview"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </div>
                      )}
                    </div>
                  </div>
                </section>

                {/* Pause Points Section */}
                <section className="bg-white dark:bg-[#0F172A] rounded-3xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200 font-bold">
                      <Clock className="w-5 h-5 text-orange-500" />
                      Interaction Pauses
                    </div>
                    <button
                      onClick={addPausePoint}
                      className="flex items-center gap-2 px-4 py-2 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 rounded-xl text-xs font-bold hover:scale-105 transition-all"
                    >
                      <Plus className="w-4 h-4" />
                      New Pause
                    </button>
                  </div>

                  {selectedClip.pause_points.length === 0 ? (
                    <div className="text-center py-10 px-6 border-2 border-dashed border-slate-100 dark:border-slate-800 rounded-2xl">
                      <p className="text-slate-400 text-sm">No dynamic interaction pauses set yet.</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {selectedClip.pause_points.map((pp, i) => (
                        <div key={i} className="flex gap-4 p-4 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-100 dark:border-slate-800 group relative">
                          <div className="shrink-0 w-20">
                            <label className="block text-[10px] font-bold text-slate-400 mb-1.5 uppercase">Time</label>
                            <input
                              type="number"
                              value={pp.timestamp}
                              onChange={(e) => updatePausePoint(i, 'timestamp', Number(e.target.value))}
                              className="w-full px-2 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-mono text-center outline-none focus:ring-1 focus:ring-blue-500"
                            />
                            <div className="text-[10px] text-center text-slate-400 mt-1">{formatTime(pp.timestamp)}</div>
                          </div>
                          <div className="flex-1">
                            <label className="block text-[10px] font-bold text-slate-400 mb-1.5 uppercase">AI Tutor Prompt</label>
                            <input
                              type="text"
                              placeholder="Ask a question or explain a concept..."
                              value={pp.prompt}
                              onChange={(e) => updatePausePoint(i, 'prompt', e.target.value)}
                              className="w-full px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm outline-none focus:ring-1 focus:ring-blue-500"
                            />
                          </div>
                          <button
                            onClick={() => removePausePoint(i)}
                            className="shrink-0 self-center p-2 text-slate-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </section>
              </div>

              <div className="lg:col-span-5 space-y-8">
                {/* Concept Tagging Section */}
                <section className="bg-white dark:bg-[#0F172A] rounded-3xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-2 mb-5 text-slate-800 dark:text-slate-200 font-bold">
                    <BookOpen className="w-5 h-5 text-emerald-500" />
                    Tagged Concepts
                  </div>
                  
                  <div className="space-y-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type="search"
                        placeholder="Tag nodes (ENV_N001...)"
                        value={conceptSearch}
                        onChange={(e) => setConceptSearch(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-sm outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all"
                      />
                    </div>

                    <div className="flex flex-wrap gap-2 min-h-12 p-3 bg-slate-50 dark:bg-slate-800/30 rounded-2xl border border-slate-100 dark:border-slate-800/50">
                      {(selectedClip.node_ids || []).length === 0 ? (
                        <p className="text-[11px] text-slate-400 italic">No nodes tagged yet</p>
                      ) : (
                        (selectedClip.node_ids || []).map(id => (
                          <span key={id} className="bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400 px-3 py-1.5 rounded-lg text-xs font-bold border border-emerald-200/50 dark:border-emerald-800/50 flex items-center gap-1.5 group">
                            {id}
                            <button onClick={() => toggleNode(id)} className="hover:text-red-500 transition-colors">
                              <Trash2 className="w-3 h-3" />
                            </button>
                          </span>
                        ))
                      )}
                    </div>

                    {conceptSearch && (
                      <div className="max-h-60 overflow-y-auto border border-slate-100 dark:border-slate-800 rounded-2xl mt-2 divide-y divide-slate-100 dark:divide-slate-800">
                        {filteredConcepts.map(c => {
                          const isActive = (selectedClip.node_ids || []).includes(c.node_id);
                          return (
                            <button
                              key={c.node_id}
                              onClick={() => toggleNode(c.node_id)}
                              className={`w-full flex items-center justify-between px-4 py-3 text-left transition-all ${
                                isActive ? 'bg-emerald-50 dark:bg-emerald-900/10' : 'hover:bg-slate-50 dark:hover:bg-slate-800/50'
                              }`}
                            >
                              <div>
                                <div className="text-xs font-bold text-slate-700 dark:text-slate-200">{c.node_name}</div>
                                <div className="text-[10px] text-slate-400 font-mono mt-0.5">{c.node_id}</div>
                              </div>
                              {isActive && <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/50 animate-pulse" />}
                            </button>
                          );
                        })}
                        {filteredConcepts.length === 0 && <div className="p-4 text-center text-xs text-slate-400">No results found</div>}
                      </div>
                    )}
                  </div>
                </section>

                {/* Notes Section */}
                <section className="bg-white dark:bg-[#0F172A] rounded-3xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
                  <label className="flex items-center gap-2 mb-4 text-slate-800 dark:text-slate-200 font-bold">
                    <Save className="w-5 h-5 text-purple-500" />
                    Curated Notes
                  </label>
                  <textarea
                    rows={15}
                    placeholder="# Content Notes&#10;&#10;Write markdown study notes here..."
                    value={selectedClip.notes_markdown || ''}
                    onChange={(e) => setSelectedClip({ ...selectedClip, notes_markdown: e.target.value })}
                    className="w-full px-5 py-4 rounded-3xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 text-slate-900 dark:text-white text-sm font-mono outline-none focus:ring-2 focus:ring-purple-500/10 focus:border-purple-500/30 resize-none transition-all"
                  />
                  <div className="flex items-center gap-2 mt-4 text-[11px] text-slate-400 px-2">
                    <AlertCircle className="w-3.5 h-3.5" />
                    Markdown is automatically rendered in the student portal.
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center bg-white dark:bg-[#020617] relative overflow-hidden">
          {/* Subtle grid background */}
          <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
          
          <div className="text-center relative z-10">
            <div className="w-32 h-32 bg-slate-50 dark:bg-slate-900/50 rounded-[40px] flex items-center justify-center mx-auto mb-8 shadow-inner border border-slate-100 dark:border-slate-800">
              <Youtube className="w-16 h-16 text-slate-200 dark:text-slate-800" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Editor Inactive</h3>
            <p className="text-slate-500 max-w-xs mx-auto mb-8">
              Select or create a video clip to begin orchestrating interaction pause points and concept tags.
            </p>
            <button 
              onClick={handleCreateClip}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold shadow-xl shadow-blue-600/20 transition-all hover:scale-105"
            >
              Start New Clip
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

