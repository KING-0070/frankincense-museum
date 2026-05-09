// تغيير اللغة (مميزة إضافية)
function changeLanguage(lang) {
    const toggles = document.querySelectorAll('.language-toggle a');
    toggles.forEach(t => t.classList.remove('active'));
    event.target.classList.add('active');
    
    // يمكن إضافة ترجمة كاملة لاحقاً
    alert(`تم تغيير اللغة إلى ${lang === 'ar' ? 'العربية' : 'الإنجليزية'}`);
}

// معالجة النموذج
function submitForm(event) {
    event.preventDefault();
    alert('شكراً لك! سنتواصل معك قريباً.');
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
document.querySelectorAll('.exhibit-card, .visit-card').forEach(card => {
    observer.observe(card);
});
