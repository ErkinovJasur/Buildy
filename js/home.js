document.addEventListener("DOMContentLoaded", () => {

  const savedAvatars = localStorage.getItem("avatars");
  const avatar = document.getElementById("user-avatar");

  if (savedAvatars) {
    avatar.src = savedAvatar;
    localStorage.setItem("avatars")
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
