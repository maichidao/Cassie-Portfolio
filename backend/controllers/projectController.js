import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataPath = path.join(__dirname, "../data/projects.json");

const readData = () => JSON.parse(fs.readFileSync(dataPath, "utf-8"));
const writeData = (data) => fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));

export const getProjects = (req, res) => {
    let projects = readData();
    const { search, tech } = req.query;

    if (search) {
        projects = projects.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
        );
    }
    if (tech) {
        projects = projects.filter((p) =>
        p.tech.some((t) => t.toLowerCase() === tech.toLowerCase())
        );
    }

    res.json({ success: true, data: projects });
};

export const createProject = (req, res) => {
    const projects = readData();
    const newProject = { id: Date.now(), ...req.body };
    projects.push(newProject);
    writeData(projects);
    res.status(201).json({ success: true, data: newProject });
};

export const updateProject = (req, res) => {
    const projects = readData();
    const index = projects.findIndex((p) => p.id === Number(req.params.id));
    if (index === -1) {
        return res.status(404).json({ success: false, message: "Project not found" });
    }
    projects[index] = { ...projects[index], ...req.body };
    writeData(projects);
    res.json({ success: true, data: projects[index] });
};

export const deleteProject = (req, res) => {
    let projects = readData();
    const exists = projects.some((p) => p.id === Number(req.params.id));
    if (!exists) {
        return res.status(404).json({ success: false, message: "Project not found" });
    }
    projects = projects.filter((p) => p.id !== Number(req.params.id));
    writeData(projects);
    res.json({ success: true, message: "Deleted successfully" });
};