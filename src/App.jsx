import { useState } from "react";
import Router from "./Router/Router";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

// Initialize AOS
AOS.init();

AOS.init({
  duration: 1000, // Animation duration
  easing: "ease", // Easing function
});

function App() {
  return (
    <>
      <Router />
    </>
  );
}

export default App;
