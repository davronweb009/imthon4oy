document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("header .nav a");

    navLinks.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const href = this.getAttribute("href");
        document.getElementById("loadingOverlay").style.display = "flex";
        setTimeout(() => {
          window.location.href = href;
        }, 1500);
      });
    });
  });
var log = document.getElementById('login');
var reg = document.getElementById('register');
var button = document.getElementById('btn');

function register() {
     log.style.left = '-400px';
     reg.style.left = '50px';
     button.style.left = '110px';
}

function login() {
     log.style.left = '50px';
     reg.style.left = '450px';
     button.style.left = '0';
}

// Register va Login logikasi

document.addEventListener("DOMContentLoaded", function () {
     const loginForm = document.getElementById("login");
     const registerForm = document.getElementById("register");
 
     loginForm.addEventListener("submit", function (event) {
         event.preventDefault();
         const userId = loginForm.querySelector("input[type='text']").value;
         const password = loginForm.querySelector("input[type='text']:nth-child(2)").value;
 
         const storedUser = JSON.parse(localStorage.getItem(userId));
         
         if (storedUser && storedUser.password === password) {
             alert("Tizimga muvaffaqiyatli kirdingiz!");
             localStorage.setItem("currentUser", userId); // Hozirgi foydalanuvchini saqlash
             window.location.href = "../index.html"; // Asosiy sahifaga yo'naltirish
         } else {
             alert("Noto‘g‘ri login ma’lumotlari");
         }
     });
 
     registerForm.addEventListener("submit", function (event) {
         event.preventDefault();
         const userId = registerForm.querySelector("input[type='text']").value;
         const email = registerForm.querySelector("input[type='email']").value;
         const password = registerForm.querySelector("input[type='text']:nth-child(3)").value;
 
         if (localStorage.getItem(userId)) {
             alert("Bu foydalanuvchi allaqachon mavjud!");
             return;
         }
 
         const userData = {
             email: email,
             password: password
         };
 
         localStorage.setItem(userId, JSON.stringify(userData));
         alert("Ro‘yxatdan o‘tish muvaffaqiyatli yakunlandi! Endi tizimga kirishingiz mumkin.");
         window.location.href = "../index.html"; 
     });
 
     // Logout funksiyasi
     const logoutButton = document.getElementById("logout");
     if (logoutButton) {
         logoutButton.addEventListener("click", function () {
             localStorage.removeItem("currentUser");
             window.location.href = "register.html"; // Login sahifasiga qaytarish
         });
     }
 
     // Akkountsiz kirishga ruxsat bermaslik
     if (window.location.pathname.includes("home.html")) {
         const currentUser = localStorage.getItem("currentUser");
         if (!currentUser) {
             alert("Iltimos, avval tizimga kiring!");
             window.location.href = "register.html";
         }
     }
 });


 document.getElementById("showPassword").addEventListener("change", function () {
     const passwordInput = document.getElementById("password");
     if (this.checked) {
         passwordInput.type = "text"; // Parol ko‘rinadi
     } else {
         passwordInput.type = "password"; // Parol yashirin bo‘ladi
     }
 });
  