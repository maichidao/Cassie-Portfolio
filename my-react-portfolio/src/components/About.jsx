import "../css/About.css";

const SKILL = [
    { name: "HTML", color: "var(--amber)"},
    { name: "CSS", color: "var(--violet)"},
    { name: "C++", color: "var(--teal)"},
    { name: "C#", color: "var(--amber)"},
    { name: "JavaScript", color: "var(--rose)"},
    { name: "Python", color: "var(--violet)"},
    { name: "Git & GitHub", color: "var(--teal)"},
];

function About() {
    return (
        <section id="about" className="about">
            <h2 className="section-title">About me &amp; Skills</h2>

            <div className="about-grid">
                <p className="about-text">
                    I'm Mai Chi, a 3rd-year Software Engineering student focused on fullstack 
                    development with React/Next.js for frontend and Node.js for backend. I enjoy 
                    owning the entire product lifecycle - from designing APIs and handling data, 
                    to building user-friendly interfaces.
                    To me, a great product isn't just about working correctly - it needs to be 
                    maintainable, scalable, and deliver a smooth experience for end users. I'm 
                    always exploring new technologies and applying best practices in every project, 
                    from code organization to performance optimization.
                </p>

                <div className="skills-grid">
                    {SKILL.map((skill) => (
                        <div className="skill-pill" key={skill.name}>
                            <span 
                                className="skill-dot"
                                style={{background: skill.color}}
                            ></span>
                            {skill.name}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default About;
