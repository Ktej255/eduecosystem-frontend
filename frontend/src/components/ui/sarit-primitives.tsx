'use client'

import React from 'react'

// ─── SaritLogo ───────────────────────────────────────────────────────────────

interface SaritLogoProps {
  size?: number
  light?: boolean
}

export function SaritLogo({ size = 22, light = false }: SaritLogoProps) {
  const uid = React.useId().replace(/:/g, 'x')
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: Math.round(size * 0.36) }}>
      <svg width={size} height={size} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id={`slg-${uid}`} cx="40%" cy="35%" r="70%">
            <stop offset="0%" stopColor="#1D9E75" />
            <stop offset="100%" stopColor="#1a3a2a" />
          </radialGradient>
        </defs>
        <circle cx="11" cy="11" r="10" fill={`url(#slg-${uid})`} />
        <ellipse cx="11" cy="11" rx="10" ry="5" stroke="white" strokeOpacity="0.35" strokeWidth="0.7" fill="none" />
        <ellipse cx="11" cy="11" rx="6" ry="3" stroke="white" strokeOpacity="0.35" strokeWidth="0.7" fill="none" />
        <circle cx="11" cy="4.5" r="2" fill="#EF9F27" />
      </svg>
      <span style={{
        fontFamily: 'var(--font-display)',
        fontSize: Math.round(size * 0.65),
        fontWeight: 700,
        color: light ? '#fff' : 'var(--forest)',
        letterSpacing: '0.02em',
        lineHeight: 1,
        userSelect: 'none',
      }}>
        Sarit
        <span style={{ fontWeight: 400, color: light ? 'rgba(255,255,255,0.45)' : 'var(--ink-35)', margin: '0 1px' }}>·</span>
        <span style={{ color: light ? 'rgba(255,255,255,0.85)' : 'var(--teal)' }}>Learn</span>
      </span>
    </span>
  )
}

// ─── SaritIcon ───────────────────────────────────────────────────────────────

interface SaritIconProps {
  name: string
  size?: number
  color?: string
  strokeWidth?: number
}

const ICONS: Record<string, string> = {
  play:     'M5 3l14 9-14 9V3z',
  pause:    'M10 4v16M14 4v16',
  mic:      'M12 2a3 3 0 0 1 3 3v6a3 3 0 0 1-6 0V5a3 3 0 0 1 3-3zM19 10v1a7 7 0 0 1-14 0v-1M12 19v3M8 22h8',
  book:     'M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5A2.5 2.5 0 0 0 6.5 22H20V2H6.5A2.5 2.5 0 0 0 4 4.5v15z',
  check:    'M20 6L9 17l-5-5',
  arrow:    'M5 12h14M12 5l7 7-7 7',
  chev:     'M9 18l6-6-6-6',
  spark:    'M13 2L3 14h9l-1 8 10-12h-9l1-8z',
  calendar: 'M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z',
  brain:    'M9.5 2A2.5 2.5 0 0 0 7 4.5v.5a2.5 2.5 0 0 0-2.5 2.5A2.5 2.5 0 0 0 2 10v4a2.5 2.5 0 0 0 2.5 2.5A2.5 2.5 0 0 0 7 19v.5A2.5 2.5 0 0 0 9.5 22h5a2.5 2.5 0 0 0 2.5-2.5V19a2.5 2.5 0 0 0 2.5-2.5A2.5 2.5 0 0 0 22 14v-4a2.5 2.5 0 0 0-2.5-2.5A2.5 2.5 0 0 0 17 5v-.5A2.5 2.5 0 0 0 14.5 2z',
  camera:   'M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2zM12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8z',
  upload:   'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12',
  pen:      'M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z',
  target:   'M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0zM16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM13 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0z',
  map:      'M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4zM8 2v16M16 6v16',
  layers:   'M12 2l9 4.5-9 4.5L3 6.5 12 2zM21 12l-9 4.5L3 12M21 17l-9 4.5L3 17',
  bell:     'M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9zM13.73 21a2 2 0 0 1-3.46 0',
  sun:      'M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42M12 7a5 5 0 1 0 0 10A5 5 0 0 0 12 7z',
  moon:     'M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z',
  lock:     'M19 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2zM17 11V7a5 5 0 0 0-10 0v4',
  home:     'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM9 22V12h6v10',
  search:   'M21 21l-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0z',
  repeat:   'M17 1l4 4-4 4M3 11V9a4 4 0 0 1 4-4h14M7 23l-4-4 4-4M21 13v2a4 4 0 0 1-4 4H3',
  leaf:     'M6.5 3c0 0 0 7.5 5.5 9.5s8-2 8-7.5c0 0-5 2-7.5-1S6.5 3 6.5 3zM6.5 3l-.5 18',
  flame:    'M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z',
  waves:    'M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1',
  list:     'M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01',
  send:     'M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z',
  close:    'M18 6L6 18M6 6l12 12',
  trophy:   'M6 9H3V5h3M18 9h3V5h-3M6 9a6 6 0 0 0 12 0V5H6v4zM12 15v6M8 21h8',
}

