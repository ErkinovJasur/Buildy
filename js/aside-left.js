const asideLeft = document.querySelector(".aside-left");

function asideleft() {
        asideLeft.innerHTML = `
            <a href="home.html" class="logo">
                <div class="logo-icon">
                    <i data-lucide="layers" style="width:16px;height:16px;"></i>
                </div>
                Buildly
            </a>
            <div class="aside-location">
                <button onclick="window.location.href = 'home.html'" class="nav-item" data-page="home.html">
                    <i class="icon-lucide" data-lucide="home"></i>
                    Asosiy
                </button>
                <button onclick="window.location.href = 'programist.html'" class="nav-item" data-page="programist.html">
                    <i class="icon-lucide" data-lucide="CodeXml"></i>
                    Dasturchilar
                </button>
                <button class="nav-item">
                    <i class="icon-lucide" data-lucide="FolderGit2"></i>
                    Loyihalar
                </button>
                <button onclick="window.location.href = 'teams.html'" class="nav-item" data-page="teams.html">
                    <i class="icon-lucide" data-lucide="users"></i>
                    Jamoalar
                </button>
                <button class="nav-item">
                    <i class="icon-lucide" data-lucide="compass"></i>
                    Kashf qiling
                </button>
                <button class="nav-item">
                    <i class="icon-lucide" data-lucide="bookmark"></i>
                    Saqlanganlar
                </button>
                <button class="nav-item">
                    <i class="icon-lucide" data-lucide="MessageCircle"></i>
                    Xabarlar
                </button>
                <button onclick="window.location.href = 'settings.html'" class="nav-item" data-page="settings.html">
                    <i class="icon-lucide" data-lucide="settings"></i>
                    Sozlamalar
                </button>
                <div class="aside-profile" onclick="window.location.href = 'profile.html'">
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <img id="user-avatar"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/500px-Default_pfp.svg.png"
                            alt="user-avatar">
                        <div>
                            <h2 id="userNamee"></h2>
                            <p id="userNikk"></p>
                        </div>
                    </div>
                </div>
            </div>
        `;

  setActiveLink();
  lucide.createIcons();
}

asideleft();

function setActiveLink() {
  const path = window.location.pathname;
  const navLinks = document.querySelectorAll(".nav-item");

  navLinks.forEach((link) => {
    const page = link.getAttribute("data-page");
    
    if (page && path.includes(page)) {
      link.classList.add("active");
    }
  });

  // avatar
  
  const navbarAvatar = document.getElementById("avatarr");
  
  const avatar = document.getElementById("user-avatar");
  const savedAvatar = localStorage.getItem("avatar");

  if (savedAvatar) {
    avatar.src = savedAvatar;
  }

  // ma'lumotlari

  const userNamee = document.getElementById("userNamee");
  const userNikk = document.getElementById("userNikk");

  userNamee.textContent = localStorage.getItem("name");
  userNikk.textContent = "@" + localStorage.getItem("nik");
}
