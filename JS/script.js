const navItems = document.querySelectorAll(".navbar-li");
const toggleBtn = document.getElementById("toggleSidebar");
const sideNavbar = document.getElementById("sidebar");
const backArrow = document.querySelector(".chatbar-info .fa-arrow-left");
const contactSection = document.querySelector(".contact-section");
const chatSection = document.querySelector(".chat-section");

// Overlay element create for mobile
let overlay = document.createElement("div");
overlay.classList.add("sidebar-overlay");
document.body.appendChild(overlay);

// Active item highlight
navItems.forEach(item => {
  item.addEventListener("click", () => {
    navItems.forEach(i => i.classList.remove("navbar-ul-li"));
    item.classList.add("navbar-ul-li");

    // On mobile close sidebar after selecting item
    if (window.innerWidth <= 767) {
      sideNavbar.classList.remove("active");
      overlay.classList.remove("show");
    }
  });
});

// Toggle sidebar expand/collapse
toggleBtn.addEventListener("click", () => {
  if (window.innerWidth <= 767) {
    // Mobile: slide in/out
    sideNavbar.classList.toggle("active");
    overlay.classList.toggle("show");
  } else {
    // Desktop + Tablet: expand/collapse
    sideNavbar.classList.toggle("active");
  }
});

// Overlay click closes sidebar (mobile only)
overlay.addEventListener("click", () => {
  sideNavbar.classList.remove("active");
  overlay.classList.remove("show");
});



// Default: on mobile, only contact list show
if (window.innerWidth <= 767) {
  contactSection.style.display = "block";
  chatSection.style.display = "none";
}

// Back arrow click → show contacts, hide chat
backArrow.addEventListener("click", () => {
  contactSection.style.display = "block";
  chatSection.style.display = "none";
});

// Contact click → show chat, hide contacts
document.querySelectorAll(".contact-ul li").forEach(contact => {
  contact.addEventListener("click", () => {
    if (window.innerWidth <= 767) {
      contactSection.style.display = "none";
      chatSection.style.display = "block";
    }
  });
});

// Resize fix (switch layouts on window resize)
window.addEventListener("resize", () => {
  if (window.innerWidth > 767) {
    contactSection.style.display = "block";
    chatSection.style.display = "block";
  } else {
    contactSection.style.display = "block";
    chatSection.style.display = "none";
  }
});
