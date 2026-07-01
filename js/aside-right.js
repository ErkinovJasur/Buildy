import axios from "https://cdn.jsdelivr.net/npm/axios@1.11.0/+esm";

const asideRight = document.querySelector(".aside-right");
const api = "https://6a42b7747602860e6521d39f.mockapi.io/users";

// asideRight

function asideright() {
  asideRight.innerHTML = `
    <div class="aside-right-div1">
      <h1><i data-lucide="flame" class="icon-lucide"></i> Top Dasturchilar</h1>
        <div id="right"></div>
      <button onclick="window.location.href = 'programist.html'">Barchasini ko'rish →</button>
    </div>
    <div class="aside-right-div2">
        <h1><i class="icon-lucide" data-lucide="lightbulb"></i> Kunning maslahati</h1>
        <div>
            <p id="tip"></p>
        </div>
    </div>
    <p style="font-size: 11px; display: flex; gap: 10px;">© 2026 Buildly · <a style="cursor: pointer">Xavfsizlik</a> <a style="cursor: pointer" href="rule.html">Qoidalar</a></p>
  `;
}

asideright();

// icons

lucide.createIcons();

// tips

const tips = [
  "💡 Portfolio'da sifat sonidan muhimroq.",
  "🚀 GitHub profilingizni doim yangilab boring.",
  "🛠 Kichik loyihalarni mukammal tugatish katta loyihalarni boshlashdan foydaliroq.",
  "📝 Variable nomlarini tushunarli yozing: userName, userRole kabi.",
  "🎯 Har bir loyihaga yaxshi screenshot qo'shing.",
  "⚡ Ish beruvchilar avval qilgan loyihalaringizga qaraydi.",
  "🔥 20% nazariya, 80% amaliyot — kod yozmasdan rivojlanish qiyin.",
  "📖 README yozilgan loyiha professionalroq ko'rinadi.",
  "🏆 5 ta kuchli loyiha 50 ta tugallanmagan loyihadan yaxshiroq.",
  "📱 Har doim responsive dizaynni o'ylang.",
  "🧠 Kod yozishdan oldin reja tuzing.",
  "🚀 Xatolar — o'rganish jarayonining bir qismi. Muhimi yechim topishni o'rganish.",
  "💻 Kodni faqat ishlashi emas, tushunarli bo'lishi ham muhim.",
  "🌱 Har kuni ozgina bo'lsa ham yangi narsa o'rganing.",
  "🔥 Dasturlashda sabr eng katta skilllardan biri.",
];

const randomTip = tips[Math.floor(Math.random() * tips.length)];

document.getElementById("tip").textContent = randomTip;

const rightRender = async () => {
  try {
    let response = await axios.get(api);
    render(response.data);
  } catch (error) {
    console.log(error);
  }
};

rightRender();

function render(data) {
  data.slice(0, 5).map((item) => {
    document.getElementById("right").innerHTML += `
      <div>
          <img src="${item.avatar}" alt="user-avatar">
          <div>
              <h2>${item.name}</h2>
              <p>${item.username}</p>
          </div>
      </div>
        `;
  });
}