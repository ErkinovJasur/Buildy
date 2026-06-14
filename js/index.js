const navbar1 = document.querySelector("header");
const modal1 = document.querySelector(".modal");
const profileCard = document.getElementById("profile-card");
const asideProfile = document.querySelector(".aside-profile");
const modalProject = document.getElementById("modal-project");
const userProjectCard = document.getElementById("userProjectCard");
const user = document.getElementById("user");

let isRegistered = localStorage.getItem("name");
let nikRegistered = localStorage.getItem("nik");

function navbar() {
  if (!navbar1) return;
  navbar1.innerHTML = `
    <div class="container">
        <div class="header-nav">
            <button class="search-btn">
                <i class="icon-lucide" data-lucide="search"></i>
                Dasturchi va loyihalarni qidirish...
            </button>
            <button class="plus" id="openProjectModalBtn">
                <i class="icon-lucide" data-lucide="plus"></i>
            </button>
            <button class="bell">
                <i class="icon-lucide" data-lucide="bell"></i>
            </button>
        </div>
    </div>
  `;
}

function modal() {
  if (!modal1) return;
  modal1.innerHTML = `
    <div class="modal-registar">
        <h1>Ro'yxatdan o'tish</h1>
        <p>Show what you build.</p>
        <div>
            <div>
                <label>Ism</label>
                <input id="name" type="text" placeholder="Ismingizni kiriting.">
            </div>
            <div>
                <label>Nik</label>
                <input id="nik" type="text" placeholder="Nikingizni kiriting.">
            </div>
            <div>
                <label>Email</label>
                <input id="email" type="email" placeholder="Emailingizni kiriting.">
            </div>
            <div>
                <label>Parol</label>
                <input id="parol" type="password" placeholder="Parolingizni kiriting.">
            </div>
            <div>
                <label>Tavsif</label>
                <input id="bio" type="text" placeholder="Tavsif kiriting.">
            </div>
            <div>
                <label>Kimsiz?</label>
                <select id="select">
                <option value="🎨 Frontend Developer">
        🎨 Frontend Developer
    </option>

    <option value="⚙️ Backend Developer">
        ⚙️ Backend Developer
    </option>

    <option value="🚀 Full Stack Developer">
        🚀 Full Stack Developer
    </option>

    <option value="📱 Mobile Developer">
        📱 Mobile Developer
    </option>

    <option value="✨ UI/UX Designer">
        ✨ UI/UX Designer
    </option>

    <option value="☁️ DevOps Engineer">
        ☁️ DevOps Engineer
    </option>

    <option value="🧪 QA Engineer">
        🧪 QA Engineer
    </option>

    <option value="🤖 AI Engineer">
        🤖 AI Engineer
    </option>

    <option value="🎓 Student">
        🎓 Student
    </option>

    <option value="💡Founder">
        💡 Founder
    </option>

    <option value="🏢 Recruiter">
        🏢 Recruiter
    </option>

    <option value="🌍Other">
        🌍 Other
    </option>
                </select>
            </div>
            <button id="btn">Ro'yxatdan o'tish</button>
        </div>
    </div>
  `;
}

function modalProjects() {
  if (!modalProject) return;
  modalProject.innerHTML = `
        <div class="modal-card">
            <button class="close" id="closeProjectModalBtn">
                <i class="icon-lucide" data-lucide="x"></i>
            </button>
            <h2>Loyiha qo'shish</h2>
            <label>Loyiha nomi</label>
            <input type="text" id="projectName">
            <label>Qisqacha tavsif *</label>
            <textarea id="projectBio"></textarea>
            <label>GitHub URL</label>
            <input type="url" id="projectGitUrl" placeholder="https://github.com/you/repo">
            <label>Live Demo URL</label>
            <input type="url" id="projectDemoUrl" placeholder="https://yourapp.com">
            <label>Tech Stack *</label>
            <input type="text" id="projectTechStack" placeholder="React, Supabase, Tailwind">
            <label>Cover rasm</label>
            <input type="file" id="projectImage">
            <button id="joylash">Joylash</button>
        </div>
  `;
}

// Interfeyslarni yaratish
navbar();
modal();
modalProjects();

lucide.createIcons();

// Dinamik elementlarni HTML yaratilgandan keyin tanlab olish
const namee = document.getElementById("name");
const nik = document.getElementById("nik");
const email = document.getElementById("email");
const parol = document.getElementById("parol");
const bio = document.getElementById("bio");
const btn = document.getElementById("btn");
const select = document.getElementById("select");

const openProjectModalBtn = document.getElementById("openProjectModalBtn");
const closeProjectModalBtn = document.getElementById("closeProjectModalBtn");

const joylash = document.getElementById("joylash");
const projectName = document.getElementById("projectName");
const projectBio = document.getElementById("projectBio");
const projectGitUrl = document.getElementById("projectGitUrl");
const projectDemoUrl = document.getElementById("projectDemoUrl");
const projectTechStack = document.getElementById("projectTechStack");
const projectImage = document.getElementById("projectImage");

if (user) {
  if (!isRegistered) {
    user.addEventListener("click", function () {
      if (modal1) modal1.style.display = "flex";
    });
  } else {
    user.addEventListener("click", function () {
      window.location.href = "profile.html";
    });
  }
}

if (isRegistered) {
  if (modal1) modal1.style.display = "none";
  if (profileCard) profileCard.style.display = "none";
  if (asideProfile) asideProfile.style.display = "flex";
} else {
  if (profileCard) profileCard.style.display = "block";
  if (asideProfile) asideProfile.style.display = "none";
}

// LocalStorage'dan loyihalar massivini o'qib olamiz
let projectsArray = JSON.parse(localStorage.getItem("projectsList")) || [];

