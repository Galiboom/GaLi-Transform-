import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#f3f6fb',
        panel: '#ffffff',
        panelSoft: '#f8fafc',
        line: '#e2e8f0',
        text: '#0f172a',
        muted: '#64748b',
        accent: '#2563eb',
        accent2: '#0f766e',
        danger: '#e11d48',
        success: '#059669',
      },
      boxShadow: {
        glass: '0 10px 28px rgba(15, 23, 42, 0.06)',
      },
      backgroundImage: {
        texture:
          'linear-gradient(rgba(15,23,42,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.03) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};

export default config;