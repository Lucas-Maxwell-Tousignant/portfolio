import React from "react";
import "./projects.css";

const Projects = () => {
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
                    <div class="projects__row">
                        <div class="projects__row-img-cont">
                            <img src="https://d33wubrfki0l68.cloudfront.net/19c708670a1f21231c1e2efa6ba38dbf52b15343/3237e/assets/jpeg/dopefolio.jpeg" alt="Software Screenshot" class="projects__row-img" loading="lazy" />
                        </div>
                        <div class="projects__row-content">
                            <h3 class="projects__row-content-title">Amazoom</h3>
                            <p class="projects__row-content-desc">
                                Portfolio is a successful Open-Source project that I created which have been featured on
                                some of the biggest tech sites like CSS-Tricks, Hostinger, etc &amp; used by thousands of developers globally
                            </p>
                            <a class="btn btn--med btn--theme dynamicBgClr" href="/project-1" target="_blank">Case Study</a>
                        </div>
                    </div>
                    <div class="projects__row">
                        <div class="projects__row-img-cont">
                            <img src="https://d33wubrfki0l68.cloudfront.net/74f6186aaa2b6d5f6ea6da1013abfeb672f5c807/aee81/assets/jpeg/crown-template.jpeg" alt="Software Screenshot" class="projects__row-img" loading="lazy" />
                        </div>
                        <div class="projects__row-content">
                            <h3 class="projects__row-content-title">Crown Template</h3>
                            <p class="projects__row-content-desc">
                                Crown is a web template that I created targeting the restaurant
                                and food industry which anyone can use to present their business
                                online.
                            </p>
                            <a class="btn btn--med btn--theme dynamicBgClr" href="/project-4" target="_blank">Case Study</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Projects; 