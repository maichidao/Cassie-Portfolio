import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import "../css/Projects.css";

const FILTERS = [
    { key: "all", label: "All" },
    { key: "python", label: "Python" },
    { key: "csharp", label: "C#" },
];

const API_URL = "http://localhost:5000/api/projects";

function Projects() {
    const [searchTerm, setSearchTerm] = useState("");
    const [activeFilter, setActiveFilter] = useState("all");
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const params = new URLSearchParams();
        if (searchTerm.trim()) params.append("search", searchTerm.trim());
        if (activeFilter !== "all") params.append("tech", activeFilter);

        setLoading(true);
        fetch(`${API_URL}?${params.toString()}`)
            .then((res) => res.json())
            .then((res) => {
                setProjects(res.data);
                setError(null);
            })
            .catch((err) => {
                console.error(err);
                setError("Can not load data.");
            })
            .finally(() => setLoading(false));
    }, [searchTerm, activeFilter]);

    return (
        <section id="projects" className="projects">
        <h2 className="section-title">Projects</h2>

        <div className="project-controls">
            <input
            type="text"
            className="search-input"
            placeholder="Search projects by name or technology..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />

            {FILTERS.map((filter) => (
            <button
                key={filter.key}
                className={`filter-btn ${activeFilter === filter.key ? "active" : ""}`}
                onClick={() => setActiveFilter(filter.key)}
            >
                {filter.label}
            </button>
            ))}
        </div>

        <div className="project-grid">
            {loading ? (
                <div className="empty-state">// Loading projects...</div>
            ) : error ? (
                <div className="empty-state">// {error}</div>
            ) : projects.length === 0 ? (
                <div className="empty-state">// No matching projects found.</div>
            ) : (
                projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))
            )}
        </div>
        </section>
    );
}

export default Projects;
