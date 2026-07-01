document.addEventListener("DOMContentLoaded", () => {
  const navbar1 = document.querySelector("header");

  // navbar

  function navbar() {
    if (!navbar1) return;
    navbar1.innerHTML = `
    <div class="container">
        <div class="header-nav">
            <button class="search-btn">
                <i class="icon-lucide" data-lucide="search"></i>
                Qidirish...
                <span class="slash-hint">/</span>
            </button>
            <div class="modal-search">
                <div class="modal-search-card">
                    <input id="searchInput" placeholder="Dasturchi qidirish..." id="searchInp"></input>
                    <div id="results">
                      <div class="sidebar">
                        <h4 id="h4">Navigation</h4>
                        <div class="item" onclick="window.location.href = 'home.html'">
                          <i data-lucide="house"></i>
                          <span>Asosiy</span>
                        </div>
                        <div class="item" onclick="window.location.href = 'programist.html'">
                          <i data-lucide="code-2"></i>
                          <span>Dasturchilar</span>
                        </div>
                        <div class="item">
                          <i data-lucide="folder-git-2"></i>
                          <span>Loyihalar</span>
                        </div>
                        <div class="item" onclick="window.location.href = 'teams.html'">
                          <i data-lucide="users"></i>
                          <span>Jamoalar</span>
                        </div>
                        <div class="item"  onclick="window.location.href = 'discovery.html'">
                          <i data-lucide="compass"></i>
                          <span>Kashf etish</span>
                        </div>
                        <div class="item">
                          <i data-lucide="bookmark"></i>
                          <span>Saqlanganlar</span>
                        </div>
                        <div class="item">
                          <i data-lucide="message-circle"></i>
                          <span>Xabarlar</span>
                        </div>
                        <div class="item" onclick="window.location.href = 'notification.html'">
                          <i data-lucide="bell"></i>
                          <span>Bildirishnomalar</span>
                        </div>
                        <div class="item" onclick="window.location.href = 'home.html'">
                          <i data-lucide="plus"></i>
                          <span>Yangi loyiha</span>
                        </div>
                        <div class="item s" onclick="window.location.href = 'settings.html'">
                          <i data-lucide="settings"></i>
                          <span>Sozlamalar</span>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
            <button class="plus" id="openProjectModalBtn">
                <i class="icon-lucide" data-lucide="plus"></i>
            </button>
            <button class="bell" id="bellBtn">
                <i class="icon-lucide" data-lucide="bell"></i>
                <span id="badge"></span>
            </button>
            <button class="menu" id="menu">
                <i class="icon-lucide" data-lucide="menu"></i>
            </button>
        </div>
    </div>
  `;
  }

  navbar();

  const bellBtn = document.getElementById("bellBtn");
  const badge = document.getElementById("badge");
  badge.textContent = 1;

  if (localStorage.getItem("readNotif")) {
    badge.style.display = "none";
  }

  bellBtn.onclick = () => {
    badge.style.display = "none";

    localStorage.setItem("readNotif", "true");
    window.location.href = "notification.html";
  };

  // icons

  lucide.createIcons();

  // title

  document.querySelector("title").innerText =
    "Buildly — Show what you're building.";
});