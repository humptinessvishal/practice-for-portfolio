import React from "react";
import Header from "./Components/Header";
import About from "./Components/About";
import Paragraph from "./Components/Paragraph";

const App = () => {
    return (
        <div>
            <Header />
            <h1>About Me</h1>
            <About />
            <Paragraph
                h1="Skills"
                para="I am a Front-end Developer with a strong foundation in HTML5, CSS3, and JavaScript (ES6+), complemented by proficiency in popular frameworks like React.I excel in responsive design, ensuring optimal functionality across various devices.Git version control, cross-browser compatibility, and a commitment to performance optimization further bolster my technical toolkit.With a keen eye for UX design principles and proficiency in graphic design software, I bring a holistic approach to web development, creating seamless and engaging user experiences."
            />
            <Paragraph
                h1="Qualifications"
                para="I hold a Bachelor of Arts degree with a strong technical foundation in HTML5, CSS3, and JavaScript (ES6+). Proficient in popular front-end frameworks like React, I excel in crafting visually appealing and user-friendly interfaces. With experience in version control systems like Git, I ensure seamless collaboration in development workflows. Additionally, my background in UX design principles and proficiency in graphic design tools like Adobe XD complement my ability to create engaging and optimized web experiences. Effective problem-solving, attention to detail, and a passion for excellence further define my qualifications as a Front-end Developer."
            />
            <Paragraph
                h1="Projects"
                para="I've spearheaded several impactful projects, including a dynamic e-commerce platform where I served as Lead Developer, employing technologies like HTML, CSS, JavaScript, and React for seamless user interactions. Additionally, I designed and implemented a mobile-responsive portfolio website, showcasing my proficiency in user-centered design principles. Another notable achievement includes optimizing a content-heavy blog site for improved page load speed, enhancing user experience. These projects collectively demonstrate my expertise in front-end development and my ability to create visually engaging, user-friendly web experiences."
            />
        </div>
    );
};

export default App;