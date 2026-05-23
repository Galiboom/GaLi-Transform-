import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#070B14',
        panel: 'rgba(12, 18, 31, 0.72)',
        panelSoft: 'rgba(20, 28, 46, 0.52)',
        line: 'rgba(190, 210, 235, 0.14)',
        text: '#EAF0F8',
        muted: '#93A4BA',
        accent: '#9FE7F5',
        accent2: '#F5E9D0',
        danger: '#FF7B82',
        success: '#8EE3B8',
      },
      boxShadow: {
        glass: '0 18px 60px rgba(0, 0, 0, 0.35)',
      },
      backgroundImage: {
        texture:
          'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};

export default config;