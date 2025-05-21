document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("startBtn");
  const initialScreen = document.getElementById("initialScreen");
  const loveMessage = document.getElementById("loveMessage");

  startBtn.addEventListener("click", () => {
    // إخفاء المحتوى القديم
    initialScreen.style.display = "none";

    // بعد ثانية، عرض الرسالة مع التأثير
    setTimeout(() => {
      loveMessage.style.display = "block";
    }, 1000);
  });
});
