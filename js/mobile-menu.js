document.addEventListener("DOMContentLoaded", () => {
  const aside = document.querySelector(".aside");

  // mobile menu

  function mobileMenu() {
    aside.innerHTML = `
    <div class="aside-box">
            <div class="s">
                <h2>Menu</h2>
                <i class="icon-lucide" data-lucide="x" id="xs"></i>
            </div>
            <button onclick="window.location.href = 'index.html'">
                <i class="icon-lucide" data-lucide="home"></i>
                Asosiy
            </button>
            <button onclick="window.location.href = 'programist.html'">
                <i class="icon-lucide" data-lucide="CodeXml"></i>
                Dasturchilar
            </button>
            <button>
                <i class="icon-lucide" data-lucide="FolderGit2"></i>
                Loyihalar
            </button>
            <button onclick="window.location.href = 'teams.html'">
                <i class="icon-lucide" data-lucide="users"></i>
                Jamoalar
            </button>
            <button onclick="window.location.href = 'discovery.html'">
                <i class="icon-lucide" data-lucide="compass"></i>
                Kashf qiling
            </button>
            <button>
                <i class="icon-lucide" data-lucide="bookmark"></i>
                Saqlanganlar
            </button>
            <button>
                <i class="icon-lucide" data-lucide="MessageCircle"></i>
                Xabarlar
            </button>
            <button onclick="window.location.href = 'settings.html'">
                <i class="icon-lucide" data-lucide="settings"></i>
                Sozlamalar
            </button>
            <div class="log" id="log">
                <i class="icon-lucide" data-lucide="log-out"></i>
                Log Out
            </div>
        </div>
  `;
  }

  mobileMenu();

  // x icon bosilganda modal yopilishi

  const xs = document.getElementById("xs");

  xs.addEventListener("click", function () {
    aside.style.display = "none";
    xs.style.display = "none";
  });

  // menu bosilganda modal ochilishi

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

  // modal chetlariga bosilganda yopilishi

  window.addEventListener("click", (e) => {
    if (e.target === aside) {
      aside.style.display = "none";
    }
  });

  // log out bosilganda akkaunt o'chirilishi

  const log = document.getElementById("log");

  log.addEventListener("click", function () {
    localStorage.removeItem("name");
    localStorage.removeItem("nik");
    localStorage.removeItem("bio");
    localStorage.removeItem("email");
    localStorage.removeItem("parol");
    localStorage.removeItem("userProfileCard");
    localStorage.removeItem("github");
    localStorage.removeItem("tg");
    localStorage.removeItem("website");
    localStorage.removeItem("linkedin");
    location.reload();
  });

  // icons

  lucide.createIcons();
});
