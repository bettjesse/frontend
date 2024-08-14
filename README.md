# NBK Bancassurance Frontend

This project involves developing the frontend for the NBK Bancassurance website based on a Figma design. The application is built using React and TypeScript and is fully responsive, ensuring a seamless user experience across all devices





## Key Features

1. Responsive Dynamic Menu: The application features a fully responsive menu that adapts to various screen sizes. On mobile devices, the menu collapses into a hamburger icon. When clicked, the hamburger icon opens a drawer-like menu, allowing users to navigate through the application easily ,this is achieved by using the UseState hook.

2. Figma Design Implementation: The frontend is developed based on a Figma design, ensuring pixel-perfect accuracy and consistency with the design specifications

3. Mobile Responsiveness: The application is optimized for mobile devices, ensuring an intuitive experience across various screen sizes and orientations.

4. Tailwind CSS for Styling: The application utilizes Tailwind CSS for styling, enabling rapid UI development with a utility-first approach. This ensures a clean and maintainable codebase while achieving a visually appealing interface.


5. React and TypeScript Integration: The application is built using React for the UI and TypeScript for type safety, providing a scalable frontend architecture.


   
# Deployment note
Please note that the live demo of this project is hosted on a free tier Render server. Due to the limitations of this hosting plan, you might experience some slowness when accessing the application. If you encounter any performance issues, you can follow the instructions below to set up and run the project locally for a smoother experience

# Setting Up the Project Locally


### Clone the Repository:
```shell
https://github.com/bettjesse/frontend.git
 ```

### Install Dependencies: 

```shell
 npm install
```
### Run the project
```shell
 npm run dev 
```



# Tailwind CSS Configuration
In this project, Tailwind CSS is configured to enhance the styling and visual effects. Key customizations include:

1. Extended Font Family: The Mulish font is added to the font family options, providing a modern sans-serif look across the application.
2. Custom Font Size: A new font size (xxs) has been defined, set at 0.625rem (10px), to accommodate very small text elements.
3. Custom Animations: The configuration includes a custom marquee animation. This animation moves content horizontally across the screen, creating a dynamic visual effect 

```typescript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Mulish', 'sans-serif'],
      },
      fontSize: {
        'xxs': '0.625rem', // 10px
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
      },
    },
  },
  plugins: [],
}


```
