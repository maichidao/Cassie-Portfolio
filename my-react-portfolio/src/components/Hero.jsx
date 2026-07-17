import avatarImg from "../assets/MaiChi.png";
import "../css/Hero.css";

function Hero(){
    return (
        <section id="home" className="hero">
            <div className="hero-avatar-wrapper">
                <img src={avatarImg} alt="Mai Chi" className="avatar" />
            </div>
            
            <div className="hero-side">
                <div>
                    <h1 className="title">
                        Mai Chi -<br />
                        <span className="nowrap">FullStack Developer</span>
                    </h1>
                    <p className="subtitle">
                        Passionate about building clean, scalable web applications.
                    </p>
                </div>

                <div className="cta-row">
                    <a href="https://www.facebook.com/meichy2908/" className="btn btn-primary">
                        Get in touch
                    </a>
                    <a href="/DAO THI MAI CHI.pdf" className="btn btn-ghost" download>
                        Download CV
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Hero;