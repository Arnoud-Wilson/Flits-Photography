import React from "react";
import DogPhotoZuko from "../../assets/homepage_photos/Zuko_mobile.jpg";


function Home() {

    return (
        <section className="home-page">
            <section className="home-header-page">
                <article className="home-header-photo">
                    <img src={DogPhotoZuko} alt="nice dog"/>
                </article>
                <article className="home-header-text">
                    <h1>Home header</h1>
                    <h2>Hondenfotografie Maarssen</h2>
                </article>
            </section>
            <section className="home-about-page">
                <article className="home-about-photo">
                    {/*<img src={DogPhotoZuko} alt="photographer"/>*/}
                </article>
                <article className="home-about-text">
                    <h1>Home about</h1>
                    <h2>Dit ben ik</h2>
                </article>
            </section>
            <section className="home-dog-page">
                <article className="home-dog-photo">
                    {/*<img src={DogPhotoZuko} alt="dog"/>*/}
                </article>
                <article className="home-dog-text">
                    <h1>Home Dog</h1>
                    <h2>Optie hondenfotografie</h2>
                </article>
            </section>
            <section className="home-family-page">
                <article className="home-family-photo">
                    {/*<img src={DogPhotoZuko} alt="family"/>*/}
                </article>
                <article className="home-family-text">
                    <h1>Home family</h1>
                    <h2>Optie familiefotografie</h2>
                </article>
            </section>
            <section className="home-branding-page">
                <article className="home-branding-photo">
                    {/*<img src={DogPhotoZuko} alt="brand"/>*/}
                </article>
                <article className="home-branding-text">
                    <h1>Home branding</h1>
                    <h2>Optie brandingfotografie</h2>
                </article>
            </section>
            <section className="home-contact-page">
                <article className="home-contact-text">
                    <h1>Home contact</h1>
                    <h2>Contact formulier</h2>
                </article>
            </section>
            <section className="home-footer-page">
                <article className="home-footer-photo">
                    {/*<img src={DogPhotoZuko} alt="instagram logo"/>*/}
                </article>
                <article className="home-footer-text">
                    <h1>Home footer</h1>
                </article>
            </section>
        </section>
    );
}

export default Home;