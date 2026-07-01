import axios from "https://cdn.jsdelivr.net/npm/axios@1.11.0/+esm";

const api = "https://6a41bddb7602860e6520687e.mockapi.io/postlar";

document.addEventListener("DOMContentLoaded", () => {
  const modalProject = document.getElementById("modal-project");
  const userProjectCard = document.getElementById("userProjectCard");
  const openProjectModalBtn = document.getElementById("openProjectModalBtn");
  const plus = document.getElementById("plus");

  // open modal
  plus.addEventListener("click", () => {
    modalProject.style.display = "flex";
  });

  openProjectModalBtn.addEventListener("click", () => {
    modalProject.style.display = "flex";
  });

  //Output to the DOM
  modalProjects();

  // close modal
  document.getElementById("closeModal").addEventListener("click", () => {
    modalProject.style.display = "none";
  });

  // modal DOM ga chiqarish

  function modalProjects() {
    modalProject.innerHTML = `
    <div class="modal-card">
      <button class="close" id="closeModal">
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

    lucide.createIcons();
  }

  // upload image
  let imageData = "";

  const projectImage = document.getElementById("projectImage");

  projectImage.addEventListener("change", (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      const img = new Image();

      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        const max = 1200;
        const scale = img.width > max ? max / img.width : 1;

        canvas.width = Math.round(img.width * scale);
        canvas.height = Math.round(img.height * scale);

        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";

        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        imageData = canvas.toDataURL("image/jpeg", 0.99);

        console.log("hajmi:", imageData.length);
      };

      img.onerror = () => {
        console.error("Rasmni yuklashda xatolik yuz berdi");
      };

      img.src = reader.result;
    };

    reader.readAsDataURL(file);
  });

  lucide.createIcons();

  // inputs
  const projectName = document.getElementById("projectName");
  const projectBio = document.getElementById("projectBio");
  const projectGitUrl = document.getElementById("projectGitUrl");
  const projectDemoUrl = document.getElementById("projectDemoUrl");
  const projectTechStack = document.getElementById("projectTechStack");
  const joylash = document.getElementById("joylash");

  // APIdan ma'lumot olish
  async function getDate() {
    try {
      userProjectCard.innerHTML = "";
      let response = await axios.get(api);

      response.data.map((post) => {
        let techSpans = (post.tech || "")
          .split(",")
          .map((tech) => `<span>${tech.trim()}</span>`)
          .join("");

        if (userProjectCard) {
          userProjectCard.innerHTML += `
          <div class="project-post" onclick="openModalProject(${post.id})"> 
            <div class="post-header"> 
              <div class="imge">
                <img class="user-avatar" src="${post.avatar || ""}" alt="user-avatar"> 
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
              <img id="image" src="${post.image || ""}"></img>
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
        }

        lucide.createIcons();
      });
    } catch (error) {
      console.log(error);
    }
  }

  getDate();

  // POST qilsh
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
      // API ga jo'natish
      await axios.post(api, {
        name: localStorage.getItem("name"),
        username: localStorage.getItem("nik"),
        avatar: localStorage.getItem("avatar") || "",
        image: imageData || "",
        postName: projectName.value,
        postBio: projectBio.value,
        postGitUrl: projectGitUrl.value || "GitHub",
        postDemoUrl: projectDemoUrl.value || "Demo",
        tech: projectTechStack.value || "",
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

    location.reload();
  });

  // project modal qo'yilgan postlarni chiqarish
  const pModal = document.getElementById("pModal");
  const pModal1 = document.querySelector(".project-modal");

  // open ModalProject
  window.openModalProject = async function (id) {
    try {
      let projectRes = await axios.get(`${api}/${id}`);
      let item = projectRes.data;
      pModal.style.display = "flex";

      pModal.innerHTML = `
        <div id="projectModal" class="project-modal">
          <div class="project-modal-card">
            <button class="modal-close">
                <i data-lucide="x"></i>
            </button>
            <img class="modal-cover" src="${item.image}"></img>
            <div class="modal-content">
                <div class="modal-user">
                    <img src="${item.avatar}"></img>
                    <div>
                        <h4>${item.name}</h4>
                        <span>@${item.username}</span>
                    </div>
                </div>
                <h2 class="modal-name">${item.postName}</h2>
                <p class="modal-bio">${item.postBio}</p>
              <div class="modal-tech">${item.tech
                .split(",")
                .map((tech) => `<span>${tech.trim()}</span>`)
                .join("")}</div>
                <div class="likeandcomment">
                  <button>
                    <i data-lucide="heart"></i>
                    0
                  </button>
                  <button>
                    <i data-lucide="message-square"></i>
                    0
                  </button>
                  <button>
                    <i data-lucide="forward"></i>
                  </button>
                  <button>
                    <i data-lucide="ellipsis"></i>
                  </button>
                </div>
              <div class="modal-links">
                <a target="_blank" href="${item.postGitUrl}">
                    <i class="icon-lucide" data-lucide="CodeXml"></i> 
                    GitHub
                </a>
                <a class="live" target="_blank" href="${item.postDemoUrl}">
                    <i class="icon-lucide" data-lucide="external-link"></i> 
                    Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      `;

      document.querySelector("title").textContent = item.postName + " by " + item.name;
      lucide.createIcons();
    } catch (error) {
      console.log("Error", error);
    }

    document
      .querySelector(".modal-close")
      .addEventListener("click", function () {
        pModal.style.display = "none";
      });
  };
});
