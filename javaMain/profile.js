document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
  
    form?.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const name = form.querySelector("input[name='name']").value.trim();
      const email = form.querySelector("input[name='email']").value.trim();
      const message = form.querySelector("textarea[name='message']").value.trim();
  
      if (!name || !email || !message) {
        alert("Please fill in all fields before submitting.");
        return;
      }
  
      emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form)
        .then(() => {
          alert("Message sent! Check your Gmail.");
          form.reset();
        }, (error) => {
          console.error("EmailJS Error:", error);
          alert("Failed to send message.");
        });
    });
  });

  let lastScrollTop = 0; // keep track of last scroll position
const header = document.querySelector("header");

window.addEventListener("scroll", function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // scrolling down
    header.classList.add("hidden");
  } else {
    // scrolling up
    header.classList.remove("hidden");
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // avoid negative values
});
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", () => {
    for (let i = 0; i < 30; i++) {
      const confetti = document.createElement("div");
      confetti.className = "confetti";
      confetti.style.left = Math.random() * 100 + "%";
      document.body.appendChild(confetti);
      setTimeout(() => confetti.remove(), 1000);
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("fireworks");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  function random(min, max) {
    return Math.random() * (max - min) + min;
  }

  class Particle {
    constructor(x, y, color) {
      this.x = x;
      this.y = y;
      this.color = color;
      this.radius = random(2, 4);
      this.speedX = random(-5, 5);
      this.speedY = random(-5, 5);
      this.alpha = 1;
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      this.alpha -= 0.02;
    }
    draw() {
      ctx.globalAlpha = this.alpha;
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
    }
  }

  let particles = [];

  function createFirework(x, y) {
    const colors = ["#ff0043", "#14fc56", "#1e90ff", "#ffff00"];
    for (let i = 0; i < 50; i++) {
      particles.push(new Particle(x, y, colors[Math.floor(Math.random() * colors.length)]));
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p, i) => {
      p.update();
      p.draw();
      if (p.alpha <= 0) particles.splice(i, 1);
    });
    requestAnimationFrame(animate);
  }
  animate();

  // Fireworks all over the screen after typing finishes
  setTimeout(() => {
    for (let i = 0; i < 10; i++) { // number of bursts
      const x = random(100, canvas.width - 100);
      const y = random(100, canvas.height - 100);
      setTimeout(() => createFirework(x, y), i * 300); // stagger bursts
    }
  }, 3000); // delay matches typing duration
});

