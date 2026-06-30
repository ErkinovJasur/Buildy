import axios from "https://cdn.jsdelivr.net/npm/axios@1.11.0/+esm";
const api = "https://6a41bddb7602860e6520687e.mockapi.io/postlar";

document.addEventListener("DOMContentLoaded", () => {
  const modalProject = document.getElementById("modal-project");
  const userProjectCard = document.getElementById("userProjectCard");
  const openProjectModalBtn = document.getElementById("openProjectModalBtn");
  const plus = document.getElementById("plus");

  const isRegistered = localStorage.getItem("name");
  const nikRegistered = localStorage.getItem("nik");

  // open modal

  plus.addEventListener("click", () => {
    modalProject.style.display = "flex";
  });

  openProjectModalBtn.addEventListener("click", () => {
    modalProject.style.display = "flex";
  });

  // modal

  function modalProjects() {
    modalProject.innerHTML = `
      <div class="modal-card">
        <button class="close" onclick="close()">
          <i data-lucide="x"></i>
        </button>
        <h2>Loyiha qo'shish</h2>
        <label>Loyiha nomi</label>
        <input id="projectName">
        <label>Qisqacha tavsif</label>
        <textarea id="projectBio"></textarea>
        <label>GitHub URL</label>
        <input id="projectGitUrl" placeholder="https://github.com/you/repo">
        <label>Live Demo URL</label>
        <input id="projectDemoUrl" placeholder="https://yourapp.com">
        <label>Tech Stack</label>
        <input id="projectTechStack" placeholder="React, Supabase, Tailwind">
        <label>Cover rasm</label>
        <input type="file" id="projectImage">
        <button id="joylash">Joylash</button>
      </div>
    `;
  }

  modalProjects();

  let imageData = "";

  const projectImage = document.getElementById("projectImage");
  const preview = document.getElementById("image");

  projectImage.addEventListener("change", (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      const img = new Image();

      img.src = reader.result;

      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const maxWidth = 900;
        const scale = maxWidth / img.width;

        canvas.width = maxWidth;
        canvas.height = img.height * scale;
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        imageData = canvas.toDataURL("image/jpeg", 0.7);
        console.log("hajmi:", imageData.length);
        preview.src = imageData;
      };
    };

    reader.readAsDataURL(file);
  });

  lucide.createIcons();

  // INPUTLAR

  const projectName = document.getElementById("projectName");
  const projectBio = document.getElementById("projectBio");
  const projectGitUrl = document.getElementById("projectGitUrl");
  const projectDemoUrl = document.getElementById("projectDemoUrl");
  const projectTechStack = document.getElementById("projectTechStack");
  const joylash = document.getElementById("joylash");

  // apidan ma'lumot olish

  async function getData() {
    try {
      let response = await axios.get(api);

      response.data.map((post) => {
        let techSpans = post.tech
          .split(",")
          .map((tech) => `<span>${tech.trim()}</span>`)
          .join("");

        userProjectCard.innerHTML += `
          <div class="project-post"> 
            <div class="post-header"> 
              <div class="imge">
                <img class="user-avatar" src="${post.avatar}" alt="user-avatar"> 
              </div>
              <div class="user-info"> 
                <h3>${post.name || "username"}</h3>
                <span class="user-nik">@${post.username || "user"} · <p id="clock">${localStorage.getItem("soat") || new Date().toLocaleDateString()}</p></span> 
              </div> 
            </div> 
            <div class="post-body"> 
              <h2 class="project-title">${post.postName}</h2> 
              <p class="project-desc">${post.postBio.slice(0, 360)}...</p> 
            </div> 
            <div class="tech-stack" style="margin-bottom: 20px;">
              ${techSpans}
            </div> 
             <div class="post-cover"> 
              <img id="image" src="${post.image}"></img>
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
    if (
      projectName.value === "" ||
      projectBio.value === "" ||
      projectImage.value === ""
    ) {
      alert("To'ldiring");
      return;
    }

    try {
      await axios.post(api, {
        name: localStorage.getItem("name"),
        username: localStorage.getItem("nik"),
        avatar: localStorage.getItem("avatar"),
        image: imageData,
        postName: projectName.value,
        postBio: projectBio.value,
        postGitUrl: projectGitUrl.value || "GitHub",
        postDemoUrl: projectDemoUrl.value || "Demo",
        tech: projectTechStack.value,
      });

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
