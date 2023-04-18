import React from "react";
import "./projects.css";
import jobSeeker from "../../images/JobSeeker.jpeg"
import data from "./data"

const Projects = () => {
    console.log(data);
    return (
        <section id="projects" class="projects sec-pad">
            <div class="main-container">
                <h2 class="heading heading-sec heading-sec__mb-bg">
                    <span class="heading-sec__main">Projects</span>
                    <span class="heading-sec__sub">
                        Here you will find some of the personal and clients projects that I
                        created with each project containing its own case study
                    </span>
                </h2>

                <div class="projects__content">
                    {data.map(project => {
                        return (
                            <div class="projects__row">
                                <div class="projects__row-img-cont">
                                    <img src={project.image} alt={project.title} class="projects__row-img" loading="lazy" />
                                </div>
                                <div class="projects__row-content">
                                    <h3 class="projects__row-content-title">{project.title}</h3>
                                    <p class="projects__row-content-desc">
                                        {project.description}
                                    </p>
                                    <a class="btn btn--med btn--theme dynamicBgClr" href={project.url} target="_blank">Case Study</a>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </section>

    )
}

export default Projects; 