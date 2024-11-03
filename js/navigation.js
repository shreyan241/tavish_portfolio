class TabNavigator {
    constructor() {
        this.tabs = document.querySelectorAll('.tab-btn');
        this.sections = document.querySelectorAll('.section');
        
        this.init();
    }

    init() {
        this.tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const target = tab.dataset.tab;
                this.switchTab(target);
            });
        });

        // Handle URL hash changes
        window.addEventListener('hashchange', this.handleHashChange.bind(this));
        this.handleHashChange();
    }

    switchTab(targetId) {
        // Update tabs
        this.tabs.forEach(tab => {
            tab.classList.toggle('active', tab.dataset.tab === targetId);
        });

        // Update sections
        this.sections.forEach(section => {
            section.classList.toggle('active', section.id === targetId);
        });

        // Update URL hash
        window.location.hash = targetId;
    }

    handleHashChange() {
        const hash = window.location.hash.slice(1) || 'about';
        this.switchTab(hash);
    }
}

new TabNavigator(); 