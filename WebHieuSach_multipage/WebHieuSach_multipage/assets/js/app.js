// app.js - script chung (toi gian)
document.addEventListener("DOMContentLoaded", () => {
  const userIcon = document.getElementById("userBtn");
  if (userIcon) {
    userIcon.addEventListener("click", () => {
      window.location.href = "./pages/login.html";
    });
  }
});
