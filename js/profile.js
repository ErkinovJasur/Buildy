// kiritgan ma'lumotlarini profile sahifasiga chqarish

const userName = document.getElementById("userName");
const userNik = document.getElementById("userNik");
const userNamee = document.getElementById("userNamee");
const userNikk = document.getElementById("userNikk");
const userBio = document.getElementById("userBio");
const userRole = document.getElementById("role");

userName.textContent = localStorage.getItem("name");
userNik.textContent = "@" + localStorage.getItem("nik");
userNamee.textContent = localStorage.getItem("name");
userNikk.textContent = "@" + localStorage.getItem("nik");
userRole.textContent = localStorage.getItem("select") || "Founder of Buildy";
userBio.textContent = localStorage.getItem("bio");

// avatar yuklash

const profileAvatar = document.getElementById("avatar");
const navbarAvatar = document.getElementById("avatarr");
const avatarInput = document.getElementById("avatarInput");

const savedAvatar = localStorage.getItem("avatar");

if (savedAvatar) {
  profileAvatar.src = savedAvatar;
  navbarAvatar.src = savedAvatar;
}

avatarInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    profileAvatar.src = reader.result;
    navbarAvatar.src = reader.result;

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

// social links

const profileLinks = document.querySelector(".profile-links");
const telegram = document.getElementById("telegramLink");
const github = document.getElementById("githubLink");
const website = document.getElementById("websiteLink");
const linkedin = document.getElementById("linkedinLink");

let gitHub = localStorage.getItem("github");
let tg = localStorage.getItem("tg");
let webSite = localStorage.getItem("website");
let linkEdin = localStorage.getItem("linkedin");

if (github && gitHub != "https://github.com/") {
  github.href = gitHub;
  github.style.display = 'flex'
} else {
  github.style.display = "none";
}

if (telegram && tg != "https://t.me/") {
  telegram.href = tg;
  telegram.style.display = 'flex'
} else {
  telegram.style.display = "none";
}

if (website && webSite != "https://") {
  website.href = webSite;
  website.style.display = 'flex'
} else {
  website.style.display = "none";
}

if (linkedin && linkEdin != "https://www.linkedin.com/in/") {
  linkedin.href = linkEdin;
  linkedin.style.display = 'flex'
} else {
  linkedin.style.display = "none";
}
