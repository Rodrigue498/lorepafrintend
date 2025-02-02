module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...require('tailwindcss/defaultTheme').fontFamily.sans],
        serif: ['Inter', ...require('tailwindcss/defaultTheme').fontFamily.serif]
      },
      // Extend with custom table styles
      tableLayout: ['fixed'],
      colors: {
        // Customize table colors if needed
        'table-border': '#ddd', // For example, a custom border color
      }
    },
    screens: {
      xs: '530px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    }
  },
  variants: {
    extend: {
      backgroundColor: ['hover'],
      boxShadow: ['hover'],
      transform: ['hover'],
      scale: ['hover'],
      // Enable table styling variants (if needed)
      borderWidth: ['hover', 'focus'],
      textColor: ['group-hover'],
    }
  },
  important: true,
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    // Add the table plugin if you want a more styled table out-of-the-box
  ],
  corePlugins: {
    preflight: false, // Disable Preflight if needed
  }
}
