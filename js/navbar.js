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
                Dasturchi va loyihalarni qidirish...
                <span class="slash-hint">/</span>
            </button>
            <div class="modal-search">
                <div class="modal-search-card">
                    <input id="searchInput" placeholder="Dasturchi va loyihalarni qidirish..." id="searchInp"></input>
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
                        <div class="item">
                          <i data-lucide="compass"></i>
                          <span>Kashf qiling</span>
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

  // modal search

  const searchBtn = document.querySelector(".search-btn");
  const modal_search = document.querySelector(".modal-search");
  const searchInput = document.getElementById("searchInput");

  searchBtn.addEventListener("click", function () {
    modal_search.style.display = "flex";
  });

  window.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      e.preventDefault();
      modal_search.style.display = "none";
    } else if (e.key === "/") {
      modal_search.style.display = "flex";
    }
  });

  document.addEventListener("click", function (e) {
    if (e.target === modal_search) {
      modal_search.style.display = "none";
    }
  });

  const api = "./users.json";
  const resultsUsers = document.getElementById("results");

  async function user() {
    try {
      let response = await fetch(api);
      let data = await response.json();
      render(data);
    } catch (error) {
      resultsUsers.innerHTML = `<h3 style="color: red; font-weight: 600; text-align: center; font-size: 12px; margin-top: 150px;">Ma'lumotlarni yuklashda xatolik yuz berdi.</h3>`;
    }
  }

  user();

  function render(data) {
    searchInput.addEventListener("input", function () {
      let filter = data.users.filter((value) => {
        const term = searchInput.value.trim().toLowerCase();

        return value.username.toLowerCase().includes(term);
      });

      resultsUsers.innerHTML = "";

      if (filter.length === 0) {
        resultsUsers.innerHTML = `
          <h2 style="text-align: center; font-size: 12px; margin-top: 150px; color: red; font-weight: 400;">User not found.</h2>
        `;
      } else {
        resultsUsers.innerHTML = `
          <h2 style="text-align: center; font-size: 11px; margin-top: 150px; color: #666; font-weight: 400;">Searching...</h2>
        `;

        setTimeout(() => {
          resultsUsers.innerHTML = "";

          filter.map((item) => {
            resultsUsers.innerHTML += `
              <div class="searchUsers">
                <img src="${item.avatar}"></img>
                <div>
                  <h1>${item.name}</h1>
                  <h3>${item.username}</h3>
                </div>
              </div>
            `;
          });
        }, 1500);
      }
    });
  }

  // icons

  lucide.createIcons();

  // title

  document.querySelector("title").innerText =
    "Buildly — Show what you're building.";
});
