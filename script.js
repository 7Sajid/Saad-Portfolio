document.addEventListener('DOMContentLoaded', () => {
    
    // Header Scroll Shadow Event Handler
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Light/Dark Theme Switcher Logic
    const themeSwitchBtn = document.getElementById('theme-switch');
    const htmlElement = document.documentElement;
    
    const storedTheme = localStorage.getItem('theme') || 'light';
    htmlElement.setAttribute('data-theme', storedTheme);
    updateThemeIcon(storedTheme);

    themeSwitchBtn.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });

    function updateThemeIcon(theme) {
        const icon = themeSwitchBtn.querySelector('i');
        if (theme === 'dark') {
            icon.className = 'fa-solid fa-sun';
        } else {
            icon.className = 'fa-solid fa-moon';
        }
    }

    // Material Ripple Button Click Animation
    const rippleButtons = document.querySelectorAll('.ripple-btn');
    rippleButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    });

    // Mobile Navigation Draw Menu Trigger
    const mobileMenu = document.getElementById('mobile-menu');
    const nav = document.querySelector('nav');
    mobileMenu.addEventListener('click', () => {
        nav.classList.toggle('active');
        const icon = mobileMenu.querySelector('i');
        icon.className = nav.classList.contains('active') ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
    });
});

function handleImageFallback() {
    const fallbackPortraitSvg = `data:image/svg+xml;utf8,<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="95" fill="%230e7490"/><path d="M100,40 A30,30 0 1,0 100,100 A30,30 0 1,0 100,40 Z" fill="%23ffffff"/><path d="M40,170 C40,130 70,120 100,120 C130,120 160,130 160,170 Z" fill="%23ffffff"/></svg>`;
    const imgElement = document.getElementById('profile-img');
    if (imgElement) {
        imgElement.src = fallbackPortraitSvg;
    }
}