// Agar xotirada loyihalar bo'lsa, hammasini bittalab chizamiz
if (projectsArray.length > 0 && userProjectCard) {
  userProjectCard.innerHTML = "";

  projectsArray.forEach((project) => {
    let techSpans = "";
    if (project.tech) {
      techSpans = project.tech
        .split(",")
        .map((tech) => `<span>${tech.trim()}</span>`)
        .join("");
    }

    userProjectCard.innerHTML += `
      <div class="project-post">
          <div class="post-header">
              <img class="user-avatar"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/500px-Default_pfp.svg.png"
                  alt="user-avatar">
              <div class="user-info">
                  <h3>${isRegistered || "username"}</h3>
                  <span class="user-nik">@${nikRegistered || "user"} · <span id="clock">${project.clock || ""}</span></span>
              </div>
          </div>
          <div class="post-cover">
              <img src="${project.image || ""}" alt="project-cover">
          </div>
          <div class="post-body">
              <h2 class="project-title">${project.name}</h2>
              <p class="project-desc">${project.bio}</p>
          </div>
          <div class="tech-stack" style="margin-bottom: 20px;">
              ${techSpans}
          </div>
          <div class="post-actions">
              <a href="${project.gitUrl || "#"}" target="_blank" class="action-btn github-btn">
                  <i class="icon-lucide" data-lucide="CodeXml"></i>
                  GitHub
              </a>
              <a href="${project.demoUrl || "#"}" target="_blank" class="action-btn demo-btn">
                  <i class="icon-lucide" data-lucide="external-link"></i>
                  Live Demo
              </a>
          </div>
      </div>
    `;
  });

  if (typeof lucide !== "undefined") lucide.createIcons();
}

// modal ochilishi

if (modal1) {
  window.addEventListener("click", function (e) {
    if (e.target === modal1) modal1.style.display = "none";
  });
}

// modal ochilishi

if (openProjectModalBtn && modalProject) {
  openProjectModalBtn.addEventListener("click", () => {
    modalProject.style.display = "flex";
  });
}
if (closeProjectModalBtn && modalProject) {
  closeProjectModalBtn.addEventListener("click", () => {
    modalProject.style.display = "none";
  });
}

// modal registar

if (btn) {
  btn.addEventListener("click", () => {
    let name = namee.value;
    let nikk = nik.value;
    let emaill = email.value;
    let pass = parol.value;
    let bioo = bio.value;

    if (
      name === "" ||
      nikk === "" ||
      emaill === "" ||
      pass === "" ||
      select.value === ""
    ) {
      alert("Iltimos barcha maydoni to'ldiring!");
      return;
    }

    localStorage.setItem("name", name);
    localStorage.setItem("nik", nikk);
    localStorage.setItem("email", emaill);
    localStorage.setItem("parol", pass);
    localStorage.setItem("bio", bioo);
    localStorage.setItem("select", select.value);

    if (profileCard) profileCard.style.display = "none";
    if (modal1) modal1.style.display = "none";
    window.location.href = "profile.html";
  });
}

// loyiha joylash

if (joylash) {
  joylash.addEventListener("click", () => {
    if (
      projectName.value === "" ||
      projectBio.value === "" ||
      projectGitUrl.value === "" ||
      projectDemoUrl.value === "" ||
      projectTechStack.value === "" ||
      !projectImage.files ||
      projectImage.files.length === 0
    ) {
      alert("Iltimos barcha maydonlarni to'ldiring va rasm yuklang!");
      return;
    }

    const file = projectImage.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const image = reader.result;

      const now = new Date();
      const currentClock = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;

      const newProject = {
        name: projectName.value,
        bio: projectBio.value,
        gitUrl: projectGitUrl.value,
        demoUrl: projectDemoUrl.value,
        tech: projectTechStack.value,
        image: image,
        clock: currentClock,
      };

      let currentProjects =
        JSON.parse(localStorage.getItem("projectsList")) || [];
      currentProjects.push(newProject);
      localStorage.setItem("projectsList", JSON.stringify(currentProjects));

      let techSpans = projectTechStack.value
        .split(",")
        .map((tech) => `<span>${tech.trim()}</span>`)
        .join("");

      if (userProjectCard) {
        userProjectCard.innerHTML += `
          <div class="project-post">
              <div class="post-header">
                  <img class="user-avatar"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/500px-Default_pfp.svg.png"
                      alt="user-avatar">
                  <div class="user-info">
                      <h3>${isRegistered || "username"}</h3>
                      <span class="user-nik">@${nikRegistered || "user"} · <span id="clock">${currentClock}</span></span>
                  </div>
              </div>
              <div class="post-cover">
                  <img src="${image}" alt="project-cover">
              </div>
              <div class="post-body">
                  <h2 class="project-title">${projectName.value}</h2>
                  <p class="project-desc">${projectBio.value}</p>
              </div>
              <div class="tech-stack" style="margin-bottom: 20px;">
                  ${techSpans}
              </div>
              <div class="post-actions">
                  <a href="${projectGitUrl.value}" target="_blank" class="action-btn github-btn">
                      <i class="icon-lucide" data-lucide="github"></i>
                      GitHub
                  </a>
                  <a href="${projectDemoUrl.value}" target="_blank" class="action-btn demo-btn">
                      <i class="icon-lucide" data-lucide="external-link"></i>
                      Live Demo
                  </a>
              </div>
          </div>
        `;
      }

      if (modalProject) modalProject.style.display = "none";
      if (typeof lucide !== "undefined") lucide.createIcons();

      projectName.value = "";
      projectBio.value = "";
      projectGitUrl.value = "";
      projectDemoUrl.value = "";
      projectTechStack.value = "";
      projectImage.value = "";
    };

    reader.readAsDataURL(file);
  });
}
