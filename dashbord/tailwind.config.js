/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        black:"#000000",
        blue100:"#367BF5",
        gray100:"#5E6366",
        gray200:"#C6CACC",
        gray300:"#919699",
        white100:"#F7F9FA",
        

    

      },
      boxShadow: {
        'custom': '0 4px 6px rgba(54, 123, 245, 0.24)',
      }
    },
  },
  plugins: [],
};
