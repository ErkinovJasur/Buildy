document.addEventListener("DOMContentLoaded", () => {
  const aside = document.querySelector(".aside");

  mobileMenu();

  // x close modal
  document.getElementById("xs").addEventListener("click", function () {
    aside.style.display = "none";
    xs.style.display = "none";
  });
  // mobile menu
  function mobileMenu() {
    aside.innerHTML = `
    <div class="aside-box">
            <div class="s">
                <h2>
                  <div class="logo-icon">
                      <i data-lucide="layers" style="width:16px;height:16px;"></i>
                  </div>
                  Buildly
                </h2>
                <i class="icon-lucide" data-lucide="x" id="xs"></i>
            </div>
            <button onclick="window.location.href = 'home.html'">
                <i class="icon-lucide" data-lucide="home"></i>
                Lenta
            </button>
            <button onclick="window.location.href = 'programist.html'">
                <i class="icon-lucide" data-lucide="CodeXml"></i>
                Developers
            </button>
            <button>
                <i class="icon-lucide" data-lucide="FolderGit2"></i>
                Projects
            </button>
            <button onclick="window.location.href = 'teams.html'">
                <i class="icon-lucide" data-lucide="users"></i>
                Teams
            </button>
            <button onclick="window.location.href = 'discovery.html'">
                <i class="icon-lucide" data-lucide="compass"></i>
                Explore
            </button>
            <button>
                <i class="icon-lucide" data-lucide="bookmark"></i>
                Saved
            </button>
            <button>
                <i class="icon-lucide" data-lucide="MessageCircle"></i>
                Messages
            </button>
            <button onclick="window.location.href = 'settings.html'">
                <i class="icon-lucide" data-lucide="settings"></i>
                Settings
            </button>
            <div class="log" id="log">
                <i class="icon-lucide" data-lucide="log-out"></i>
            </div>
        </div>
  `;
  }

  // open modal in menu
  window.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".menu");

    menu.addEventListener("click", () => {
      aside.style.position = "fixed";
      aside.style.display = "block";
      aside.style.zIndex = "999999";
      aside.style.display = "block";
      aside.style.transition = "1s";
      xs.style.display = "block";
    });
  });

  // close modal in target
  window.addEventListener("click", (e) => {
    if (e.target === aside) {
      aside.style.display = "none";
    }
  });

  // log out
  const log = document.getElementById("log");

  log.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
  });

  // icons
  lucide.createIcons();
});
