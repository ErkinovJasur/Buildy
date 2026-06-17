document.addEventListener("DOMContentLoaded", () => {
  // userning nikini chaqirib olamiz

  const userNamee = (document.getElementById("userNamee").textContent =
    localStorage.getItem("name"));
  const userNikk = (document.getElementById("userNikk").textContent =
    "@" + localStorage.getItem("nik"));

  // avatar

  const avatar = document.getElementById("user-avatar");
  const savedAvatar = localStorage.getItem("avatar");

  if (savedAvatar) {
    avatar.src = savedAvatar;
  }

  // like

  const likeButtons = document.querySelectorAll(".icon-lucide.like");

  likeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      button.classList.toggle("active");
    });
  });

  // loader

  const loader = document.querySelector(".loader");
  const posts = document.querySelector(".posts");

  setTimeout(() => {
    posts.style.display = "block";
    loader.style.display = "none";
  }, 2200);
});
