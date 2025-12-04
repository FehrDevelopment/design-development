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


