/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5f6FFF",
      },
      gridTemplateColumns: {
        'auto': "repeat(auto-fit, minmax(200px, 250px))",
        // repeat(): A CSS function that creates a repeating pattern of columns
        // auto-fit: Automatically fits as many columns as possible into the available space
        // minmax(200px, 1fr): Sets the size boundaries for each column
        // 200px: Minimum column width
        // 1fr: Maximum column width using a flexible fraction unit
      },
    },
  },
  plugins: [
  ],
};
