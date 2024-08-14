/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "gradient-button":"linear-gradient(90deg, #D1FDFF 0%, #FFECBC 100%)"
      },
      colors: {
        black:"#000000",
        blue100:"#367BF5",
        blue200:"#E5EFFF",
        gray100:"#5E6366",
        gray200:"#C6CACC",
        gray300:"#919699",
        gray400:"#78909C",
        white100:"#F7F9FA",
        white200:"#E3E5E5",
        white300:"#F1F3F4",
        yellow100:"#F3AA18",
        red100:"#EA3D2F",
        green100:"#2FA84F",
        turquois100:"#069697",





        

    

      },
      boxShadow: {
        'custom': '0 4px 6px rgba(54, 123, 245, 0.24)',
      }
    },
  },
  plugins: [],
};
