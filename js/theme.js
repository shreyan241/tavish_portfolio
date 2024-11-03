class ThemeManager {
    constructor() {
        this.themeToggle = document.getElementById('theme-toggle');
        this.body = document.body;
        this.theme = localStorage.getItem('theme') || 'light';
        
        this.init();
    }

    init() {
        // Set initial theme
        this.setTheme(this.theme);
        
        // Add event listener
        this.themeToggle.addEventListener('change', () => {
            this.theme = this.theme === 'light' ? 'dark' : 'light';
            this.setTheme(this.theme);
        });
    }

    setTheme(theme) {
        this.body.className = `${theme}-mode`;
        this.themeToggle.checked = theme === 'dark';
        localStorage.setItem('theme', theme);
    }
}

new ThemeManager(); 