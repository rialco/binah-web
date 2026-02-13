/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  safelist: [
    'bg-[#25d366]',
    'bg-blue-500',
    'bg-amber-500',
    'ring-2',
    'ring-binah-purple/30',
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      serif: ['Lora', 'Georgia', 'serif'],
      display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
    },
    extend: {
      colors: {
        binah: {
          purple: '#4d37f6',
          charcoal: '#171e19',
          lavender: '#ede9fe',
          dark: '#272727',
        },
      },
      boxShadow: {
        'brutal-sm': '4px 4px 0px 0px #000000',
        'brutal-md': '8px 8px 0px 0px #000000',
        'brutal-lg': '12px 12px 0px 0px #000000',
        'brutal-purple': '8px 8px 0px 0px #4d37f6',
        'brutal-sm-hover': '0px 0px 0px 0px #000000',
        'brutal-md-hover': '4px 4px 0px 0px #000000',
      },
      borderRadius: {
        brutal: '0.625rem',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
    },
  },
  plugins: [],
};
