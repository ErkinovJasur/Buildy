// kiritgan ma'lumotlarini profile sahifasiga chqarish

const userName = document.getElementById("userName");
const userNik = document.getElementById("userNik");
const userNamee = document.getElementById("userNamee");
const userNikk = document.getElementById("userNikk");
const userBio = document.getElementById("userBio");
const userRole = document.getElementById("role");

userName.textContent = localStorage.getItem("name");
userNik.textContent = "@" + localStorage.getItem("nik");
userNamee.textContent = localStorage.getItem("name");
userNikk.textContent = "@" + localStorage.getItem("nik");
userRole.textContent = localStorage.getItem("select") || 'Founder of Buildy';
userBio.textContent = localStorage.getItem("bio") || "Hali bio yo'q.";

// avatar yuklash

const profileAvatar = document.getElementById("avatar");
const navbarAvatar = document.getElementById("avatarr");
const avatarInput = document.getElementById("avatarInput");

const savedAvatar = localStorage.getItem("avatar");

if (savedAvatar) {
  profileAvatar.src = savedAvatar;
  navbarAvatar.src = savedAvatar;
}

avatarInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    profileAvatar.src = reader.result;
    navbarAvatar.src = reader.result;

    localStorage.setItem("avatar", reader.result);
  };
  reader.readAsDataURL(file);
});
