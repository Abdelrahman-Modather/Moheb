// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#ffffff';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.backgroundColor = '#1010101f';
        navbar.style.boxShadow = 'none';
    }
});

// Update active section based on scroll position
function updateActiveSection() {
    const sections = ['home', 'about', 'services', 'contact'];
    const navLinks = document.querySelectorAll('.navbar .links ul li a');
    
    // Get the current scroll position
    const currentPos = window.scrollY;
    
    // Check each section's position
    sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
            const sectionTop = section.offsetTop - 100; // Offset for navbar height
            const sectionBottom = sectionTop + section.offsetHeight;
            
            if (currentPos >= sectionTop && currentPos < sectionBottom) {
                // Remove active class from all links
                navLinks.forEach(link => link.classList.remove('active'));
                
                // Add active class to current section's link
                const activeLink = document.querySelector(`.navbar .links ul li a[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        }
    });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animate elements on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.feature, .testimonial, .hero-text, .service-text');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize animation styles
function initializeAnimations() {
    const elements = document.querySelectorAll('.feature, .testimonial, .hero-text, .service-text');
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(50px)';
        element.style.transition = 'all 0.6s ease-out';
    });
}

// Animate hero buttons on hover
const heroButtons = document.querySelectorAll('.hero-btn1, .hero-btn2');
heroButtons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.1)';
        button.style.transition = 'transform 0.3s ease';
    });
    
    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
    });
});

// Animate service image
const serviceImg = document.querySelector('.service-img');
serviceImg.addEventListener('mouseover', () => {
    serviceImg.style.transform = 'scale(1.05)';
    serviceImg.style.overflow = 'hidden';
    serviceImg.style.transition = 'transform 0.5s ease';
});

serviceImg.addEventListener('mouseout', () => {
    serviceImg.style.transform = 'scale(1) rotate(0deg)';
});

// Typing animation for hero text
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize all animations
document.addEventListener('DOMContentLoaded', () => {
    initializeAnimations();
    
    // Start hero text typing animation
    const heroText = document.querySelector('.hero-text h1');
    const originalText = heroText.textContent;
    typeWriter(heroText, originalText);
    
    // Add scroll event listeners
    window.addEventListener('scroll', () => {
        animateOnScroll();
        updateActiveSection();
    });
    
    // Trigger initial checks
    animateOnScroll();
    updateActiveSection();
});