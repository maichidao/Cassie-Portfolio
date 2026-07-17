function ProjectCard({ project }) {
    const { title, desc, tags, gradient, link } = project;

    return (
        <div className="project-card">
        <div className="project-thumb" style={{ background: gradient }}></div>
        <div className="project-body">
            <div className="project-title">{title}</div>
            <div className="project-desc">{desc}</div>
            <div className="tag-row">
            {tags.map((tag) => (
                <span className="tag" key={tag}>
                {tag}
                </span>
            ))}
            </div>
            <a
            href={link}
            className="project-link"
            target="_blank"
            rel="noreferrer"
            >
            ↗ GitHub
            </a>
        </div>
        </div>
    );
}

export default ProjectCard;
