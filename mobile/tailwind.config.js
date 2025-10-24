/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./App.tsx", "./components/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        'primary': '#141414',      // Deep Background
        'secondary': '#222324',    //Input Background
        'surface': '#1C1C1E',      // Card
        'accent': '#E50914',       // Action/CTA Red
        'text-light': '#FFFFFF',   // Primary Text
        'text-muted': '#A0A0A0',   // Secondary/Muted Text
        'blue-subtle': '#2563EB',  // Link/Secondary Action Blue
        // You can also add shadows, hover states, etc., here
      },
      fontFamily: {
        'sans': ['Poppins', 'system-ui'], // Use 'Poppins' as the primary font
      },
    },
  },
  plugins: [],
}