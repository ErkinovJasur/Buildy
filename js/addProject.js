document.addEventListener("DOMContentLoaded", () => {
  const modalProject = document.getElementById("modal-project");
  const userProjectCard = document.getElementById("userProjectCard");
  let isRegistered = localStorage.getItem("name");
  let nikRegistered = localStorage.getItem("nik");
  const plus = document.getElementById("plus");

  plus.addEventListener("click", function () {
    modalProject.style.display = "flex";
  });

  // ProjectModal

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

  modalProjects();

  // icons

  lucide.createIcons();

  // modal open

  const openProjectModalBtn = document.getElementById("openProjectModalBtn");
  const closeProjectModalBtn = document.getElementById("closeProjectModalBtn");

  // project download

  const joylash = document.getElementById("joylash");
  const projectName = document.getElementById("projectName");
  const projectBio = document.getElementById("projectBio");
  const projectGitUrl = document.getElementById("projectGitUrl");
  const projectDemoUrl = document.getElementById("projectDemoUrl");
  const projectTechStack = document.getElementById("projectTechStack");
  const projectImage = document.getElementById("projectImage");

  // LocalStorage'dan loyihalar massivini o'qib olamiz

  let projectsArray = JSON.parse(localStorage.getItem("projectsList")) || [];

  // Agar xotirada loyihalar bo'lsa, hammasini bittalab chizamiz

  if (projectsArray.length > 0 && userProjectCard) {
    userProjectCard.innerHTML = "";

    projectsArray.forEach((project) => {
      // 1. Tech stack tayyorlash
      let techSpans = "";
      if (project.tech) {
        techSpans = project.tech
          .split(",")
          .map((tech) => `<span>${tech.trim()}</span>`)
          .join("");
      }

      // 2. BIO ni kesish mantiqi (300 ta belgidan oshsa)
      const limit = 300;
      let bioDisplay = project.bio; // Boshlang'ich matn

      if (project.bio.length > limit) {
        bioDisplay = project.bio.slice(0, limit) + "...";
      }

      let demo = localStorage.getItem("demo");
      let git = localStorage.getItem("git");

      // 3. HTML ga qo'shish
      userProjectCard.innerHTML += `
      <div class="project-post">
          <div class="post-header">
              <img class="user-avatar" 
                src="${localStorage.getItem("avatar")}"
               alt="user-avatar">
              <div class="user-info">
                  <h3>${isRegistered || "username"}</h3>
                  <span class="user-nik">@${nikRegistered || "user"} · <p id="clock">${project.clock || ""}</p></span>
              </div>
          </div>
          <div class="post-cover">
              <img src="${project.image || ""}" alt="project-cover">
          </div> 
          <div class="post-body">
              <h2 class="project-title">${project.name}</h2>
              <p class="project-desc">${bioDisplay}</p>
          </div>
          <div class="tech-stack" style="margin-bottom: 20px;">
              ${techSpans}
          </div>
           <div class="post-actions">
                  <a href="${git}" target="_blank" class="action-btn github-btn">
                      <i class="icon-lucide" data-lucide="CodeXml"></i>
                      GitHub
                  </a>
                  <a href="${demo}" target="_blank" class="action-btn demo-btn">
                      <i class="icon-lucide" data-lucide="external-link"></i>
                      Live Demo
                  </a>
            </div>
            <div class="likes">
              <div class="divs">
                  <div class="div">
                      <i class="icon-lucide like" data-lucide="heart"></i>
                      <span>0</span>
                  </div>
                  <div class="div">
                      <i class="icon-lucide" data-lucide="message-square"></i>
                      <span>0</span>
                  </div>
              </div>
              <div class="divs">
                  <div class="div">
                      <i class="icon-lucide" data-lucide="forward"></i>
                  </div>
                  <div class="div">
                      <i class="icon-lucide" data-lucide="bookmark"></i>
                  </div>
              </div>
            </div>
        </div>
      `;

      // agar github url va demo url qo'ymagan bo'lsa buttonlarni o'chiramiz

      const postActions = document.querySelector(".post-actions");

      if (demo === "" || git === "" || techSpans === "") {
        postActions.style.display = "none";
      }
    });

    // Avatar saqlash qismi
    const avatars = document.getElementById("avatars");
    const savedAvatar = localStorage.getItem("avatar");
    if (savedAvatar && avatars) {
      avatars.src = savedAvatar;
    }

    if (typeof lucide !== "undefined") lucide.createIcons();
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

  // loyiha joylash

  if (joylash) {
    joylash.addEventListener("click", () => {
      if (
        projectName.value === "" ||
        projectBio.value === "" ||
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
        const currentClock = `${String(now.toLocaleDateString()).padStart(2, "0")} - ${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;

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
                      src="${localStorage.getItem("avatar")}"
                      alt="user-avatar">
                  <div class="user-info">
                      <h3>${isRegistered || "username"}</h3>
                      <span class="user-nik">@${nikRegistered || "user"} · <p id="clock">${currentClock}</p></span>
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
                  <a href="${newProject.gitUrl}" target="_blank" class="action-btn github-btn">
                      <i class="icon-lucide" data-lucide="CodeXml"></i>
                      GitHub
                  </a>
                  <a href="${newProject.demoUrl}" target="_blank" class="action-btn demo-btn">
                      <i class="icon-lucide" data-lucide="external-link"></i>
                      Live Demo
                  </a>
              </div>
          </div>
        `;
        }

        localStorage.setItem("demo", newProject.demoUrl);
        localStorage.setItem("git", newProject.gitUrl);

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
});
