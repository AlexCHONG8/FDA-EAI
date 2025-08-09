// Language toggle functionality
function toggleLanguage(lang) {
    const enElements = document.querySelectorAll('.en-content');
    const zhElements = document.querySelectorAll('.zh-content');
    const enBtn = document.getElementById('en-btn');
    const zhBtn = document.getElementById('zh-btn');
    
    if (lang === 'en') {
        enElements.forEach(el => el.style.display = 'block');
        zhElements.forEach(el => el.style.display = 'none');
        enBtn.classList.add('active');
        zhBtn.classList.remove('active');
        document.documentElement.lang = 'en';
    } else {
        enElements.forEach(el => el.style.display = 'none');
        zhElements.forEach(el => el.style.display = 'block');
        zhBtn.classList.add('active');
        enBtn.classList.remove('active');
        document.documentElement.lang = 'zh';
    }
    
    // Save preference to localStorage
    localStorage.setItem('preferredLanguage', lang);
}

// Check for saved language preference on page load
document.addEventListener('DOMContentLoaded', function() {
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang) {
        toggleLanguage(savedLang);
    } else {
        // Default to English
        toggleLanguage('en');
    }
});