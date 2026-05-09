// متغير اللغة الحالية
let currentLanguage = 'ar';

// تغيير اللغة
function changeLanguage(lang) {
    currentLanguage = lang;
    
    // تحديث أزرار اللغات
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // تحديث اتجاه الصفحة
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    
    // تحديث جميع النصوص
    updatePageText(lang);
}

// تحديث نصوص الصفحة
function updatePageText(lang) {
    // تحديث جميع العناصر التي تحتوي على data attributes
    document.querySelectorAll('[data-ar]').forEach(element => {
        const text = element.getAttribute(`data-${lang}`);
        if (text) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = text;
            } else {
                element.textContent = text;
            }
        }
    });
    
    // تحديث التنقل والروابط
    document.querySelectorAll('a[data-ar]').forEach(link => {
        const text = link.getAttribute(`data-${lang}`);
        if (text) {
            link.textContent = text;
        }
    });
}

// معالجة النموذج
function submitForm(event) {
    event.preventDefault();
    
    const messages = {
        ar: 'شكراً لك! سنتواصل معك قريباً.',
        en: 'Thank you! We will contact you soon.',
        de: 'Danke! Wir werden Sie bald kontaktieren.',
        fr: 'Merci! Nous vous contacterons bientôt.'
    };
    
    alert(messages[currentLanguage]);
    event.target.reset();
}

// تأثيرات عند التمرير
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-in forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// مراقبة جميع البطاقات
document.querySelectorAll('.exhibit-card, .visit-card, .gallery-item').forEach(card => {
    observer.observe(card);
});

// التعامل مع اللغة عند التحميل
document.addEventListener('DOMContentLoaded', function() {
    // تعيين اللغة الافتراضية
    if (navigator.language.startsWith('de')) {
        changeLanguage('de');
    } else if (navigator.language.startsWith('fr')) {
        changeLanguage('fr');
    } else if (navigator.language.startsWith('en')) {
        changeLanguage('en');
    }
});
