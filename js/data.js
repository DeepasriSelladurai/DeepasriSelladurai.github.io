/**
 * Deepasri Selladurai - Centralized Portfolio Data Layer
 * Single Source of Truth for all portfolio sections
 */

const portfolioData = {
    personal: {
        name: "DEEPASRI SELLADURAI",
        firstName: "Deepasri",
        tagline: "Python Developer • IoT Developer • Software Developer",
        roles: [
            "Python Developer",
            "IoT Developer",
            "AI/ML Enthusiast",
            "Robotics & STEM Educator",
            "Software Developer"
        ],
        heroBio: "Aspiring Tech Professional pursuing M.Sc. Computer Science with hands-on expertise in Python engineering, IoT systems, embedded hardware integration, and full-stack software development. Passionate about engineering smart autonomous systems from microcontrollers to cloud intelligence.",
        aboutParagraphs: [
            "I am a passionate software and IoT engineer with a deep fascination for bridging the gap between physical hardware and intelligent cloud applications. My technical journey is fueled by a relentless drive for innovation, precision, and continuous learning.",
            "Currently pursuing my M.Sc. in Computer Science, I specialize in building Python-powered backends, designing custom IoT sensor architectures (ESP32/ESP8266/Arduino), implementing Computer Vision systems, and delivering full-stack solutions.",
            "Beyond development, I actively mentor future innovators as a Robotics and STEM Trainer at Otomatiks, preparing students for national robotics challenges and fostering hands-on problem-solving skills.",
            "With 500+ DSA problems solved across global platforms and top rankings, I combine algorithmic efficiency with practical embedded engineering to deliver reliable, production-ready technology."
        ],
        statusBadge: "Available for Software, Python & IoT Opportunities",
        location: "Namakkal, Tamil Nadu, India",
        email: "deepasriselladurai25@gmail.com",
        phone: "+91 6385312776",
        resumePath: "assets/documents/deepasri-selladurai-resume.pdf",
        profilePhoto: "assets/images/profile-photo.jpg",
        passionatePhoto: "assets/images/passionate-photo.jpg",
        videoClip: "assets/media/professional-clip.mp4"
    },

    socialLinks: [
        {
            name: "LinkedIn",
            url: "https://in.linkedin.com/in/deepasriselladurai",
            icon: "bx bxl-linkedin",
            ariaLabel: "LinkedIn Profile"
        },
        {
            name: "GitHub",
            url: "https://github.com/DeepasriSelladurai",
            icon: "bx bxl-github",
            ariaLabel: "GitHub Profile"
        },
        {
            name: "GeeksforGeeks",
            url: "https://www.geeksforgeeks.org/user/deepasriselladurai25/",
            customIcon: "assets/icons/geeksforgeeks.png",
            ariaLabel: "GeeksforGeeks Profile"
        },
        {
            name: "LeetCode",
            url: "https://leetcode.com/u/Deepasri_Selladurai/",
            customIcon: "assets/icons/leetcode.png",
            ariaLabel: "LeetCode Profile"
        },
        {
            name: "CodeChef",
            url: "https://www.codechef.com/users/deepasri_25",
            customIcon: "assets/icons/codechef.png",
            ariaLabel: "CodeChef Profile"
        },
        {
            name: "HackerRank",
            url: "https://www.hackerrank.com/profile/Deepasri_25",
            customIcon: "assets/icons/hackerrank.png",
            ariaLabel: "HackerRank Profile"
        }
    ],

    // Technical visual flow: Python -> IoT -> ESP32 -> Sensors -> Cloud -> Application
    techPipeline: [
        {
            id: "step-python",
            step: "01",
            title: "Python",
            subtitle: "Logic & Core Algorithms",
            icon: "bx bxl-python",
            badge: "Backend & ML"
        },
        {
            id: "step-iot",
            step: "02",
            title: "IoT Systems",
            subtitle: "Protocols & Connectivity",
            icon: "bx bx-wifi",
            badge: "MQTT / HTTP / BLE"
        },
        {
            id: "step-esp32",
            step: "03",
            title: "ESP32 / Microcontrollers",
            subtitle: "Edge Computing & Hardware",
            icon: "bx bx-chip",
            badge: "Embedded C++"
        },
        {
            id: "step-sensors",
            step: "04",
            title: "Sensors & Actuators",
            subtitle: "Data Telemetry & Control",
            icon: "bx bx-tachometer",
            badge: "Real-time Signals"
        },
        {
            id: "step-cloud",
            step: "05",
            title: "Cloud & APIs",
            subtitle: "Blynk, REST & Databases",
            icon: "bx bx-cloud",
            badge: "MongoDB / Cloud"
        },
        {
            id: "step-app",
            step: "06",
            title: "Smart Applications",
            subtitle: "Dashboards & Mobile UI",
            icon: "bx bx-devices",
            badge: "Interactive UX"
        }
    ],

    aboutHighlights: [
        {
            icon: "bx bxs-graduation",
            title: "M.Sc. Computer Science",
            desc: "Advanced computing, distributed systems & AI focus"
        },
        {
            icon: "bx bxl-python",
            title: "Python & IoT Specialist",
            desc: "End-to-end hardware-to-software system architectures"
        },
        {
            icon: "bx bx-bot",
            title: "Robotics & STEM Trainer",
            desc: "Empowering 100+ students in robotics and embedded code"
        },
        {
            icon: "bx bx-code-block",
            title: "500+ DSA Solutions",
            desc: "Institute Rank #1 on GeeksforGeeks & 300+ day streaks"
        }
    ],

    skillCategories: [
        {
            id: "python",
            name: "Python Ecosystem",
            icon: "bx bxl-python",
            featured: true,
            description: "Core programming language for backend development, data analysis, and computer vision systems.",
            skills: ["Python 3", "Flask", "Django", "REST APIs", "NumPy", "Pandas", "OOP", "Scripting"]
        },
        {
            id: "iot",
            name: "IoT & Embedded Systems",
            icon: "bx bx-chip",
            featured: true,
            description: "Hardware interfacing, sensor integration, microcontroller firmware, and wireless protocols.",
            skills: ["ESP32", "ESP8266", "Arduino Uno", "Blynk Cloud", "Sensors Integration", "Embedded C++", "WiFi & Bluetooth", "MQTT / HTTP"]
        },
        {
            id: "aiml",
            name: "AI & Computer Vision",
            icon: "bx bx-brain",
            featured: false,
            description: "Intelligent perception models, image processing, and predictive telemetry analysis.",
            skills: ["OpenCV", "Computer Vision", "Machine Learning", "Teachable Machine", "Transformers (HuggingFace)", "Image Processing"]
        },
        {
            id: "web",
            name: "Web & Databases",
            icon: "bx bx-globe",
            featured: false,
            description: "Modern web architecture, responsive layouts, relational and document database management.",
            skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "MongoDB", "SQL / MySQL", "Responsive Design", "JSON"]
        },
        {
            id: "tools",
            name: "Developer Tools & Platforms",
            icon: "bx bx-wrench",
            featured: false,
            description: "Essential toolchains, testing suites, version control, and simulation environments.",
            skills: ["Git & GitHub", "VS Code", "Postman", "Google Colab", "Tinkercad", "MIT App Inventor", "Linux Basics"]
        },
        {
            id: "soft",
            name: "Professional & Leadership",
            icon: "bx bx-bulb",
            featured: false,
            description: "Interpersonal strengths, technical education leadership, and collaborative execution.",
            skills: ["Problem Solving", "Robotics Mentoring", "Leadership", "Technical Communication", "Analytical Thinking", "Teamwork", "Time Management"]
        }
    ],

    experience: [
        {
            id: "exp-itkrish",
            role: "Intern — NumPy & MongoDB",
            organization: "ITKRISH Technologies",
            location: "Tiruchengode, Tamil Nadu",
            period: "Academic Year 2026–2027 (01-06-2026 to 15-06-2026)",
            type: "Internship",
            badge: "Latest Experience",
            certificateImage: "assets/certificates/itkrish-internship.png",
            summary: "Conducted specialized data analysis, scientific computation with NumPy, and engineered scalable NoSQL database architectures with MongoDB.",
            bullets: [
                "Implemented high-performance numerical array operations and data transformation pipelines using Python and NumPy.",
                "Engineered MongoDB collections, aggregation pipelines, indexing, and CRUD workflows for data-intensive applications.",
                "Integrated Python backends with MongoDB Atlas for persistent real-time document storage.",
                "Awarded official Internship Certification with distinction upon rigorous evaluation of project deliverables."
            ],
            tech: ["Python", "NumPy", "MongoDB", "NoSQL", "Data Processing"]
        },
        {
            id: "exp-otomatiks",
            role: "Robotics Trainer & STEM Educator (RRE)",
            organization: "Otomatiks, Namakkal",
            location: "Namakkal, Tamil Nadu",
            period: "Part-Time / Ongoing",
            type: "Mentorship & Professional",
            badge: "STEM Leadership",
            summary: "Leading hands-on robotics workshops, practical embedded electronics, and Arduino/ESP32 coding curricula for students and young engineers.",
            bullets: [
                "Instructed students in fundamental and advanced robotics, algorithm formulation, and hardware-software interfacing.",
                "Taught practical microcontroller programming using Arduino C++ and ESP32 with varied sensor arrays (IR, Ultrasonic, LDR, DHT).",
                "Mentored student teams in developing innovative competition projects, obstacle-avoiders, and IoT prototypes.",
                "Cultivated strong critical thinking and STEM problem-solving mindsets through interactive project-based learning."
            ],
            tech: ["Robotics", "Arduino", "ESP32", "STEM Education", "Sensors", "Mentoring"]
        },
        {
            id: "exp-indianinfotech",
            role: "IoT Fundamentals & Embedded Systems Intern",
            organization: "Indian Info Tech",
            location: "Tamil Nadu, India",
            period: "Internship",
            type: "Internship",
            badge: "Embedded Systems",
            summary: "Deepened core foundations in Internet of Things architecture, network communication, and microcontroller programming.",
            bullets: [
                "Explored OSI model layers, TCP/IP fundamentals, and wireless transmission protocols for IoT devices.",
                "Programmed Arduino Uno and ESP8266 NodeMCU microcontrollers for automated sensor telemetry.",
                "Built practical IoT lab prototypes communicating over local WiFi networks and cloud endpoints."
            ],
            tech: ["IoT Fundamentals", "ESP8266", "Arduino Uno", "Networking", "Microcontrollers"]
        },
        {
            id: "exp-edunet",
            role: "Team Lead — AI Predictive Maintenance",
            organization: "EduNet Foundation",
            location: "Project Leadership",
            period: "Project Leadership",
            type: "Project Leadership",
            badge: "AI + IoT Lead",
            summary: "Spearheaded a multi-disciplinary technical team building an AI-assisted solar panel health and predictive maintenance monitoring system.",
            bullets: [
                "Designed the IoT sensor acquisition framework to monitor environmental parameters, panel temperature, and output voltage.",
                "Developed predictive machine learning algorithms to detect anomalies and anticipate solar panel performance degradation.",
                "Coordinated agile milestones and presented final prototype to industry evaluation panels."
            ],
            tech: ["Machine Learning", "IoT Sensors", "Solar Monitoring", "Team Leadership", "Python"]
        }
    ],

    projects: [
        {
            id: "proj-gradefolio",
            title: "Student Gradefolio",
            category: ["Python", "Web", "AI/ML"],
            featured: true,
            icon: "bx bx-book-reader",
            image: "assets/images/profile-photo.jpg",
            description: "Intelligent academic portfolio and grade management platform powered by Flask, MongoDB, and HuggingFace Transformers for automated academic performance analytics and insight generation.",
            technologies: ["Python", "Flask", "MongoDB", "HuggingFace Transformers", "HTML5", "CSS3"],
            github: "https://github.com/DeepasriSelladurai",
            demo: null,
            highlights: "Awarded 96 Marks in B.Sc. Mini Project evaluation."
        },
        {
            id: "proj-classroom-iot",
            title: "Automated Classroom Environment Monitor",
            category: ["IoT"],
            featured: true,
            icon: "bx bx-buildings",
            description: "Smart IoT system leveraging ESP8266 microcontroller and sensor arrays to continuously measure temperature, humidity, and lighting levels, streaming live metrics to Blynk Cloud.",
            technologies: ["ESP8266", "Blynk Cloud", "IoT Sensors", "Embedded C++", "WiFi"],
            github: "https://github.com/DeepasriSelladurai",
            demo: null,
            highlights: "Real-time energy conservation telemetry and cloud alert notifications."
        },
        {
            id: "proj-driver-drowsiness",
            title: "Driver Drowsiness Detection System",
            category: ["Python", "AI/ML"],
            featured: true,
            icon: "bx bx-car",
            description: "Computer Vision safety system using OpenCV and facial landmark detection to monitor driver eye aspect ratios in real time, triggering acoustic alarms upon detecting microsleep.",
            technologies: ["Python", "OpenCV", "Computer Vision", "Facial Landmarks", "Real-time Alert"],
            github: "https://github.com/DeepasriSelladurai",
            demo: null,
            highlights: "High-FPS video processing with low latency threshold alert."
        },
        {
            id: "proj-smart-notice-board",
            title: "Smart Digital Notice Board",
            category: ["IoT", "Robotics"],
            featured: true,
            icon: "bx bx-chalkboard",
            description: "Wireless electronic notice board powered by Arduino and wireless transceiver modules, enabling authorized instant notice broadcasting from anywhere via web/mobile interfaces.",
            technologies: ["Arduino", "IoT", "Wireless Comm", "Embedded Systems", "LCD Matrix"],
            github: "https://github.com/DeepasriSelladurai",
            demo: null,
            highlights: "Eliminates paper waste with instant broadcast updates."
        },
        {
            id: "proj-touchless-atm",
            title: "Touchless ATM Interface System",
            category: ["Robotics", "IoT", "AI/ML"],
            featured: false,
            icon: "bx bx-money",
            description: "Hygienic ATM interaction prototype combining Arduino hardware controllers with Python OpenCV gesture recognition for contactless PIN entry and transaction navigation.",
            technologies: ["Arduino Uno", "Python", "OpenCV", "Gesture Recognition", "Sensors"],
            github: "https://github.com/DeepasriSelladurai",
            demo: null,
            highlights: "Zero-touch safety solution for public kiosks and terminals."
        },
        {
            id: "proj-family-wellbeing",
            title: "Family Well-being Management System",
            category: ["IoT", "Web"],
            featured: false,
            icon: "bx bx-home-heart",
            description: "Connected home health reminder and synchronization ecosystem built with Google Calendar API, Google Apps Script, and Blynk IoT hardware for medication and wellness tracking.",
            technologies: ["Google Calendar API", "Apps Script", "Blynk IoT", "Cloud Webhooks"],
            github: "https://github.com/DeepasriSelladurai",
            demo: null,
            highlights: "Automated schedule syncing with audible physical buzzer alerts."
        },
        {
            id: "proj-voice-bot",
            title: "Voice-Controlled Mobile Robotic Bot",
            category: ["Robotics", "IoT"],
            featured: false,
            icon: "bx bx-microphone",
            description: "Autonomous robot rover receiving voice commands parsed by custom MIT App Inventor Android software and transmitted via Bluetooth serial to an ESP microcontroller.",
            technologies: ["ESP Bluetooth", "MIT App Inventor", "Robotics", "Motor Drivers", "Speech Recognition"],
            github: "https://github.com/DeepasriSelladurai",
            demo: null,
            highlights: "Custom Android app voice-to-serial protocol bridge."
        },
        {
            id: "proj-speed-detector",
            title: "Vehicle Speed Measurement System",
            category: ["Robotics", "IoT"],
            featured: false,
            icon: "bx bx-tachometer",
            description: "Microcontroller-based roadway velocity calculation system utilizing dual IR transceiver gates with microsecond timing precision to calculate speed and flag violations.",
            technologies: ["Arduino Uno", "IR Gate Sensors", "Embedded C++", "Timer Interrupts"],
            github: "https://github.com/DeepasriSelladurai",
            demo: null,
            highlights: "High-accuracy timing calculation with automated overspeed alert."
        },
        {
            id: "proj-light-seeking-robot",
            title: "Light Seeking Autonomous Rover",
            category: ["Robotics"],
            featured: false,
            icon: "bx bx-bot",
            description: "Differential drive autonomous robot navigating dynamically toward maximum luminescence sources using dual LDR sensor arrays and analog feedback loops.",
            technologies: ["Arduino", "Differential Drive", "Phototransistors", "Robotics", "Hardware"],
            github: "https://github.com/DeepasriSelladurai",
            demo: null,
            highlights: "Analog differential sensor comparison with real-time motor PID."
        },
        {
            id: "proj-binary-decoder",
            title: "Binary Decoder using 7-Segment Display",
            category: ["IoT"],
            featured: false,
            icon: "bx bx-microchip",
            description: "Fundamental digital electronics circuit implementing transistor switching matrices and logic gate arrays to decode binary digital inputs into visual decimal output.",
            technologies: ["Digital Electronics", "Transistors", "SSD", "Logic Gates", "Hardware"],
            github: "https://github.com/DeepasriSelladurai",
            demo: null,
            highlights: "Hardware-level binary decoding logic without microcontroller reliance."
        },
        {
            id: "proj-wiki-app",
            title: "Mini Wikipedia Android Application",
            category: ["Web"],
            featured: false,
            icon: "bx bx-search-alt",
            description: "Lightweight mobile encyclopedia app developed with MIT App Inventor integrating Wikipedia REST APIs for fast knowledge lookup and text-to-speech article reading.",
            technologies: ["Wikipedia REST API", "MIT App Inventor", "Mobile Dev", "JSON Parsing"],
            github: "https://github.com/DeepasriSelladurai",
            demo: null,
            highlights: "Voice query integration and responsive mobile card layout."
        }
    ],

    achievements: {
        summary: "Top-ranked competitive programmer with a passion for algorithms and data structures across multiple international platforms.",
        totalDSA: "500+",
        items: [
            {
                platform: "GeeksforGeeks",
                icon: "assets/icons/geeksforgeeks.png",
                svg: "assets/icons/geeksforgeeks.svg",
                rank: "Institute Rank #1",
                stats: [
                    { label: "Coding Score", value: "1100+" },
                    { label: "DSA Problems Solved", value: "250+" },
                    { label: "Active Day Streak", value: "200+ Days" }
                ],
                highlight: "#1 in College",
                profileUrl: "https://www.geeksforgeeks.org/user/deepasriselladurai25/"
            },
            {
                platform: "LeetCode",
                icon: "assets/icons/leetcode.png",
                rank: "Consistent Solver",
                stats: [
                    { label: "Active Days Streak", value: "300+ Days" },
                    { label: "Problems Solved", value: "150+" },
                    { label: "Annual Badges", value: "Multiple Earned" }
                ],
                highlight: "300+ Day Streak",
                profileUrl: "https://leetcode.com/u/Deepasri_Selladurai/"
            },
            {
                platform: "CodeChef",
                icon: "assets/icons/codechef.png",
                rank: "Active Contestant",
                stats: [
                    { label: "Problems Solved", value: "250+" },
                    { label: "Continuous Streak", value: "150+ Days" }
                ],
                highlight: "250+ Solved",
                profileUrl: "https://www.codechef.com/users/deepasri_25"
            },
            {
                platform: "Coding Ninjas",
                icon: "assets/icons/codingninjas.png",
                rank: "Top 1.45% Globally",
                stats: [
                    { label: "Platform Percentile", value: "Top 1.45%" },
                    { label: "Daily Streak", value: "150+ Days" },
                    { label: "Event", value: "Ninja Slayground" }
                ],
                highlight: "Top 1.45%",
                profileUrl: "https://www.naukri.com/code360/"
            }
        ],
        badges: [
            {
                title: "LeetCode 365 Days Streak Badge",
                platform: "LeetCode",
                image: "assets/badges/leetcode-365-days.png"
            },
            {
                title: "LeetCode 200 Days Streak Badge",
                platform: "LeetCode",
                image: "assets/badges/leetcode-200-days.png"
            },
            {
                title: "LeetCode 100 Days Streak Badge",
                platform: "LeetCode",
                image: "assets/badges/leetcode-100-days.png"
            },
            {
                title: "LeetCode 50 Days 2025 Badge",
                platform: "LeetCode",
                image: "assets/badges/leetcode-50-days-2025.png"
            },
            {
                title: "LeetCode 50 Days Streak Badge",
                platform: "LeetCode",
                image: "assets/badges/leetcode-50-days.png"
            },
            {
                title: "CodeChef 100 Days Streak Badge",
                platform: "CodeChef",
                image: "assets/badges/codechef-100-days.png"
            },
            {
                title: "CodeChef 50 Days Streak Badge",
                platform: "CodeChef",
                image: "assets/badges/codechef-50-days.png"
            }
        ]
    },

    certifications: [
        {
            id: "cert-itkrish",
            title: "Internship on NumPy & MongoDB",
            issuer: "ITKRISH Technologies",
            category: "Internship",
            image: "assets/certificates/itkrish-internship.png",
            verification: "Verified Official Credential",
            badge: "Featured"
        },
        {
            id: "cert-ibm-web",
            title: "Web Development Fundamentals",
            issuer: "IBM SkillsBuild",
            category: "Web Development",
            image: "assets/certificates/ibm-web-development.jpg",
            verification: "IBM Verified Credential"
        },
        {
            id: "cert-gl-fullstack",
            title: "Full Stack Development",
            issuer: "Great Learning",
            category: "Full Stack",
            image: "assets/certificates/great-learning-full-stack.jpg",
            verification: "Great Learning Academy"
        },
        {
            id: "cert-infosys-se",
            title: "Software Engineering",
            issuer: "Infosys Springboard",
            category: "Software Engineering",
            image: "assets/certificates/infosys-software-engineering.jpg",
            verification: "Infosys Certified"
        },
        {
            id: "cert-postman",
            title: "API Fundamentals Student Expert",
            issuer: "Postman Academy",
            category: "APIs & Tools",
            image: "assets/certificates/postman-api-expert.jpg",
            verification: "Postman Certified Student Expert"
        },
        {
            id: "cert-ibm-prof",
            title: "Professional Skills",
            issuer: "IBM SkillsBuild",
            category: "Professional Development",
            image: "assets/certificates/ibm-professional-skills.jpg",
            verification: "IBM Verified Credential"
        },
        {
            id: "cert-hackerrank-py",
            title: "Python (Basic) Certification",
            issuer: "HackerRank",
            category: "Python",
            image: "assets/certificates/hackerrank-python-basic.jpg",
            verification: "HackerRank Verified Skill"
        },
        {
            id: "cert-hackerrank-intern",
            title: "Software Engineer Intern Role",
            issuer: "HackerRank",
            category: "Software Engineering",
            image: "assets/certificates/hackerrank-software-engineer-intern.png",
            verification: "HackerRank Role Assessment"
        },
        {
            id: "cert-gfg-mongo",
            title: "MongoDB Developer Toolkit",
            issuer: "GeeksforGeeks",
            category: "Databases",
            image: "assets/certificates/geeksforgeeks-mongodb.jpg",
            verification: "GFG Course Certified"
        },
        {
            id: "cert-gfg-py",
            title: "Python Certification",
            issuer: "GeeksforGeeks",
            category: "Python",
            image: "assets/certificates/geeksforgeeks-python.jpg",
            verification: "GFG Certified"
        },
        {
            id: "cert-guvi-py",
            title: "Python Certification",
            issuer: "GUVI Geek Networks",
            category: "Python",
            image: "assets/certificates/guvi-python.jpg",
            verification: "GUVI IIT Madras Incubated"
        },
        {
            id: "cert-ninja-slayground",
            title: "Ninja Slayground Participation",
            issuer: "Coding Ninjas",
            category: "Competitive Coding",
            image: "assets/certificates/itkrish-internship.png", // fallback preview
            pdfUrl: "assets/certificates/ninja-slayground-participation.pdf",
            verification: "Coding Ninjas Contest"
        }
    ],

    education: [
        {
            degree: "M.Sc. Computer Science",
            institution: "Namakkal Kavignar Ramalingam Government College of Arts and Science for Women",
            university: "Periyar University",
            period: "2025 – Present",
            status: "Currently Pursuing First Year",
            badge: "Postgraduate",
            details: "Specializing in Advanced Python, Distributed Systems, Cloud Computing, and Artificial Intelligence."
        },
        {
            degree: "B.Sc. Computer Science",
            institution: "N.K.R Government Arts College for Women",
            university: "Periyar University",
            period: "2022 – 2025",
            status: "Graduated with 80% — First Class with Distinction",
            badge: "Distinction",
            academicHighlights: [
                "100/100 in Programming in Python",
                "100/100 in Mobile Application Development",
                "96/100 in Student Gradefolio Mini Project",
                "84/100 in Software Testing",
                "81/100 in Software Engineering"
            ]
        },
        {
            degree: "Higher Secondary & Secondary Schooling",
            institution: "Government Girls Higher Secondary School, Tiruchengode",
            university: "State Board of Tamil Nadu",
            period: "Passed out 2022",
            status: "Academic Excellence",
            badge: "Schooling",
            academicHighlights: [
                "Higher Secondary Certificate (HSC): 8.3 CGPA",
                "Secondary School Leaving Certificate (SSLC): 7.7 CGPA"
            ]
        }
    ],

    tourSteps: [
        {
            target: "#home",
            title: "Welcome to Deepasri's Portfolio",
            content: "Explore my profile as a Python & IoT Engineer, view my elevator pitch, download my resume, or inspect my core technical pipeline.",
            position: "bottom"
        },
        {
            target: "#tech-pipeline",
            title: "Hardware-to-Cloud Technical Flow",
            content: "See how I connect Python algorithms, IoT protocols, ESP32 microcontrollers, sensor telemetry, cloud databases, and frontend interfaces.",
            position: "top"
        },
        {
            target: "#about",
            title: "About & Engineering Philosophy",
            content: "Discover my background in M.Sc. Computer Science, robotics mentoring at Otomatiks, and my dedication to continuous technical growth.",
            position: "top"
        },
        {
            target: "#skills",
            title: "Dominant Python & IoT Skills",
            content: "Browse my categorized skillsets featuring Python, IoT & Embedded Systems, AI/ML, Web/Databases, and Developer Tooling without fake percentages.",
            position: "top"
        },
        {
            target: "#achievements",
            title: "Competitive Coding Streaks & Ranks",
            content: "Inspect verified credentials including GeeksforGeeks Institute Rank #1, 300+ days LeetCode streak, and 500+ solved DSA problems.",
            position: "top"
        },
        {
            target: "#experience",
            title: "Experience & Latest Internship",
            content: "Review my professional roles including my latest NumPy & MongoDB internship at ITKRISH Technologies and robotics training at Otomatiks.",
            position: "top"
        },
        {
            target: "#projects",
            title: "Interactive Project Showcase",
            content: "Filter through Python, IoT, AI/ML, Robotics, and Web systems. Every card showcases technologies, code repository links, and core highlights.",
            position: "top"
        },
        {
            target: "#certifications",
            title: "Verified Credentials Gallery",
            content: "Click any certificate card to open our accessible full-screen lightbox modal with high-resolution inspection.",
            position: "top"
        },
        {
            target: "#contact",
            title: "Get In Touch",
            content: "Easily copy my verified email and phone with 1-click or send a message directly to collaborate on exciting tech opportunities!",
            position: "top"
        }
    ]
};

// Freeze data to prevent accidental runtime mutations
if (typeof Object.freeze === 'function') {
    Object.freeze(portfolioData);
}
