const modal1 = document.querySelector(".modal");
const profileCard = document.getElementById("profile-card");
const asideProfile = document.querySelector(".aside-profile");
const user = document.getElementById("user");


// modalRegistar

function modal() {
  if (!modal1) return;
  modal1.innerHTML = `
    <div class="modal-registar">
        <h1 id="h1">Ro'yxatdan o'tish</h1>
        <p>Show what you build.</p>
        <div>
            <div>
                <label>Ism</label>
                <input id="name" type="text" placeholder="Ismingizni kiriting.">
            </div>
            <div>
                <label>Nik</label>
                <input id="nik" type="text" placeholder="Nikingizni kiriting.">
            </div>
            <div>
                <label>Email</label>
                <input id="email" type="email" placeholder="Emailingizni kiriting.">
            </div>
            <div>
                <label>Parol</label>
                <input id="parol" type="password" placeholder="Parolingizni kiriting.">
            </div>
            <div>
                <label>Tavsif</label>
                <input id="bio" type="text" placeholder="Tavsif kiriting.">
            </div>
            <div>
                <label>Kimsiz?</label>
                <select id="select">
                <option value="🎨 Frontend Developer">
        🎨 Frontend Developer
    </option>

    <option value="⚙️ Backend Developer">
        ⚙️ Backend Developer
    </option>

    <option value="🚀 Full Stack Developer">
        🚀 Full Stack Developer
    </option>

    <option value="📱 Mobile Developer">
        📱 Mobile Developer
    </option>

    <option value="✨ UI/UX Designer">
        ✨ UI/UX Designer
    </option>

    <option value="☁️ DevOps Engineer">
        ☁️ DevOps Engineer
    </option>

    <option value="🧪 QA Engineer">
        🧪 QA Engineer
    </option>

    <option value="🤖 AI Engineer">
        🤖 AI Engineer
    </option>

    <option value="🎓 Student">
        🎓 Student
    </option>

    <option value="💡Founder">
        💡 Founder
    </option>

    <option value="🏢 Recruiter">
        🏢 Recruiter
    </option>

    <option value="🌍Other">
        🌍 Other
    </option>
                </select>
            </div>
            <button id="btn">Ro'yxatdan o'tish</button>
        </div>
    </div>
  `;
}

modal();

// registar

const namee = document.getElementById("name");
const nik = document.getElementById("nik");
const email = document.getElementById("email");
const parol = document.getElementById("parol");
const bio = document.getElementById("bio");
const btn = document.getElementById("btn");
const select = document.getElementById("select");

// modal ochilishi

if (modal1) {
  window.addEventListener("click", function (e) {
    if (e.target === modal1) modal1.style.display = "none";
  });
}

// Ro'yxatdan o'tmagan bo'lsa modal chiqishi

if (!isRegistered) {
  user.addEventListener("click", function () {
    if (modal1) modal1.style.display = "flex";
  });
} else {
  user.addEventListener("click", function () {
    window.location.href = "profile.html";
  });
}

if (isRegistered) {
  if (modal1) modal1.style.display = "none";
  if (profileCard) profileCard.style.display = "none";
  if (asideProfile) asideProfile.style.display = "flex";
} else {
  if (profileCard) profileCard.style.display = "block";
  if (asideProfile) asideProfile.style.display = "none";
}

// modal registar

if (btn) {
  btn.addEventListener("click", () => {
    let name = namee.value;
    let nikk = nik.value;
    let emaill = email.value;
    let pass = parol.value;
    let bioo = bio.value;

    if (
      name === "" ||
      nikk === "" ||
      emaill === "" ||
      pass === "" ||
      select.value === ""
    ) {
      alert("Iltimos barcha maydoni to'ldiring!");
      return;
    }

    localStorage.setItem("name", name);
    localStorage.setItem("nik", nikk);
    localStorage.setItem("email", emaill);
    localStorage.setItem("parol", pass);
    localStorage.setItem("bio", bioo);
    localStorage.setItem("select", select.value);

    if (profileCard) profileCard.style.display = "none";
    if (modal1) modal1.style.display = "none";
    window.location.href = "profile.html";
  });
}
