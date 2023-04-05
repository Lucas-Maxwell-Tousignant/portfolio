import React from "react";
import "./banner.css";

const Banner = () => {
    return (

        <section className="home-hero">
            <div className="home-hero__content">
                <h1 className="heading-primary">Hey, I'm Lucas Tousignant</h1>
                <div className="home-hero__info">
                    <p className="text-primary">
                        I am a full stack developer with expertise in HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB. I create efficient and effective web applications with dynamic user interfaces and secure databases.
                    </p>
                </div>
                <div className="home-hero__cta">
                    <a href="./#projects" className="btn btn--bg">Projects</a>
                </div>
            </div>
            <div className="home-hero__socials">
                <div className="home-hero__social">
                    <a href="https://www.linkedin.com/in/lucas-tousignant/" className="home-hero__social-icon-link" rel="noreferrer" target="_blank">
                        <img src="https://d33wubrfki0l68.cloudfront.net/d8e6e1e636531e28274a1b8b6d947b817f6145bd/d42d3/assets/svg/linkedin-dark.svg" alt="Lucas Maxwell Tousignant Linkedin Profile" className="home-hero__social-icon" />
                    </a>
                </div>
                <div className="home-hero__social">
                    <a href="https://github.com/Lucas-Maxwell-Tousignant" className="home-hero__social-icon-link" rel="noreferrer" target="_blank">
                        <img src="https://d33wubrfki0l68.cloudfront.net/38469cf88d038b6ba3322c9fcb93a8f7167df4b9/cb0b9/assets/svg/github-dark.svg" alt="Lucas Maxwell Tousignant Github Profile" className="home-hero__social-icon" />
                    </a>
                </div>

                <div className="home-hero__social">
                    <a href="https://dev.to/lucasmaxwelltousignant" className="home-hero__social-icon-link" rel="noreferrer" target="_blank">
                        <img src="https://d33wubrfki0l68.cloudfront.net/e978c8491d93813aa00b3dc80b9abfb0d64a9086/3c187/assets/svg/book-dark.svg" alt="RammCodes DEV.to Blog Profile" className="home-hero__social-icon" />
                    </a>
                </div>
            </div>
        </section>
    )

}

export default Banner; 