export async function loadAvatar(profileAvatarId, fetchUrl) {
  const profileAvatar = document.getElementById(profileAvatarId);

  if (!profileAvatar) return null;

  try {
    const res = await fetch(fetchUrl);

    if (!res.ok) {
      throw new Error("Server xatosi");
    }

    const users = await res.json();

    const userName = localStorage.getItem("name");

    const user = users.find((user) => user.name === userName);

    if (user && user.avatar) {
      profileAvatar.src = user.avatar;

      return user.avatar;
    }

    console.log("Avatar topilmadi");
  } catch (err) {
    console.error("Avatar yuklanmadi:", err);
  }

  return null;
}
