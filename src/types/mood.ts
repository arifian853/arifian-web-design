export type Mood = 'beige' | 'teal' | 'graphite' | 'slate' | 'forest' | 'skynight' | 'lavender' | 'rosewood';

export interface MoodOption {
  id: Mood;
  label: string;
  theme: 'light' | 'dark';
  color: string;
  accent: string;
}

export const MOODS: MoodOption[] = [
  { id: 'beige', label: 'Beige', theme: 'light', color: '#FAF8F5', accent: '#6B5040' },
  { id: 'teal', label: 'Teal', theme: 'light', color: '#F3F8F7', accent: '#3F6B67' },
  { id: 'forest', label: 'Forest', theme: 'light', color: '#F4F7F1', accent: '#49644B' },
  { id: 'slate', label: 'Slate', theme: 'light', color: '#F6F7F8', accent: '#4D5D6C' },
  { id: 'lavender', label: 'Lavender', theme: 'light', color: '#F7F5FA', accent: '#665A7A' },
  { id: 'rosewood', label: 'Rosewood', theme: 'light', color: '#FAF5F5', accent: '#7A4F55' },
  { id: 'graphite', label: 'Graphite', theme: 'dark', color: '#111315', accent: '#B8C0C8' },
  { id: 'skynight', label: 'Sky Night', theme: 'dark', color: '#0B1220', accent: '#8FB7FF' },
];
