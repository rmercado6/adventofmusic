/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#1e2a47',         // Deep blue, for dark headers, navigation
        silver: '#777e91',           // Neutral grayish-blue, for text or borders
        gold: '#ffb600',             // Vibrant gold, for highlights, buttons, etc.
        red: '#e04e4e',              // Rich red, for alerts, actions, etc.
        green: '#78c3a3',            // Soft green, for balance, buttons, etc.
        white: '#f9fafb',            // Clean white background
        gray: '#4b5563',             // Dark gray text
        lavender: '#d1c6e1',         // Soft lavender, for subtle accents or borders
        blue: '#2d3a58',             // Twilight blue, for secondary elements
      },
    },
  },
  plugins: [],
}

