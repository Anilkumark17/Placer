import React from "react";
import Navbar from "./components/Navbar";
import Home from "./Home/Home";
import Courses from "./Courses/Courses";
import About from "./About/About";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <Navbar />
            <Home />
            <Courses />
            <About />
            <Footer />
        </>
    );
}

export default App;