export function SaritIcon({ name, size = 18, color = 'currentColor', strokeWidth = 1.7 }: SaritIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={ICONS[name] ?? ICONS.close} />
    </svg>
  )
}

// ─── SaritGlobe ──────────────────────────────────────────────────────────────

interface SaritGlobeProps {
  size?: number
  label?: string
  monthDay?: number
  totalDays?: number
}

export function SaritGlobe({ size = 260, label = 'Geography', monthDay = 1, totalDays = 30 }: SaritGlobeProps) {
  const uid = React.useId().replace(/:/g, 'x')
  const cx = 150
  const cy = 150
  const sphereR = 120
  const ringR = 138
  const ringC = 2 * Math.PI * ringR
  const pct = Math.min(1, Math.max(0, monthDay / totalDays))
  const dashArray = `${ringC * pct} ${ringC}`
  const latLines: [number, number][] = [[-38, 112], [38, 112], [-68, 60], [68, 60]]

  return (
    <svg width={size} height={size} viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id={`sg-sp-${uid}`} cx="40%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#2d5a44" />
          <stop offset="55%" stopColor="#1a3a2a" />
          <stop offset="100%" stopColor="#0f2619" />
        </radialGradient>
        <radialGradient id={`sg-sh-${uid}`} cx="35%" cy="30%" r="55%">
          <stop offset="0%" stopColor="white" stopOpacity="0.18" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`sg-pg-${uid}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#EF9F27" />
          <stop offset="100%" stopColor="#1D9E75" />
        </linearGradient>
        <clipPath id={`sg-cl-${uid}`}>
          <circle cx={cx} cy={cy} r={sphereR} />
        </clipPath>
      </defs>

      {/* Track ring */}
      <circle cx={cx} cy={cy} r={ringR} stroke="rgba(28,28,26,0.12)" strokeWidth="6" />

      {/* Progress ring */}
      {pct > 0 && (
        <circle
          cx={cx} cy={cy} r={ringR}
          stroke={`url(#sg-pg-${uid})`}
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={dashArray}
          transform={`rotate(-90 ${cx} ${cy})`}
        />
      )}

      {/* Sphere */}
      <circle cx={cx} cy={cy} r={sphereR} fill={`url(#sg-sp-${uid})`} />
      <circle cx={cx} cy={cy} r={sphereR} fill={`url(#sg-sh-${uid})`} />

      {/* Longitude meridians */}
      {[30, 65, 100].map((rx, i) => (
        <ellipse key={i} cx={cx} cy={cy} rx={rx} ry={sphereR}
          stroke="#1D9E75" strokeOpacity="0.35" strokeWidth="0.9"
          clipPath={`url(#sg-cl-${uid})`} />
      ))}
      <line x1={cx} y1={cy - sphereR} x2={cx} y2={cy + sphereR}
        stroke="#1D9E75" strokeOpacity="0.35" strokeWidth="0.9"
        clipPath={`url(#sg-cl-${uid})`} />

      {/* Latitude parallels */}
      <line x1={cx - sphereR} y1={cy} x2={cx + sphereR} y2={cy}
        stroke="#EF9F27" strokeOpacity="0.22" strokeWidth="0.9"
        clipPath={`url(#sg-cl-${uid})`} />
      {latLines.map(([dy, rx], i) => (
        <ellipse key={i} cx={cx} cy={cy + dy} rx={rx} ry={18}
          stroke="#EF9F27" strokeOpacity="0.22" strokeWidth="0.9"
          clipPath={`url(#sg-cl-${uid})`} />
      ))}

      {/* Landmass blobs */}
      <g clipPath={`url(#sg-cl-${uid})`} fill="#2d5a44" fillOpacity="0.85">
        <path d="M118,128 C128,108 157,103 167,118 C177,133 171,154 156,157 C141,160 113,148 118,128Z" />
        <path d="M162,168 C172,163 186,167 189,177 C192,187 181,197 169,194 C157,191 152,173 162,168Z" />
        <path d="M82,163 C87,153 102,151 109,160 C116,169 110,183 99,183 C88,183 77,173 82,163Z" />
      </g>

      {/* Ambient teal dots */}
      <circle cx="135" cy="114" r="3" fill="#1D9E75" fillOpacity="0.5" />
      <circle cx="172" cy="142" r="2" fill="#1D9E75" fillOpacity="0.5" />
      <circle cx="149" cy="173" r="2.5" fill="#1D9E75" fillOpacity="0.5" />

      {/* Orbiting amber node — rotates around sphere center via view-box transform-origin */}
      <g style={{ transformBox: 'view-box', transformOrigin: 'center', animation: 'sl-spin 40s linear infinite' } as React.CSSProperties}>
        <circle cx={cx} cy={cy - ringR} r="5" fill="#EF9F27" />
      </g>

      {/* Center label */}
      <text x={cx} y={cy - 14} textAnchor="middle" fontSize="9"
        fontFamily="Plus Jakarta Sans, sans-serif" fill="white" fillOpacity="0.55" letterSpacing="0.08em">
        {'MONTH ' + String(monthDay).padStart(2, '0')}
      </text>
      <text x={cx} y={cy + 8} textAnchor="middle" fontSize="19"
        fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="700" fill="white">
        {label}
      </text>
      <text x={cx} y={cy + 26} textAnchor="middle" fontSize="11"
        fontFamily="Plus Jakarta Sans, sans-serif" fill="#EF9F27">
        {monthDay} / {totalDays}
      </text>
    </svg>
  )
}

