
  document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("header .nav a");

    navLinks.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const href = this.getAttribute("href");
        document.getElementById("loadingOverlay").style.display = "flex";
        setTimeout(() => {
          window.location.href = href;
        }, 500);
      });
    });
  });



function toggleVideo() {
    const trailer = document.querySelector(".trailer");
    const video = document.querySelector("video");

    video.pause();
    trailer.classList.toggle('active'); 
}

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

if (nextBtn && prevBtn) {
    nextBtn.addEventListener("click", () => {
        currentSlide = (currentSlide + 1) % slides.length;
        const slide = slides[currentSlide];
        changeBg(slide.bg, slide.title);
    });

    prevBtn.addEventListener("click", () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        const slide = slides[currentSlide];
        changeBg(slide.bg, slide.title);
    });
}


// Rasmlar va ularning nomlari ro'yxati
const slides = [
    
    { title: "the-covenant", bg: "the-covenant-title.jpg" },
    { title: "the-black-demon", bg: "the-black-demon-blogroll.jpg" },
    { title: "the-tank", bg: "the-tank-title.jpg" },
    { title: "bg-65", bg: "65-tirtle.jpg" }
];

let currentSlide = 0;

function changeBg(bg, title) {
    const banner = document.querySelector(".banner");
    const contents = document.querySelectorAll(".content");

    const imagePath = `../images/movies/${bg}`;
    banner.style.backgroundImage = `url('${imagePath}')`;
    banner.style.backgroundSize = 'cover';
    banner.style.backgroundPosition = 'center';
    banner.style.backgroundRepeat = 'no-repeat';

    contents.forEach(content => {
        content.classList.remove('active');
        if (content.classList.contains(title)) {
            content.classList.add('active');
        }
    });
}
setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    const { bg, title } = slides[currentSlide];
    changeBg(bg, title);
}, 3000); // 3 soniyada avtomatik o‘zgaradi

// Avtomatik slayd aylantirish funksiyasi
function autoSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    const slide = slides[currentSlide];
    changeBg(slide.bg, slide.title);
}

// Har 6 soniyada slaydni almashtirish
setInterval(autoSlide, 6000);

// Dastlabki holatda 1-slaydni ko‘rsatish
window.addEventListener("DOMContentLoaded", function () {
    const slide = slides[currentSlide];
    changeBg(slide.bg, slide.title);
});

// Logout funksiyasi
const logoutButton = document.getElementById("logout");
if (logoutButton) {
    logoutButton.addEventListener("click", function () {
        localStorage.removeItem("currentUser");
        window.location.href = "register.html";
    });
}

