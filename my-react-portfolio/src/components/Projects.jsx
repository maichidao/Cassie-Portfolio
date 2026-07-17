import { useState, useEffect, useMemo } from "react";
import ProjectCard from "./ProjectCard";
import projectsData from "../data/projects";
import "../css/Projects.css";

const FILTERS = [
    { key: "all", label: "All" },
    { key: "python", label: "Python" },
    { key: "csharp", label: "C#" },
];

function Projects() {
    const [searchTerm, setSearchTerm] = useState("");
    const [activeFilter, setActiveFilter] = useState("all");

    const filteredProjects = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return projectsData.filter((project) => {
        const matchesFilter =
            activeFilter === "all" || project.tech.includes(activeFilter);

        const haystack = `${project.title} ${project.tags.join(" ")}`.toLowerCase();
        const matchesSearch = haystack.includes(query);

        return matchesFilter && matchesSearch;
        });
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
            {filteredProjects.length === 0 ? (
            <div className="empty-state">// No matching projects found.</div>
            ) : (
            filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))
            )}
        </div>
        </section>
    );
}

export default Projects;
