document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactInfo");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // フォームのデフォルト送信を防ぐ
  
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
  
      // データを保存（例：localStorage）
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
  
      // 次のページへ遷移（例：確認画面）
      window.location.href = "serviceRequestConfirmation.html";
    });
  });