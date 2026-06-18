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
                    <div id="results"></div>
                </div>
            </div>
            <button class="plus" id="openProjectModalBtn">
                <i class="icon-lucide" data-lucide="plus"></i>
            </button>
            <button class="bell">
                <i class="icon-lucide" data-lucide="bell"></i>
            </button>
            <button class="menu" id="menu">
                <i class="icon-lucide" data-lucide="menu"></i>
            </button>
        </div>
    </div>
  `;
  }

  navbar();

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
      modal_search.style.display = "block";
    }
  });

  document.addEventListener("click", function (e) {
    if (e.target === modal_search) {
      modal_search.style.display = "none";
    }
  });

  const api = "./users.json";

  async function user() {
    try {
      let response = await fetch(api);
      let data = await response.json();
      render(data);
    } catch (error) {
      console.log(error);
    }
  }

  user();

  function render(data) {
    const resultsUsers = document.getElementById("results");

    searchInput.addEventListener("input", function () {
      let filter = data.users.filter((value) => {
        const term = searchInput.value.trim().toLowerCase();

        return value.name.toLowerCase().includes(term);
      });
      resultsUsers.innerHTML = "";

      if (filter.length === 0) {
        resultsUsers.innerHTML = `<h2 style="text-align: center; font-size: 12px; margin-top: 100px; color: red; font-weight: 500;">Foydalanuvchi topilmadi</h2>`;
      } else {
        resultsUsers.innerHTML = `<h2 style="text-align: center; font-size: 13px; margin-top: 100px;">Foydalanuvchi qidirilmoqda...</h2>`;

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
        }, 2500);
      }
    });
  }

  // icons

  lucide.createIcons();
});
