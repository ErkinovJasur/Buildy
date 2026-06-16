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
            </button>
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

// icons

lucide.createIcons();
