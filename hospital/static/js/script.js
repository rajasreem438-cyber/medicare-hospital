const year = document.getElementById("year");
if (year) {
    year.textContent = new Date().getFullYear();
}


const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function () {
        alert("Message Sent Successfully!");
    });
}


const appointmentForm = document.getElementById("appointmentForm");

if (appointmentForm) {
    appointmentForm.addEventListener("submit", function () {
        alert("Appointment Booked Successfully!");
    });
}


document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


const currentPage = window.location.pathname;

document.querySelectorAll("nav a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});


window.addEventListener("load", function () {
    console.log("Welcome to MediCare Hospital Website");
});