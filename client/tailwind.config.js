module.exports = {
  // jit mode => スタイルの柔軟性, 環境ごとのCSSの統一, パフォーマンスの向上など
  mode: "jit",
  purge: ['./src/pages/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: require('daisyui/colors'),
      fontFamily: { sans: ['Helvetica Neue', 'Arial', 'Hiragino Kaku Gothic ProN', 'Meiryo', 'sans-serif'] },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('daisyui')],
}
