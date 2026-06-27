const bottomNav = document.querySelector(".mobile-bottom-nav");

if (bottomNav) {
  function nav() {
    bottomNav.innerHTML = `
        <div class="nav-btn" onclick="window.location.href = 'home.html'" data-page="home.html">
            <i data-lucide="house"></i>
            Home
        </div>
        <div class="nav-btn">
            <i data-lucide="compass"></i>
            Discovery
        </div>
        <div class="nav-btn" id="plus">
            <i data-lucide="plus"></i>
            Create
        </div>
        <div class="nav-btn">
            <i data-lucide="MessageCircle"></i>
            Messages
        </div>
        <div class="nav-btn" id="user" data-page="profile.html">
            <img id="avatar-bottomNav"></img>
              You
            </div>
    `;

    setLinks();
    lucide.createIcons();
  }
}

nav();

function setLinks() {
  const path = window.location.pathname;
  const navLink = document.querySelectorAll(".nav-btn");

  navLink.forEach((link) => {
    const page = link.getAttribute("data-page");

    if (page && path.includes(page)) {
      link.classList.add("active");
    }
  });
}

const bottomAvatar = document.getElementById("avatar-bottomNav");

if (!localStorage.getItem("avatar")) {
  bottomAvatar.src =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/500px-Default_pfp.svg.png";
} else {
  bottomAvatar.src = localStorage.getItem("avatar");
}
