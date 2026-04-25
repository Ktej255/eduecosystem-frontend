export const SUBJECT_COLORS: Record<string, string> = {
  'geography': '#1D9E75',
  'environment': '#639922',
  'science': '#378ADD',
  'science-technology': '#378ADD',
  'economy': '#BA7517',
  'economics': '#BA7517',
  'polity': '#7F77DD',
  'ancient-history': '#D85A30',
  'ancient_history': '#D85A30',
  'medieval-history': '#993556',
  'modern-history': '#5F5E5A',
  'art-culture': '#D4537E',
  'society': '#888780',
  'international-relations': '#185FA5',
  'ir': '#185FA5',
  'ethics': '#0F6E56',
  'disaster-management': '#639922',
  'csat': '#378ADD',
}

export function getSubjectColor(subject: string): string {
  const key = subject.toLowerCase().replace(/\s+/g, '-')
  return SUBJECT_COLORS[key] || '#1D9E75'
}
