import React from "react";
import "./about.css";

const About = () => {
    return (
        <section id="about" class="about sec-pad">
            <div class="main-container">
                <h2 class="heading heading-sec heading-sec__mb-med">
                    <span class="heading-sec__main">About Me</span>
                    <span class="heading-sec__sub">
                        Discover additional details about my background, professional activities, and primary expertise in the realm of coding and technological prowess here.
                    </span>
                </h2>
                <div class="about__content">
                    <div class="about__content-main">
                        <h3 class="about__content-title">Get to know me!</h3>
                        <div class="about__content-details">
                            <p class="about__content-details-para">
                                I'm a <strong>Full-Stack Developer</strong>  with expertise in HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB. I create efficient and effective web applications with dynamic user interfaces and secure databases. Check out some of my work in the <strong>Projects</strong> section.
                            </p>
                            <p class="about__content-details-para">
                                I welcome career prospects that enable me to contribute, develop, and expand my horizons. Please feel free to reach out if you have a fitting opportunity that aligns with my skill set and background.
                            </p>
                        </div>
                    </div>
                    <div class="about__content-skills">
                        <h3 class="about__content-title">My Skills</h3>
                        <div class="skills">
                            <div class="skills__skill">HTML</div>
                            <div class="skills__skill">CSS</div>
                            <div class="skills__skill">JavaScript</div>
                            <div class="skills__skill">React</div>
                            <div class="skills__skill">PostgresSQL</div>
                            <div class="skills__skill">GIT</div>
                            <div class="skills__skill">Github</div>
                            <div class="skills__skill">Responsive Design</div>
                            <div class="skills__skill">Node.JS</div>
                            <div class="skills__skill">Terminal</div>
                            <div class="skills__skill">Express Basics</div>
                            <div class="skills__skill">MongoDB</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default About; 