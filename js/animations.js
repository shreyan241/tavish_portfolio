class AnimationManager {
    constructor() {
        this.init();
    }

    init() {
        // Add intersection observer for scroll animations
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                    }
                });
            },
            { threshold: 0.1 }
        );

        // Observe all cards and timeline items
        document.querySelectorAll('.card, .timeline-item, .publication-card')
            .forEach(el => observer.observe(el));
    }
}

new AnimationManager(); 