function openHome() {
    window.location.href = "home.html";
}

function downloadResume() {
    window.open("ESWARAN.R.pdf");
}


function setActive(element) {
    let items = document.querySelectorAll(".nav-item");

    items.forEach(item => {
        item.classList.remove("active");
    });

    element.classList.add("active");
}


function goHomePage() {
    window.location.href = "index.html";
}


function toggleProject(projectId) {
    let details = document.getElementById(projectId);
    details.classList.toggle("hidden");
}

window.onload = function () {
    const target = document.getElementById("typing-text");

    if (!target) return;

    let text = "✨ Explore My Resume ✨";
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            target.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }

    target.innerHTML = "";
    typeWriter();
};


function showContent(section) {
    let title = document.getElementById("title");
    let content = document.getElementById("content");


    if (section === "main") {
    title.innerHTML = "✨ Explore My Resume";

    content.innerHTML = `
        <div class="simple-banner">
            <img src="banner.webp" alt="Resume Banner" class="banner-img">
        </div>
    `;
}

    else if (section === "about") {
        title.innerHTML = "👨‍💻 About Me";
        content.innerHTML = `
            <p>
                Results-oriented <b>Full Stack Developer</b> with hands-on
                experience in Java, Spring Boot, React, and MongoDB.
            </p>
            <br>
            <p>🚀 Completed Full Stack Web Development training in 2025 and developed scalable web applications with REST API integration.</p>
            <br>
            <p>🛠 Strong understanding of frontend frameworks, backend architecture, and database management.</p>
            <br>
            <p>📈 Committed to continuous learning and delivering high-quality software solutions.</p>
            <br>
            <p>💡 Passionate about building responsive, scalable, and user-friendly web applications.</p>
        `;
    }

    else if (section === "skills") {
        title.innerHTML = "🛠 Technical & Non-Technical Skills";
        content.innerHTML = `
            <div class="skill-section">
                <h3>💻 Technical Skills</h3>

                <p><b>Frontend Technologies:</b></p>
                <p>HTML5, CSS3, JavaScript, Bootstrap, Responsive Web Design, React.js, Angular.js</p>

                <p><b>Backend Technologies:</b></p>
                <p>Java, Spring Boot, RESTful API Development, Web UI Design</p>

                <p><b>Database:</b></p>
                <p>SQL, MySQL, MongoDB</p>

                <p><b>Cloud & DevOps:</b></p>
                <p>AWS Essentials, Git, GitHub, CI/CD Basics</p>

                <p><b>Other Skills:</b></p>
                <p>Full Stack Web Application Development, CRUD</p>

                <br>

                <h3>🤝 Non-Technical Skills</h3>
                <ul>
                    <li>Problem-Solving</li>
                    <li>Quick and Efficient Learner</li>
                    <li>Teamwork & Collaboration</li>
                    <li>Time Management & Prioritization</li>
                    <li>Adaptability & Flexibility</li>
                    <li>Communication</li>
                </ul>
            </div>
        `;
    }

   else if (section === "projects") {
    title.innerHTML = "📂 My Projects";
    content.innerHTML = `
        <div class="project-section">
            <h3>🚀 Latest Projects (Date Wise)</h3>

            <div class="project-grid">

                <div class="project-card active" onclick="toggleProject('resume', this)">
                    <h4>💼 ESWARAN Resume Website</h4>
                    <p class="project-date">📅 10 Apr 2026</p>
                    <div id="resume" class="project-details">
                        <p><b>Tools:</b> HTML, CSS, JavaScript, Netlify</p>
                        <p>Professional responsive resume portfolio website.</p>
                        <p><b>Live Site:</b> 
                        <a href="https://eswaran-resume-website.netlify.app" target="_blank">
                        View Live Website
                        </a></p>
                    </div>
                </div>

                <div class="project-card" onclick="toggleProject('thirukkural', this)">
                    <h4>📜 Thirukkural Search Webpage</h4>
                    <p class="project-date">📅 31 Dec 2025</p>
                    <div id="thirukkural" class="project-details hidden">
                        <p><b>Tools:</b> HTML, CSS, Bootstrap, JavaScript</p>
                        <p>Responsive webpage to search and display Thirukkural couplets.</p>
                        <p><b>Live Site:</b> 
                        <a href="https://site-tamil-ilakkiya.netlify.app" target="_blank">
                        View Live Website
                        </a></p>
                    </div>
                </div>

                <div class="project-card" onclick="toggleProject('bookstore', this)">
                    <h4>📚 Online Book Store Application</h4>
                    <p class="project-date">📅 21 Feb 2025</p>
                    <div id="bookstore" class="project-details hidden">
                        <p><b>Tools:</b> Java, Spring Boot, MySQL</p>
                        <p>Admin & User modules with cart and payment.</p>
                    </div>
                </div>

                <div class="project-card" onclick="toggleProject('crud', this)">
                    <h4>🧾 Customer CRUD – Spring Boot</h4>
                    <p class="project-date">📅 Jan 2025</p>
                    <div id="crud" class="project-details hidden">
                        <p><b>Tools:</b> Spring Boot, MySQL</p>
                        <p>REST API CRUD operations.</p>
                    </div>
                </div>

                <div class="project-card" onclick="toggleProject('jdbc', this)">
                    <h4>🗄 Evergreen Studio – JDBC CRUD</h4>
                    <p class="project-date">📅 Dec 2024</p>
                    <div id="jdbc" class="project-details hidden">
                        <p><b>Tools:</b> Java, JDBC, MySQL</p>
                        <p>Real-time database CRUD operations.</p>
                    </div>
                </div>

                <div class="project-card" onclick="toggleProject('agri', this)">
                    <h4>🌾 Agriculture Database System</h4>
                    <p class="project-date">📅 Oct 2024</p>
                    <div id="agri" class="project-details hidden">
                        <p><b>Tools:</b> MySQL Workbench</p>
                        <p>Crop and farmer management system.</p>
                    </div>
                </div>

            </div>
        </div>
    `;
}
   else if (section === "education") {
    title.innerHTML = "🎓 Education";
    content.innerHTML = `
        <div class="education-section">
            <h3>📚 Academic Qualifications</h3>

            <div class="education-cards">

                <div class="edu-card">
                    <h4>🎓 Master in Full Stack Web Development with Java</h4>
                    <p><b>Institution:</b> Itvedant Education Pvt Ltd, Chennai</p>
                    <p><b>Year:</b> 2025</p>
                    <p><b>Status:</b> Completed</p>
                </div>

                <div class="edu-card">
                    <h4>🎓 Bachelor of Computer Applications (BCA)</h4>
                    <p><b>Institution:</b> Periyar University, Salem</p>
                    <p><b>Year:</b> 2017</p>
                    <p><b>Percentage / GPA:</b> 81.67% / 8.167</p>
                </div>

                <div class="edu-card">
                    <h4>🎓 HSC (Bio-Maths)</h4>
                    <p><b>Board:</b> State Board TN</p>
                    <p><b>Year:</b> 2014</p>
                    <p><b>Percentage / GPA:</b> 66.75% / 6.675</p>
                </div>

                <div class="edu-card">
                    <h4>🎓 SSLC</h4>
                    <p><b>Board:</b> State Board TN</p>
                    <p><b>Year:</b> 2012</p>
                    <p><b>Percentage / GPA:</b> 76.6% / 7.6</p>
                </div>

            </div>
        </div>
    `;
}
    else if (section === "certificate") {
        title.innerHTML = "🏆 Certifications";
        content.innerHTML = `
            <div class="certificate-section">
                <h3>🎓 Professional Certifications</h3>

                <ul class="certificate-list">
                    <li>☁️ AWS Essentials & DevOps – 02 Aug 2025</li>
                    <li>🅰️ Angular.js – 10 Jul 2025</li>
                    <li>🍃 MongoDB – 13 May 2025</li>
                    <li>⚛️ React.js – 26 Apr 2025</li>
                    <li>🌱 FSD Spring Boot – 21 Feb 2025</li>
                    <li>💻 Master in Full Stack Web Development with Java – 14 Feb 2025</li>
                    <li>☕ Core Java – 08 Feb 2025</li>
                    <li>🎨 Advanced Web Design – 09 Oct 2024</li>
                    <li>🗄️ SQL – 09 Oct 2024</li>
                    <li>🌐 Core Web Design – 04 Oct 2024</li>
                </ul>
            </div>
        `;
    }

    else if (section === "contact") {
        title.innerHTML = "📞 Contact Information";
        content.innerHTML = `
            <div class="contact-section">
                <div class="contact-card">
                    <p>📞 <b>Phone:</b> 
                        <a href="tel:+916361232640">+91 636 123 2640</a>
                    </p>

                    <p>📍 <b>Location:</b> 
                        Krishnagiri, Tamil Nadu, India
                    </p>

                    <p>📧 <b>Email:</b> 
                        <a href="mailto:eswaranraja555@gmail.com">
                            eswaranraja555@gmail.com
                        </a>
                    </p>

                    <p>🔗 <b>LinkedIn:</b> 
                        <a href="https://www.linkedin.com/in/eswaran0908" target="_blank">
                            Visit LinkedIn Profile
                        </a>
                    </p>

                    <p>💻 <b>GitHub:</b> 
                        <a href="https://github.com/Eswaran0908" target="_blank">
                            Visit GitHub Profile
                        </a>
                    </p>
                </div>
            </div>
        `;
    }
}

