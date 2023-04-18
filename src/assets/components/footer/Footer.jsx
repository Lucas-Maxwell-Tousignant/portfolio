import React from "react";
import "./footer.css";

const Footer = () => {
    return (
        <footer class="main-footer">
            <div class="main-container">
                <div class="main-footer__upper">
                    <div class="main-footer__row main-footer__row-1">
                        <h2 class="heading heading-sm main-footer__heading-sm">
                            <span>Social</span>
                        </h2>
                        <div class="main-footer__social-cont">
                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/lucas-tousignant/">
                                <img class="main-footer__icon" src="https://d33wubrfki0l68.cloudfront.net/7f29579dde49e02480372aa49f7189c5536b0118/34b92/assets/png/linkedin-ico.png" alt="Lucas Tousignant Linkedin Profile" />
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://github.com/Lucas-Maxwell-Tousignant">
                                <img class="main-footer__icon" src="https://d33wubrfki0l68.cloudfront.net/5557d5a11584d7201a38ee1a95200f57a4cc0f88/15085/assets/png/github-ico.png" alt="Lucas Github Profile" />
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://dev.to/lucasmaxwelltousignant">
                                <img class="main-footer__icon" src="https://d33wubrfki0l68.cloudfront.net/c7b1e51b8c75a239d68af3d42866666580f390ec/dcc7c/assets/png/blog-ico.png" alt="lucasmaxwelltousignant DEV.to Blog Profile" />
                            </a>
                        </div>
                    </div>
                    <div class="main-footer__row main-footer__row-2">
                        <h2 class="heading heading-sm text-lt">Lucas Tousignant</h2>
                        <p class="main-footer__short-desc">
                            A versatile Full-Stack Web Developer specializing in crafting both Frontend and Backend components of websites and web applications, contributing to the overall success and effectiveness of the product.
                        </p>
                    </div>
                </div>
                <div class="main-footer__lower">
                    &copy;  {new Date().getFullYear()}. Made by
                    <a rel="noreferrer" target="_blank" href="https://rammaheshwari.com"> Lucas Tousignant</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer; 