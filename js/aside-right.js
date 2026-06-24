const asideRight = document.querySelector(".aside-right");

// asideRight

function asideright() {
  asideRight.innerHTML = `
    <div class="aside-right-div1">
      <h1><i data-lucide="flame" class="icon-lucide"></i> Top Dasturchilar</h1>
      <div>
          <img src="https://bairesdev.mo.cloudinary.net/blog/2025/03/how-to-become-a-full-stack-developer.jpg?tx=w_1920,q_auto"
              alt="user-avatar">
          <div>
              <h2>Sardor</h2>
              <p>@sardorkeldiyev</p>
          </div>
      </div>
      <div>
          <img src="https://dac.digital/wp-content/uploads/2023/07/1ud5eeycUbeH1kp1ln_gkJg-1200x680.jpe"
              alt="user-avatar">
          <div>
              <h2>Madina</h2>
              <p>@axmedovamadi</p>
          </div>
      </div>
      <div>
          <img src="https://jeoqreprpwuuldhozvtx.supabase.co/storage/v1/object/public/kollabee-uploads/cmon4e16d000004k10amleep2/31a38cea0e137aa1dd7bc91ba73f242e.jpg"
              alt="user-avatar">
          <div>
              <h2>Ibrohim</h2>
              <p>@begboyevibrohim</p>
          </div>
      </div>
      <div>
          <img src="https://www.kollabee.app/_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FACg8ocLvoxAxFVUguhfbf5zV_G35KsR1u7q8t2bxRw03ki7Wn-jFgw%3Ds96-c&w=96&q=75"
              alt="user-avatar">
          <div>
              <h2>Temurbek</h2>
              <p>@</p>
          </div>
      </div>
      <div>
          <img src="https://woz-u.com/wp-content/uploads/2022/06/Evolution-of-Coding-scaled.jpg"
              alt="user-avatar">
          <div>
              <h2>timurovch7</h2>
              <p>@erkinov</p>
          </div>
      </div>
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
  "🚀 GitHub profilingizni to'ldirib boring.",
  "Kichik loyihalardan boshlang: Katta tizimlar qurishga shoshilmang. Avval (To-do list), (Ob-havo ilovasi) yoki oddiy (Profil kartalari) kabi kichik loyihalarni mukammal darajada yakunlang.",
  "O'zgaruvchilaringizga (variable) mantiqli nom bering. Masalan, a, b deb emas, userName, userRole deb nomlang. Bu kelajakda o'z kodingizni o'qib tushunishingizni osonlashtiradi.",
  "🎯 Har loyiha uchun screenshot qo'shing.",
  "⚡ Ish beruvchilar avval loyihaga qaraydi.",
  "20% vaqtni nazariyaga (video darslar, kitoblar), 80% vaqtni esa amaliyotga (kod yozish) ajrating. Faqat videolarni ko'rish bilan dasturchi bo'lib bo'lmaydi.",
  "🔥 README yozilgan loyiha ko'proq e'tibor oladi.",
  "💡 Portfolio'da 5 ta sifatli loyiha 50 ta oddiy loyihadan kuchliroqdir.",
  "📱 Responsive dizaynni unutmang.",
  "🧠 Kod yozishdan oldin reja tuzing.",
  "Taslim bo'lmang: Dasturlash qiyin. Ba'zan bir kunlik xatoni to'g'rilash uchun soatlab vaqt ketadi. Bu normal holat. Asosiysi — 'Men buni eplolmayman' demasdan, (Buni qanday o'rgansam bo'ladi?) deb o'ylash.",
];

const randomTip = tips[Math.floor(Math.random() * tips.length)];
document.getElementById("tip").textContent = randomTip;