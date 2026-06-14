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

navbar();
modal();
modalProjects();
if (typeof lucide !== "undefined") lucide.createIcons();

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
  modal1.style.display = "none";
  profileCard.style.display = "none";
  asideProfile.style.display = "flex";
} else {
  if (profileCard) profileCard.style.display = "block";
  if (asideProfile) asideProfile.style.display = "none";
}

const hasSavedProject = localStorage.getItem("projectName");

if (hasSavedProject && userProjectCard) {
  const savedName = localStorage.getItem("projectName");
  const savedBio = localStorage.getItem("projectBio");
  const savedGitUrl = localStorage.getItem("projectGitUrl");
  const savedDemoUrl = localStorage.getItem("projectDemoUrl");
  const savedTech = localStorage.getItem("projectTech");
  const savedImage = localStorage.getItem("projectImage");

  let techSpans = "";
  if (savedTech) {
    techSpans = savedTech
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
                <h3>${isRegistered}</h3>
                <span class="user-nik">@${nikRegistered}</span>
            </div>
        </div>
        <div class="post-cover">
            <img src="${savedImage || ""}" alt="project-cover">
        </div>
        <div class="post-body">
            <h2 class="project-title">${savedName}</h2>
            <p class="project-desc">${savedBio}</p>
        </div>
        <div class="tech-stack" style="margin-bottom: 20px;">
            ${techSpans}
        </div>
        <div class="post-actions">
            <a href="${savedGitUrl || "#"}" target="_blank" class="action-btn github-btn">
                <i class="icon-lucide" data-lucide="CodeXml"></i>
                GitHub
            </a>
            <a href="${savedDemoUrl || "#"}" target="_blank" class="action-btn demo-btn">
                <i class="icon-lucide" data-lucide="external-link"></i>
                Live Demo
            </a>
        </div>
    </div>
  `;

  localStorage.setItem("projectCard", userProjectCard);

  if (typeof lucide !== "undefined") lucide.createIcons();
}

if (modal1) {
  window.addEventListener("click", function (e) {
    if (e.target === modal1) modal1.style.display = "none";
  });
}

const openProjectModalBtn = document.getElementById("openProjectModalBtn");
const closeProjectModalBtn = document.getElementById("closeProjectModalBtn");

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

const namee = document.getElementById("name");
const nik = document.getElementById("nik");
const email = document.getElementById("email");
const parol = document.getElementById("parol");
const bio = document.getElementById("bio");
const btn = document.getElementById("btn");

if (btn) {
  btn.addEventListener("click", () => {
    let name = namee.value;
    let nikk = nik.value;
    let emaill = email.value;
    let pass = parol.value;
    let bioo = bio.value;

    if (name === "" || nikk === "" || emaill === "" || pass === "") {
      alert("Iltimos barcha maydoni to'ldiring!");
      return;
    }

    localStorage.setItem("name", name);
    localStorage.setItem("nik", nikk);
    localStorage.setItem("email", emaill);
    localStorage.setItem("parol", pass);
    localStorage.setItem("bio", bioo);

    if (profileCard) profileCard.style.display = "none";
    if (modal1) modal1.style.display = "none";
    window.location.href = "profile.html";
  });
}

const joylash = document.getElementById("joylash");
const projectName = document.getElementById("projectName");
const projectBio = document.getElementById("projectBio");
const projectGitUrl = document.getElementById("projectGitUrl");
const projectDemoUrl = document.getElementById("projectDemoUrl");
const projectTechStack = document.getElementById("projectTechStack");
const projectImage = document.getElementById("projectImage");

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
      alert("Iltimos barcha maydonlarni to'ldiring va muqova rasm yuklang!");
      return;
    }

    const file = projectImage.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const image = reader.result;

      localStorage.setItem("projectName", projectName.value);
      localStorage.setItem("projectBio", projectBio.value);
      localStorage.setItem("projectGitUrl", projectGitUrl.value);
      localStorage.setItem("projectDemoUrl", projectDemoUrl.value);
      localStorage.setItem("projectTech", projectTechStack.value);
      localStorage.setItem("projectImage", image);

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
                      <h3>${isRegistered || localStorage.getItem("name")}</h3>
                      <span class="user-nik">@${nikRegistered || localStorage.getItem("nik")}</span>
                  </div>
              </div>
              <div class="post-cover">
                  <img src="${image}" alt="project-cover">
              </div>
              <div class="post-body">
                  <h2 class="project-title">${projectName.value}</h2>
                  <div class="tech-stack">
                      ${techSpans}
                  </div>
                  <p class="project-desc">${projectBio.value}</p>
              </div>
              <div class="post-actions">
                  <a href="${projectGitUrl.value}" target="_blank" class="action-btn github-btn">
                      <i class="icon-lucide" data-lucide="CodeXml"></i>
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
