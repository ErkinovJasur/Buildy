document.addEventListener("DOMContentLoaded", () => {
  // Kiritgan ma'lumotlarini profile sahifasiga chqarish

  const userName = document.getElementById("userName");
  const userNik = document.getElementById("userNik");
  const userBio = document.getElementById("userBio");

  let user = (userName.textContent = localStorage.getItem("name"));
  userNik.textContent = "@" + localStorage.getItem("nik");
  userBio.textContent = localStorage.getItem("bio");

  if (user === "Buildly official") {
    document.getElementById("pp").textContent = "5";
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
});

// loyihalarni profilga chqarish

let projectsArray = JSON.parse(localStorage.getItem("projectsList")) || [];

if (projectsArray.length === 0) {
  document.querySelector(".projects").style.display = "flex";
} else {
  document.querySelector(".projects").style.display = "none";
  document.getElementById("s").innerHTML = `${projectsArray}`;
}

// qo'ygan projectlarini soni

document.getElementById("projectsLength").textContent = projectsArray.length;
