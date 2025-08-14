
document
  .getElementById("darkModeToggle")
  .addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });
function readStory(title) {
  if (title == "Love or Confusion") {
    window.location.href = "love.html";
  } else if (title == "An Unwritten love") {
    window.location.href = "unwritten.html";
  } else {
    alert("Story not found");
  }
}
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    document.getElementById("formMessage").style.display = "block";
    this.reset();
  });
function openModal() {
  document.getElementById("storyModal").style.display = "block";
}

function closeModal() {
  document.getElementById("storyModal").style.display = "none";
}

document.getElementById("storyForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Story submitted successfully!");
  closeModal();
  this.reset();
});
function openModal() {
  document.getElementById("storyModal").style.display = "block";
}

function closeModal() {
  document.getElementById("storyModal").style.display = "none";
}

document.getElementById("storyForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  fetch(
    "https://script.google.com/macros/s/AKfycbx5yMfdAWWAOS24bkjrcah4U2h8a7RPIltlG9_ABTciOGXkna_mYuUs-86i7XhWDaBD/exec",
    {
      method: "POST",
      body: JSON.stringify({ name, title, content }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((res) => res.json())
    .then((response) => {
      alert("Story submitted successfully!");
      closeModal();
      document.getElementById("storyForm").reset();
    })
    .catch((err) => {
      alert("Something went wrong. Try again.");
      console.error(err);
    });
});

//fade-in
document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll(".fade-in");

  const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach((fader) => {
    appearOnScroll.observe(fader);
  });
});
//loading spinner

window.onload = function () {
  const spinner = document.getElementById("loading-spinner");
  // Hide the spinner after the page has loaded
  spinner.style.display = "none";
};
//animation part
AOS.init({
  duration: 2000,
  once: true,
});
//aminations for welcome text 
const text = "Welcome to Story Mania";
  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      document.getElementById("typed-text").textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  }

  window.addEventListener('load', () => {
    typeWriter();
  });
 