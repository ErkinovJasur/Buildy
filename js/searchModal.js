import axios from "https://cdn.jsdelivr.net/npm/axios@1.11.0/+esm";

document.addEventListener("DOMContentLoaded", () => {
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

  const api = "https://6a42b7747602860e6521d39f.mockapi.io/users";
  const resultsUsers = document.getElementById("results");

  async function user() {
    try {
      let response = await axios.get(api);

      searchInput.addEventListener("input", function () {
        let filter = response.data.filter((value) => {
          const term = searchInput.value.trim().toLowerCase();

          return value.username.toLowerCase().includes(term);
        });

        resultsUsers.innerHTML = "";

        if (filter.length === 0) {
          resultsUsers.innerHTML = `
          <h2 style="text-align: center; font-size: 12px; margin-top: 150px; color: red; font-weight: 400;"><span style="color: black;">@${searchInput.value}</span> topilmadi.</h2>
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
          }, 1000);
        }
      });
    } catch (error) {
      resultsUsers.innerHTML = `<h3 style="color: red; font-weight: 600; text-align: center; font-size: 12px; margin-top: 150px;">Ma'lumotlarni yuklashda xatolik yuz berdi.</h3>`;
    }
  }

  user();

  // icons

  lucide.createIcons();
});
