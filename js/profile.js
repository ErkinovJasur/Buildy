document.addEventListener("DOMContentLoaded", () => {
  // Kiritgan ma'lumotlarini profile sahifasiga chqarish

  const userName = document.getElementById("userName");
  const userNik = document.getElementById("userNik");
  const userBio = document.getElementById("userBio");

  userName.textContent = localStorage.getItem("name");
  userNik.textContent = "@" + localStorage.getItem("nik");
  userBio.textContent = localStorage.getItem("bio");

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

  if (
    gitHub != "https://github.com/" ||
    tg != "https://t.me/" ||
    webSite != "https://" ||
    linkEdin != "https://www.linkedin.com/in/"
  ) {
    profileLinks.style.display = "none";
  }

  if (github && gitHub != "https://github.com/" && gitHub != "") {
    github.href = gitHub;
    github.style.display = "flex";
    profileLinks.style.display = "flex";
  } else {
    github.style.display = "none";
  }

  if (telegram && tg != "https://t.me/" && tg != "") {
    telegram.href = tg;
    telegram.style.display = "flex";
    profileLinks.style.display = "flex";
  } else {
    telegram.style.display = "none";
  }

  if (website && webSite != "https://" && webSite != "") {
    website.href = webSite;
    website.style.display = "flex";
    profileLinks.style.display = "flex";
  } else {
    website.style.display = "none";
  }

  if (
    linkedin &&
    linkEdin != "https://www.linkedin.com/in/" &&
    linkEdin != ""
  ) {
    linkedin.href = linkEdin;
    linkedin.style.display = "flex";
    profileLinks.style.display = "flex";
  } else {
    linkedin.style.display = "none";
  }

  const editBtn = document.querySelector(".edit-btn");
  const modal1 = document.querySelector(".modal");

  editBtn.addEventListener("click", function () {
    modal1.style.display = "flex";
    document.getElementById("h1").textContent = "Profilni tahrirlash";
    document.getElementById("btn").textContent = "Saqlash";
  });
});
