document.addEventListener("DOMContentLoaded", () => {
  const modal1 = document.querySelector(".modal");
  const profileCard = document.getElementById("profile-card");
  const asideProfile = document.querySelector(".aside-profile");
  const user = document.getElementById("user");

  let isRegistered = localStorage.getItem("name");
  let nikRegistered = localStorage.getItem("nik");

  user.addEventListener("click", function () {
    window.location.href = "profile.html";
  });

  document.querySelector(".edit-btn").addEventListener("click", function () {
    modal1.style.display = "flex";
  });

  // modalRegistar

  function modal() {
    if (!modal1) return;
    modal1.innerHTML = `
    <div class="modal-registar">
        <h1 id="h1">Ro'yxatdan o'tish</h1>
        <p>Show what you're building.</p>
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

  if (!isRegistered) {
    namee.value = "";
    nik.value = "";
    email.value = "";
    bio.value = "";
    parol.value = "";
  } else {
    namee.value = localStorage.getItem("name");
    nik.value = localStorage.getItem("nik");
    email.value = localStorage.getItem("email");
    bio.value = localStorage.getItem("bio");
    parol.value = localStorage.getItem("parol");
  }

  // modal yopilishi

  if (modal1) {
    window.addEventListener("click", function (e) {
      if (e.target === modal1) modal1.style.display = "none";
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

      if (name === "" || nikk === "" || emaill === "" || pass === "") {
        alert("Iltimos barcha maydoni to'ldiring!");
        return;
      } else if (!emaill.includes("@")) {
        alert("Email xato!");
        return;
      } else if (nikk.length <= 2) {
        alert("Nik maximum 3 harfdan iborat bo'lishi shart");
        return;
      } else if (pass.length <= 5) {
        alert("Parol uzunligi 6 honali bo'lishi shart");
        return;
      }

      localStorage.setItem("name", name);
      localStorage.setItem("nik", nikk);
      localStorage.setItem("email", emaill);
      localStorage.setItem("parol", pass);
      localStorage.setItem("bio", bioo);

      if (profileCard) profileCard.style.display = "none";
      if (modal1) modal1.style.display = "none";
      window.location.href = "profile.html";
    });
  }
});
