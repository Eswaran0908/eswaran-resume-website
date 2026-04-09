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
                <h3>🚀 Click the button below to view project details</h3>

                <div class="project-card">
                    <h4>📚 Online Book Store Application</h4>
                    <button onclick="toggleProject('bookstore')">View Details</button>
                    <div id="bookstore" class="project-details hidden">
                        <p><b>Tools:</b> Java, Spring Boot, MySQL, HTML, CSS, Bootstrap, JavaScript</p>
                        <p>Admin & User modules with add, edit, delete, search, pagination, cart & payment.</p>
                    </div>
                </div>

                <div class="project-card">
                    <h4>🧾 Customer CRUD – Spring Boot</h4>
                    <button onclick="toggleProject('crud')">View Details</button>
                    <div id="crud" class="project-details hidden">
                        <p><b>Tools:</b> Spring Boot, MySQL, Postman, Maven</p>
                        <p>REST API for customer data with full CRUD operations.</p>
                    </div>
                </div>

                <div class="project-card">
                    <h4>🗄 Evergreen Studio – JDBC CRUD</h4>
                    <button onclick="toggleProject('jdbc')">View Details</button>
                    <div id="jdbc" class="project-details hidden">
                        <p><b>Tools:</b> Java, JDBC, MySQL, Eclipse</p>
                        <p>CRUD operations with real-time database updates.</p>
                    </div>
                </div>

                <div class="project-card">
                    <h4>📜 Thirukkural Search Webpage</h4>
                    <button onclick="toggleProject('thirukkural')">View Details</button>
                    <div id="thirukkural" class="project-details hidden">
                        <p><b>Tools:</b> HTML, CSS, Bootstrap, JavaScript</p>
                        <p>Responsive webpage to search and display Thirukkural couplets.</p>
                        <p><b>Live Site:</b> site-tamil-ilakkiya.netlify.app</p>
                    </div>
                </div>

                <div class="project-card">
                    <h4>🌾 Agriculture Database System</h4>
                    <button onclick="toggleProject('agri')">View Details</button>
                    <div id="agri" class="project-details hidden">
                        <p><b>Tools:</b> MySQL Workbench</p>
                        <p>Database system to manage crop and farmer records.</p>
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

                <table class="education-table">
                    <thead>
                        <tr>
                            <th>Qualification</th>
                            <th>Institution / Board</th>
                            <th>Year</th>
                            <th>Percentage / GPA</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Master in Full Stack Web Development with Java</td>
                            <td>Itvedant Education Pvt Ltd, Chennai</td>
                            <td>2025</td>
                            <td>Completed</td>
                        </tr>

                        <tr>
                            <td>Bachelor of Computer Applications (BCA)</td>
                            <td>Periyar University, Salem</td>
                            <td>2017</td>
                            <td>81.67% / 8.167</td>
                        </tr>

                        <tr>
                            <td>HSC (Bio-Maths)</td>
                            <td>State Board TN</td>
                            <td>2014</td>
                            <td>66.75% / 6.675</td>
                        </tr>

                        <tr>
                            <td>SSLC</td>
                            <td>State Board TN</td>
                            <td>2012</td>
                            <td>76.6% / 7.6</td>
                        </tr>
                    </tbody>
                </table>
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