// ─── RetentionRing ────────────────────────────────────────────────────────────

interface RetentionRingProps {
  pct?: number
  size?: number
  color?: string
  label?: string | null
  sublabel?: string | null
  thickness?: number
}

export function RetentionRing({
  pct = 78,
  size = 96,
  color = 'var(--teal)',
  label,
  sublabel,
  thickness = 8,
}: RetentionRingProps) {
  const half = size / 2
  const r = half - thickness / 2 - 2
  const circumference = 2 * Math.PI * r
  const dash = circumference * Math.min(100, Math.max(0, pct)) / 100

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle cx={half} cy={half} r={r} fill="none" stroke="var(--ink-08)" strokeWidth={thickness} />
      <circle
        cx={half} cy={half} r={r}
        fill="none" stroke={color}
        strokeWidth={thickness}
        strokeLinecap="round"
        strokeDasharray={`${dash} ${circumference}`}
        transform={`rotate(-90 ${half} ${half})`}
      />
      {label != null && (
        <text
          x={half} y={sublabel != null ? half - 7 : half}
          textAnchor="middle" dominantBaseline="middle"
          fontSize={size * 0.22} fontWeight="700"
          fontFamily="Plus Jakarta Sans, sans-serif" fill="var(--ink)">
          {label}
        </text>
      )}
      {sublabel != null && (
        <text
          x={half} y={half + 9}
          textAnchor="middle" dominantBaseline="middle"
          fontSize={size * 0.14}
          fontFamily="Plus Jakarta Sans, sans-serif" fill="var(--ink-55)">
          {sublabel}
        </text>
      )}
    </svg>
  )
}

// ─── StreakBadge ──────────────────────────────────────────────────────────────

interface StreakBadgeProps {
  days?: number
  compact?: boolean
}

export function StreakBadge({ days = 12, compact = false }: StreakBadgeProps) {
  const flameStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    animation: 'sl-flame 1.4s ease-in-out infinite',
  }

  const flameSvg = (
    <svg width={14} height={14} viewBox="0 0 24 24" fill="#EF9F27" stroke="none" style={flameStyle}>
      <path d={ICONS.flame} />
    </svg>
  )

  if (compact) {
    return (
      <span style={{
        display: 'inline-flex', alignItems: 'center', gap: 3,
        color: '#BA7517', fontFamily: 'var(--font-display)',
        fontWeight: 700, fontSize: 13,
      }}>
        {flameSvg}
        {days}
      </span>
    )
  }

  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      background: 'rgba(239,159,39,0.12)', borderRadius: 999,
      padding: '4px 12px',
      fontFamily: 'var(--font-display)', fontWeight: 700,
      color: '#BA7517', fontSize: 13,
    }}>
      {flameSvg}
      <span>{days} day streak</span>
    </span>
  )
}
