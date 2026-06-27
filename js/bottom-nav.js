const bottomNav = document.querySelector(".mobile-bottom-nav");

if (bottomNav) {
  function nav() {
    bottomNav.innerHTML = `
        <div class="nav-btn" onclick="window.location.href = 'home.html'" data-page="home.html">
            <i data-lucide="house"></i>
        </div>
        <div class="nav-btn">
            <i data-lucide="compass"></i>
        </div>
        <div class="nav-btn" id="plus">
            <i data-lucide="plus"></i>
        </div>
        <div class="nav-btn">
            <i data-lucide="MessageCircle"></i>
        </div>
        <div class="nav-btn" id="user" data-page="profile.html">
            <i data-lucide="circle-user"></i>
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
