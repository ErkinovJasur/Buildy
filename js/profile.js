import axios from "https://cdn.jsdelivr.net/npm/axios@1.11.0/+esm";

const api = "https://6a41bddb7602860e6520687e.mockapi.io/postlar";
const api1 = "https://6a42b7747602860e6521d39f.mockapi.io/users";

document.addEventListener("DOMContentLoaded", () => {
  // Kiritgan ma'lumotlarini profile sahifasiga chqarish

  const userName = document.getElementById("userName");
  const userNik = document.getElementById("userNik");
  const userBio = document.getElementById("userBio");
  const span = document.querySelector(".span");

  const user = (userName.textContent = localStorage.getItem("name"));
  const user1 = (userNik.textContent =
    "@" + localStorage.getItem("nik").toLowerCase());
  userBio.textContent = localStorage.getItem("bio");

  if (user1 === "@buildly") {
    document.getElementById("pp").textContent = 5;
  } else {
    document.getElementById("pp").textContent = "1";
  }

  // Galochka qo'shish
  if (user1 === "@buildly" || user1 === "@erkinov") {
    span.style.display = "block";
  }

  // upload avatar
  const avatarInput = document.getElementById("avatarInput");
  const profileAvatar = document.getElementById("avatar");
  const savedAvatar = localStorage.getItem("avatar");

  if (savedAvatar) {
    profileAvatar.src = savedAvatar;
  }

  avatarInput.addEventListener("change", function () {
    const file = this.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = function (e) {
      const img = new Image();

      img.onload = function () {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        canvas.width = 200;
        canvas.height = img.height * (200 / img.width);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        const compressed = canvas.toDataURL("image/jpeg", 0.75);
        profileAvatar.src = compressed;

        const users = axios.get(api1);

        axios.put(`${api1}/${localStorage.getItem("userId")}`, {
          avatar: compressed,
        });

        localStorage.setItem("avatar", compressed);
      };

      img.src = e.target.result;
    };

    reader.readAsDataURL(file);
  });

  // title
  const title = document.querySelector("title");

  title.textContent =
    localStorage.getItem("name") +
    " (" +
    "@" +
    localStorage.getItem("nik") +
    ") · Buildly";

  // Social links
  const profileLinks = document.querySelector(".profile-links");
  const telegram = document.getElementById("telegramLink");
  const github = document.getElementById("githubLink");
  const website = document.getElementById("websiteLink");
  const linkedin = document.getElementById("linkedinLink");

  let gitHub = localStorage.getItem("github");
  let tg = localStorage.getItem("tg");
  let webSite = localStorage.getItem("website");
  let linkEdin = localStorage.getItem("linkedin");

  if (gitHub === null || tg === null || webSite === null || linkEdin === null) {
    profileLinks.style.display = "none";
  }

  if (gitHub === "" || gitHub === null) {
    github.style.display = "none";
  } else {
    github.href = gitHub;
    github.style.display = "flex";
    profileLinks.style.display = "flex";
  }

  if (tg === "" || tg === null) {
    telegram.style.display = "none";
  } else {
    telegram.href = tg;
    telegram.style.display = "flex";
    profileLinks.style.display = "flex";
  }

  if (webSite === "" || webSite === null) {
    website.style.display = "none";
  } else {
    website.href = webSite;
    website.style.display = "flex";
    profileLinks.style.display = "flex";
  }

  if (linkEdin === "" || linkEdin === null) {
    linkedin.style.display = "none";
  } else {
    linkedin.href = linkEdin;
    linkedin.style.display = "flex";
    profileLinks.style.display = "flex";
  }

  // Edit btn
  const editBtn = document.querySelector(".edit-btn");
  const modal1 = document.querySelector(".modal");

  editBtn.addEventListener("click", function () {
    modal1.style.display = "flex";
    document.getElementById("h1").textContent = "Profilni tahrirlash";
    document.getElementById("btn").textContent = "Saqlash";
  });

  // loyihalarni profilga chqarish

  const renderProject = async () => {
    const res = await axios.get(api);

    const posts = res.data.filter((post) => {
      if (post.username === localStorage.getItem("nik")) {
        document.getElementById("projectsLength").textContent = res.data.length;

        let techSpans = post.tech
          .split(",")
          .map((tech) => `<span>${tech.trim()}</span>`)
          .join("");

        document.getElementById("postCard").innerHTML += `
         <div class="project-post">
              <div class="post-header">
                <div class="imge">
                  <img class="user-avatar" src="${localStorage.getItem("avatar")}" alt="user-avatar">
                </div>
                  <div class="user-info">
                      <h3>${post.name || "username"}</h3>
                      <span class="user-nik">@${post.username || "user"} · <p id="clock">${localStorage.getItem("soat") || ""}</p></span>
                  </div>
              </div>
              <div class="post-body">
                  <h2 class="project-title">${post.postName}</h2>
                  <p class="project-desc">${post.postBio}</p>
              </div>
              <div class="tech-stack" style="margin-bottom: 20px;">
                ${techSpans}
              </div>
              <div class="post-cover">
                  <img src="${post.image || ""}" alt="project-cover">
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

        // Qo'ygan projectlarni sonini profilga chiqarish
        if (res.data.length >= 1) {
          document.querySelector(".projects").style.display = "none";
          document.getElementById("postCard").style.display = "block";
        } else if (res.data.length === 0) {
          document.querySelector(".projects").style.display = "flex";
          document.getElementById("postCard").style.display = "none";
        }
      }
    });

    lucide.createIcons();
  };

  renderProject();

  async function datas() {
    const users = await axios.get(api1);

    const userss = users.data.find(
      (item) => item.username === "@" + localStorage.getItem("nik"),
    );

    localStorage.setItem("userId", userss.id);
  }

  datas();

  // Skleteon loader
  setTimeout(() => {
    document.querySelector(".html").style.display = "block";
    document.querySelector(".profile-skeleton").style.display = "none";
  }, 2000);
});
