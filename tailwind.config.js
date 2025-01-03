/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        serviceBg: "url('./src/assets/assets/home/chef-service.jpg')",
        FeaturedBg: "url('./src/assets/assets/home/featured.jpg')",
        loginBg: "url('./src/assets/assets/others/authentication.png')",
      }
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('daisyui'),
  ],
}

