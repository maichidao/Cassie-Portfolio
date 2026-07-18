import {useState, useEffect} from "react";
import { Moon, Sun } from "lucide-react";
import "../css/Header.css";

const NAV_ITEMS = [
    {id: "home", label: "Home"},
    {id: "about", label: "About"},
    {id: "projects", label: "Projects"},
    {id: "contact", label: "Contact"},
];

function Header({theme, onToggleTheme}){
    const [activeTab, setActiveTab] = useState("home");

    useEffect(() => {
        const sections = NAV_ITEMS
            .map((item) => document.getElementById(item.id))
            .filter(Boolean);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveTab(entry.target.id);
                    }
                });
            },
            {                
                rootMargin: "-80px 0px -60% 0px",
                threshold: 0,
            }
        );

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    const handleNavClick = (id) => {
        setActiveTab(id);
        const target = document.getElementById(id);
        if (target) target.scrollIntoView({behavior:"smooth"});
    };

    return (
        <header className="header">
            <div className="brand">
                <div className="brand-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <span>Mai Chi</span>
            </div>

            <nav className="nav">
                {NAV_ITEMS.map((item) => (
                    <span
                        key={item.id}
                        className={`tab ${activeTab === item.id ? "active" : ""}`}
                        onClick={() => handleNavClick(item.id)}
                    >
                        {item.label}
                    </span>
                ))}
            </nav>

            <button
                className="theme-toggle"
                aria-label="Toggle light/dark mode"
                onClick={onToggleTheme}
            >
                {theme === "dark" ? <Moon size={25} /> : <Sun size={25} />}
            </button>
        </header>
    );
}

export default Header;