import axios from "https://cdn.jsdelivr.net/npm/axios@1.11.0/+esm";
const api = "https://6a41bddb7602860e6520687e.mockapi.io/postlar";

document.addEventListener("DOMContentLoaded", () => {
  // avatar

  let currentAvatarUrl = null;
  document.addEventListener("DOMContentLoaded", async () => {
    currentAvatarUrl = await loadAvatar("avatar", "/api/avatar");
  });

  const modalProject = document.getElementById("modal-project");
  const userProjectCard = document.getElementById("userProjectCard");
  const plus = document.getElementById("plus");
  const openProjectModalBtn = document.getElementById("openProjectModalBtn");

  const isRegistered = localStorage.getItem("name");
  const nikRegistered = localStorage.getItem("nik");

  // open modal

  plus.addEventListener("click", () => {
    modalProject.style.display = "flex";
  });

  openProjectModalBtn.addEventListener("click", () => {
    modalProject.style.display = "flex";
  });

  // MODAL

  function modalProjects() {
    modalProject.innerHTML = `
      <div class="modal-card">
        <button class="close" id="closeProjectModalBtn">
          <i data-lucide="x"></i>
        </button>
        <h2>Loyiha qo'shish</h2>
        <label>Loyiha nomi</label>
        <input id="projectName" >
        <label>Qisqacha tavsif</label>
        <textarea id="projectBio"></textarea>
        <label>GitHub URL</label>
        <input id="projectGitUrl" placeholder="https://github.com/you/repo">
        <label>Live Demo URL</label>
        <input id="projectDemoUrl" placeholder="https://yourapp.com">
        <label>Tech Stack</label>
        <input id="projectTechStack" "React, Supabase, Tailwind">
        <label>Cover rasm</label>
        <input type="file" id="projectImage">
        <button id="joylash">Joylash</button>
      </div>
    `;
  }

  modalProjects();

  lucide.createIcons();

  // INPUTLAR

  const projectName = document.getElementById("projectName");
  const projectBio = document.getElementById("projectBio");
  const projectGitUrl = document.getElementById("projectGitUrl");
  const projectDemoUrl = document.getElementById("projectDemoUrl");
  const projectTechStack = document.getElementById("projectTechStack");
  const projectImage = document.getElementById("projectImage");
  const joylash = document.getElementById("joylash");

  // apidan ma'lumot olish

  async function getData() {
    try {
      let response = await axios.get(api);

      response.data.forEach((post) => {
        userProjectCard.innerHTML += `
          <div class="project-post"> 
            <div class="post-header"> 
              <img class="user-avatar" src="${post.avatar}" alt="user-avatar"> 
              <div class="user-info"> 
                <h3>${post.name || "username"}</h3>
                <span class="user-nik">@${post.username || "user"} · <p id="clock">${post.clock || ""}</p></span> 
              </div> 
            </div> 
            <div class="post-cover"> 
              <img src=""></img>
            </div> 
            <div class="post-body"> 
              <h2 class="project-title">${post.postName}</h2> 
              <p class="project-desc">${post.postBio}</p> 
            </div> 
            <div class="tech-stack" style="margin-bottom: 20px;">
              <span>${post.tech}</span>
            </div> 
            <div class="post-actions">
              <a href="${post.postGitUrl}" target="_blank" class="action-btn github-btn">
                <i class="icon-lucide" data-lucide="CodeXml"></i>
                 GitHub
              </a> 
              <a href="${post.postDemoUrl}" target="_blank" class="action-btn demo-btn"> 
                <i class="icon-lucide" data-lucide="external-link"></i> 
                Live Demo 
              </a> 
            </div> 
            <div class="likes"> 
              <div class="divs"> 
                <div class="div"> 
                  <i class="icon-lucide like" data-lucide="heart"></i> 
                  <span class="count">0</span> 
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
      });

      lucide.createIcons();
    } catch (error) {
      console.log(error);
    }
  }

  getData();

  // post qilsh

  joylash.addEventListener("click", async () => {
    if (projectName.value === "" || projectBio.value === "") {
      alert("To'ldiring");
      return;
    }

    try {
      await axios.post(api, {
        name: localStorage.getItem("name"),
        username: localStorage.getItem("nik"),
        avatar: currentAvatarUrl,
        // image: '',
        postName: projectName.value,
        postBio: projectBio.value,
        postGitUrl: projectGitUrl.value || "GitHub",
        postDemoUrl: projectDemoUrl.value || "Demo",
        tech: projectTechStack.value,
      });

      getData();

      // input tozalash

      projectName.value = "";
      projectBio.value = "";
      projectGitUrl.value = "";
      projectDemoUrl.value = "";
      projectTechStack.value = "";

      modalProject.style.display = "none";
    } catch (error) {
      console.log(error);
    }
  });
});
