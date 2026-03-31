
/* =============== NAVIGATION LINKS =============== */
export const navLinks = [
    { name: "Work", hash: "#home" },
    { name: "About", hash: "#about" },
    { name: "Skills", hash: "#skills" },
    { name: "Contact", hash: "#contact" },
];

/* =============== HOME / HERO DATA =============== */
export const homeData = {
    firstName: "SHIVAJI",
    lastName: "SAHANI",
    subtitle: "DEVELOPER",
    description: "Crafting innovative software solutions by merging creativity with technical expertise.",
    location: "Based in India",
    status: {
        label: "Open to work",
        value: "Freelance projects & full-time roles"
    },
    // These feed the "handwritten" notes in the collage
    notes: [
        { 
            text: "code was my very first love – long before I had a name for it 💻", 
            position: "top" 
        },
        { 
            text: "that obsession quietly shaped me into a developer ✨", 
            position: "bottom" 
        }
    ],
    captions: {
        childhood: "where it all began",
        current: "still that same curiosity"
    }
};

/* =============== ABOUT DATA =============== */
export const aboutData = {
    title: "Building digital experiences with a human touch.",
    description: [
        "I’m a software developer based in India, a fresh MCA graduate with a deep-rooted curiosity for how systems function under the hood.",
        "When I’m not debugging Java or tweaking Python scripts, I’m likely working on book fold art or exploring network-centric warfare tech. I believe the best software lives at the intersection of logic and art.",
    ],
    note: "Always learning... 📚"
};

/* =============== SKILLS DATA =============== */
export const skillsData = [
    {
        title: "Technical Stack",
        skills: [
            { name: "Java (JavaFX)", level: "Advanced" },
            { name: "Python", level: "Intermediate" },
            { name: "C / C++", level: "Intermediate" },
            { name: "SQLite / DBMS", level: "Advanced" },
        ]
    },
    {
        title: "Web & Design",
        skills: [
            { name: "React.js", level: "Intermediate" },
            { name: "CSS / Flexbox", level: "Advanced" },
            { name: "Git / GitHub", level: "Intermediate" },
        ]
    }
];

/* =============== WORK / PROJECTS DATA =============== */
export const projectsData = [
    {
        id: 1,
        title: "Jewelry Billing System",
        category: "Software",
        description: "A custom JavaFX & SQLite application built for high-precision billing, automatic GST calculation, and loan tracking.",
        image: "jewelry-billing.jpg", // Replace with your asset
        link: "#"
    },
    {
        id: 2,
        title: "Defense Cyber Agency Roadmap",
        category: "Research",
        description: "A comprehensive analysis of India’s cyber defense strategies and network-centric warfare integration.",
        image: "defense-project.jpg",
        link: "#"
    }
];

const Data = () => {
    return (
        <div>
            {/* You can leave this empty or put a summary here */}
            <h2>Portfolio Data Loaded</h2>
        </div>
    );
};

export default Data;