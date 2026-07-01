// ==========================================
// Initialize Google Tag Manager Data Layer
// ==========================================

window.dataLayer = window.dataLayer || [];

// ==========================================
// Get Form Elements
// ==========================================

const form = document.getElementById("consultationForm");
const thankYou = document.getElementById("thankYou");
const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");

// ==========================================
// Phone Number Validation
// ==========================================

function isValidPhone(phone) {
    const phoneRegex = /^[6-9]\d{9}$/;
    return phoneRegex.test(phone);
}

// ==========================================
// Form Submission
// ==========================================

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const patientName = nameInput.value.trim();
    const patientPhone = phoneInput.value.trim();

    // Validate Name

    if (patientName.length < 3) {

        alert("Please enter a valid name.");

        nameInput.focus();

        return;
    }

    // Validate Phone

    if (!isValidPhone(patientPhone)) {

        alert("Please enter a valid 10-digit mobile number.");

        phoneInput.focus();

        return;
    }

    // ==========================================
    // GTM Data Layer Push
    // ==========================================

    window.dataLayer.push({

        event: "consultation_form_submitted",

        patient_name: patientName,

        phone: patientPhone,

        clinic_preference: "Not Selected",

        form_name: "Consultation Landing Page",

        source: "Google Ads"

    });

    console.clear();

    console.log("====================================");
    console.log("Google Tag Manager Event Fired");
    console.log("====================================");
    console.table(window.dataLayer);

    // ==========================================
    // Hide Form
    // ==========================================

    form.style.display = "none";

    // ==========================================
    // Show Thank You
    // ==========================================

    thankYou.classList.remove("hidden");

});

// ==========================================
// Smooth Button Animation
// ==========================================

const buttons = document.querySelectorAll("button,.btn-primary,.btn-nav");

buttons.forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "scale(1.03)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "scale(1)";

    });

});

// ==========================================
// Scroll Animation
// ==========================================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0px)";
        }

    });

}, {

    threshold: .2

});

const cards = document.querySelectorAll(".card,.review-card");

cards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform = "translateY(40px)";

    card.style.transition = ".7s";

    observer.observe(card);

});

// ==========================================
// Hero Image Animation
// ==========================================

const heroImage = document.querySelector(".hero-image img");

if(heroImage){

heroImage.animate(

[
{
transform:"translateY(0px)"
},

{
transform:"translateY(-10px)"
},

{
transform:"translateY(0px)"
}

],

{

duration:3000,

iterations:Infinity

}

);

}

// ==========================================
// Navbar Shadow On Scroll
// ==========================================

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>30){

header.style.boxShadow="0 6px 20px rgba(0,0,0,.12)";

}

else{

header.style.boxShadow="0 2px 15px rgba(0,0,0,.08)";

}

});

// ==========================================
// Console Message
// ==========================================

console.log("OrthoNow Landing Page Loaded Successfully");

console.log("Developer Assignment Ready");