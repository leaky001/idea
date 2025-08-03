module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
     colors: {
        magnolia: '#FBF0FF',        // Very light pastel background
        lavender: '#B411EF',        // Bright Lavender for accents/buttons
        violet: '#A340E0',          // Lavender Indigo for highlights
        indigoLavender: '#D9B3F0',  // Soft lavender for hero sections (adjusted lighter for contrast)
        deepViolet: '#631499',      // Dark Violet for headings, strong contrast text
        eerieBlack: '#1F1F1F',      // Almost black for main body text
      },
    },
  },
  plugins: [],
};
