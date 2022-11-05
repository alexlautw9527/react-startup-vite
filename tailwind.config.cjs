/** @type {import('tailwindcss').Config} */
module.exports = {
  /* 為了讓預設畫面正常拿掉preflight */
  corePlugins: {
    preflight: false,
  },

  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
