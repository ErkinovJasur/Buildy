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
    document.getElementById("pp").textContent = 1;
  }

  if (user1 === "@buildly" || user1 === "@erkinov") {
    span.style.display = "block";
  }

  // Avatar yuklash

  const profileAvatar = document.getElementById("avatar");
  const avatarInput = document.getElementById("avatarInput");

  const savedAvatar = localStorage.getItem("avatar");

  if (savedAvatar) {
    profileAvatar.src = savedAvatar;
  }

  avatarInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      profileAvatar.src = reader.result;

      localStorage.setItem("avatar", reader.result);
    };
    reader.readAsDataURL(file);
  });

  // title

  const title = document.querySelector("title");

  title.textContent =
    localStorage.getItem("name") +
    " (" +
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

  const editBtn = document.querySelector(".edit-btn");
  const modal1 = document.querySelector(".modal");

  editBtn.addEventListener("click", function () {
    modal1.style.display = "flex";
    document.getElementById("h1").textContent = "Profilni tahrirlash";
    document.getElementById("btn").textContent = "Saqlash";
  });

  // loyihalarni profilga chqarish

  let projectUser = JSON.parse(localStorage.getItem("projectsList")) || [];

  if (projectUser.length === 0) {
    document.querySelector(".projects").style.display = "flex";
  } else {
    document.querySelector(".projects").style.display = "none";
    projectUser.forEach((element) => {
      let techSpans = "";

      if (element.tech) {
        techSpans = element.tech
          .split(",")
          .map((tech) => `<span>${tech.trim()}</span>`)
          .join("");
      }

      document.getElementById("s").innerHTML += `
     <div class="project-post">
          <div class="post-header">
              <img class="user-avatar" src="${localStorage.getItem("avatar")}" alt="user-avatar">
              <div class="user-info">
                  <h3>${localStorage.getItem("name") || "username"}</h3>
                  <span class="user-nik">@${localStorage.getItem("nik") || "user"} · <p id="clock">${element.clock || ""}</p></span>
              </div>
          </div>
          <div class="post-cover">
              <img src="${element.image || ""}" alt="project-cover">
          </div> 
          <div class="post-body">
              <h2 class="project-title">${element.name}</h2>
              <p class="project-desc">${element.bio}</p>
          </div>
          <div class="tech-stack" style="margin-bottom: 20px;">
            ${techSpans}
          </div>
           <div class="post-actions">
                  <a href="${element.gitUrl}" target="_blank" class="action-btn github-btn">
                      <i class="icon-lucide" data-lucide="CodeXml"></i>
                      GitHub
                  </a>
                  <a href="${element.demoUrl}" target="_blank" class="action-btn demo-btn">
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
    });
  }

  // qo'ygan projectlarini sonini chiqarish

  document.getElementById("projectsLength").textContent = projectUser.length;
});
