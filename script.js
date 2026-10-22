
const heartsContainer = document.getElementById("hearts");
const surpriseBtn = document.getElementById("surpriseBtn");
const surprise = document.getElementById("surprise");

const loveEmojis = [
    "❤️", "💗", "💖", "💕", "💘",
    "💝", "💞", "🩷", "💓", "🌸"
];

// Membuat hati melayang secara otomatis
function createHeart() {
    const heart = document.createElement("span");

    heart.classList.add("heart");
    heart.textContent =
        loveEmojis[Math.floor(Math.random() * loveEmojis.length)];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (16 + Math.random() * 24) + "px";
    heart.style.animationDuration = (4 + Math.random() * 5) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 9500);
}

// Hati terus bermunculan
setInterval(createHeart, 250);

// Tombol kejutan
surpriseBtn.addEventListener("click", () => {
    surprise.classList.toggle("hidden");

    if (surprise.classList.contains("hidden")) {
        surpriseBtn.textContent = "Klik untuk kejutan 💌";
    } else {
        surpriseBtn.textContent = "Awww, love you! 💖";

        // Hujan hati saat tombol ditekan
        for (let i = 0; i < 35; i++) {
            setTimeout(createHeart, i * 80);
        }

        surprise.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        });
    }
});
