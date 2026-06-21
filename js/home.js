document.addEventListener("DOMContentLoaded", () => {

  const avatar = document.getElementById("user-avatar");
  const savedAvatar = localStorage.getItem("avatar");

  if (savedAvatar) {
    avatar.src = savedAvatar;
    localStorage.setItem("avatar")
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
