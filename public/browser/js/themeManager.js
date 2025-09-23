//axiomThemeAuto
//axiomTheme

class ThemeManager {
    constructor() {
        this.themes = {
            dark: {
                name: 'Dark Theme',
                colors: {
                    
                    primary: '#1b1b1b',
                    secondary: '#272727',
                    tertiary: '#2a2a2a',
                    accent: '#6b7280',
                    
                    
                    surface: '#363636',
                    surfaceLight: '#4b4b4b',
                    surfaceDark: '#1f1f1f',
                    
                    
                    textPrimary: '#ffffff',
                    textSecondary: '#d4d4d4',
                    textTertiary: '#a0aec0',
                    textMuted: '#718096',
                    
                    
                    hover: '#3d3d3d',
                    active: '#575757',
                    focus: 'rgba(107, 114, 128, 0.1)',
                    
                    
                    error: '#ef4444',
                    success: '#10b981',
                    warning: '#f59e0b',
                    
                    
                    overlay: 'rgba(255, 255, 255, 0.05)',
                    overlayHover: 'rgba(255, 255, 255, 0.08)',
                    shadow: 'rgba(0, 0, 0, 0.3)',
                    
                    
                    backgroundGradient: 'linear-gradient(135deg, #1b1b1b 0%, #272727 50%, #2a2a2a 100%)',
                    windowBackground: 'rgba(39, 39, 39, 0.9)',
                    
                    
                    userMessage: '#6b7280',
                    aiMessage: '#2a2a2a',
                    inputBackground: '#363636',
                    
                    
                    ytBackground: '#1b1b1b',
                    ytSurface: 'rgba(255, 255, 255, 0.03)',
                    ytHover: 'rgba(255, 255, 255, 0.05)'
                }
            },
            
            midnight: {
                name: 'Midnight Blue',
                colors: {
                    
                    primary: '#0f1419',
                    secondary: '#1a202c',
                    tertiary: '#2d3748',
                    accent: '#4299e1',
                    
                    
                    surface: '#2d3748',
                    surfaceLight: '#4a5568',
                    surfaceDark: '#1a202c',
                    
                    
                    textPrimary: '#e2e8f0',
                    textSecondary: '#cbd5e0',
                    textTertiary: '#a0aec0',
                    textMuted: '#718096',
                    
                    
                    hover: '#4a5568',
                    active: '#5a6c7d',
                    focus: 'rgba(66, 153, 225, 0.15)',
                    
                    
                    error: '#f56565',
                    success: '#48bb78',
                    warning: '#ed8936',
                    
                    
                    overlay: 'rgba(255, 255, 255, 0.08)',
                    overlayHover: 'rgba(255, 255, 255, 0.12)',
                    shadow: 'rgba(0, 0, 0, 0.4)',
                    
                    
                    backgroundGradient: 'linear-gradient(135deg, #0f1419 0%, #1a202c 50%, #2d3748 100%)',
                    windowBackground: 'rgba(26, 32, 44, 0.9)',
                    
                    
                    userMessage: '#4299e1',
                    aiMessage: '#2d3748',
                    inputBackground: '#4a5568',
                    
                    
                    ytBackground: '#0f1419',
                    ytSurface: 'rgba(255, 255, 255, 0.05)',
                    ytHover: 'rgba(255, 255, 255, 0.08)'
                }
            },
            
            forest: {
                name: 'Forest Green',
                colors: {
                    
                    primary: '#0d1b0d',
                    secondary: '#1a2e1a',
                    tertiary: '#2d4a2d',
                    accent: '#48cc6c',
                    
                    
                    surface: '#2d4a2d',
                    surfaceLight: '#3d5a3d',
                    surfaceDark: '#1a2e1a',
                    
                    
                    textPrimary: '#e8f5e8',
                    textSecondary: '#c6e6c6',
                    textTertiary: '#94c794',
                    textMuted: '#6ba86b',
                    
                    
                    hover: '#3d5a3d',
                    active: '#4d6a4d',
                    focus: 'rgba(72, 204, 108, 0.15)',
                    
                    
                    error: '#ff6b6b',
                    success: '#51cf66',
                    warning: '#ffd43b',
                    
                    
                    overlay: 'rgba(255, 255, 255, 0.08)',
                    overlayHover: 'rgba(255, 255, 255, 0.12)',
                    shadow: 'rgba(0, 0, 0, 0.4)',
                    
                    
                    backgroundGradient: 'linear-gradient(135deg, #0d1b0d 0%, #1a2e1a 50%, #2d4a2d 100%)',
                    windowBackground: 'rgba(26, 46, 26, 0.9)',
                    
                    
                    userMessage: '#48cc6c',
                    aiMessage: '#2d4a2d',
                    inputBackground: '#3d5a3d',
                    
                    
                    ytBackground: '#0d1b0d',
                    ytSurface: 'rgba(255, 255, 255, 0.05)',
                    ytHover: 'rgba(255, 255, 255, 0.08)'
                }
            },
            
            sunset: {
                name: 'Sunset Orange',
                colors: {
                    
                    primary: '#1a0f0a',
                    secondary: '#2d1b10',
                    tertiary: '#4a2c17',
                    accent: '#ff8c42',
                    
                    
                    surface: '#4a2c17',
                    surfaceLight: '#5a3c27',
                    surfaceDark: '#2d1b10',
                    
                    
                    textPrimary: '#fff5f0',
                    textSecondary: '#ffe6d6',
                    textTertiary: '#ffc7a6',
                    textMuted: '#d69e2e',
                    
                    
                    hover: '#5a3c27',
                    active: '#6a4c37',
                    focus: 'rgba(255, 140, 66, 0.15)',
                    
                    
                    error: '#ff6b6b',
                    success: '#51cf66',
                    warning: '#ffd43b',
                    
                    
                    overlay: 'rgba(255, 255, 255, 0.08)',
                    overlayHover: 'rgba(255, 255, 255, 0.12)',
                    shadow: 'rgba(0, 0, 0, 0.4)',
                    
                    
                    backgroundGradient: 'linear-gradient(135deg, #1a0f0a 0%, #2d1b10 50%, #4a2c17 100%)',
                    windowBackground: 'rgba(45, 27, 16, 0.9)',
                    
                    
                    userMessage: '#ff8c42',
                    aiMessage: '#4a2c17',
                    inputBackground: '#5a3c27',
                    
                    
                    ytBackground: '#1a0f0a',
                    ytSurface: 'rgba(255, 255, 255, 0.05)',
                    ytHover: 'rgba(255, 255, 255, 0.08)'
                }
            },
            
            neon: {
                name: 'Neon Theme',
                colors: {

                    primary: '#0a0a0f',
                    secondary: '#1a1a2e',
                    tertiary: '#16213e',
                    accent: '#00d4ff',


                    surface: '#0f3460',
                    surfaceLight: '#533483',
                    surfaceDark: '#0e1428',


                    textPrimary: '#ffffff',
                    textSecondary: '#00ffff',
                    textTertiary: '#ff00ff',
                    textMuted: '#666699',


                    hover: '#1a1a3a',
                    active: '#2a2a4a',
                    focus: 'rgba(0, 212, 255, 0.2)',


                    error: '#ff0080',
                    success: '#00ff80',
                    warning: '#ffff00',


                    overlay: 'rgba(0, 212, 255, 0.1)',
                    overlayHover: 'rgba(0, 212, 255, 0.2)',
                    shadow: 'rgba(0, 0, 0, 0.5)',


                    backgroundGradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    windowBackground: 'rgba(26, 26, 46, 0.9)',


                    userMessage: '#ff00ff',
                    aiMessage: '#0f3460',
                    inputBackground: '#1a1a2e',


                    ytBackground: '#0a0a0f',
                    ytSurface: 'rgba(0, 212, 255, 0.1)',
                    ytHover: 'rgba(0, 212, 255, 0.2)'
                }
            },

            pipipipi: {
                name: 'Pipipipi',
                colors: {

                    primary: '#fbd3d9',
                    secondary: '#f5c2c7',
                    tertiary: '#efc4c8',
                    accent: '#d16ba5',


                    surface: '#f0b5ba',
                    surfaceLight: '#f5c2c7',
                    surfaceDark: '#e6a7ad',


                    textPrimary: '#2d1b1a',
                    textSecondary: '#5c4b4a',
                    textTertiary: '#8b7a79',
                    textMuted: '#a08e8d',


                    hover: '#e6a7ad',
                    active: '#d9939b',
                    focus: 'rgba(209, 107, 165, 0.2)',


                    error: '#e53e3e',
                    success: '#38a169',
                    warning: '#d69e2e',


                    overlay: 'rgba(0, 0, 0, 0.05)',
                    overlayHover: 'rgba(0, 0, 0, 0.08)',
                    shadow: 'rgba(0, 0, 0, 0.1)',


                    backgroundGradient: 'linear-gradient(135deg, #fbd3d9 0%, #f5c2c7 50%, #efc4c8 100%)',
                    windowBackground: 'rgba(245, 194, 199, 0.9)',


                    userMessage: '#d16ba5',
                    aiMessage: '#efc4c8',
                    inputBackground: '#f0b5ba',


                    ytBackground: '#fbd3d9',
                    ytSurface: 'rgba(0, 0, 0, 0.05)',
                    ytHover: 'rgba(0, 0, 0, 0.08)'
                }
            },

            fishstick: {
                name: 'FishStick',
                colors: {

                    primary: '#3276C0',
                    secondary: '#8DDAEC',
                    tertiary: '#A8E4F2',
                    accent: '#3276C0',


                    surface: '#8DDAEC',
                    surfaceLight: '#B8E8F5',
                    surfaceDark: '#6BC8E0',


                    textPrimary: '#1a365d',
                    textSecondary: '#2d3748',
                    textTertiary: '#4a5568',
                    textMuted: '#718096',


                    hover: '#B8E8F5',
                    active: '#9BD8F0',
                    focus: 'rgba(50, 118, 192, 0.2)',


                    error: '#e53e3e',
                    success: '#38a169',
                    warning: '#d69e2e',


                    overlay: 'rgba(255, 255, 255, 0.15)',
                    overlayHover: 'rgba(255, 255, 255, 0.25)',
                    shadow: 'rgba(50, 118, 192, 0.2)',


                    backgroundGradient: 'linear-gradient(135deg, #3276C0 0%, #8DDAEC 50%, #A8E4F2 100%)',
                    windowBackground: 'rgba(141, 218, 236, 0.9)',


                    userMessage: '#3276C0',
                    aiMessage: '#A8E4F2',
                    inputBackground: '#8DDAEC',


                    ytBackground: '#3276C0',
                    ytSurface: 'rgba(255, 255, 255, 0.2)',
                    ytHover: 'rgba(255, 255, 255, 0.3)'
                }
            },
                        lumi: {
                /* light */
                name: 'klumi 1.5',
                colors: {
                    primary: '#ffffff',
                    secondary: '#f7f7f7',
                    tertiary: '#dedede',
                    accent: '#ffffff',
                    surface: '#ffffff',
                    surfaceLight: '#f7f7f7',
                    surfaceDark: '#dedede',
                    textPrimary: '#000000',
                    textSecondary: '#999999',
                    textTertiary: '#666666',
                    textMuted: '#999999',
                    hover: '#dedede',
                    active: '#cccccc',
                    focus: 'rgba(0, 0, 0, 0.1)',
                    error: '#ff0000',
                    success: '#00ff00',
                    warning: '#ffff00',
                    overlay: 'rgba(255, 255, 255, 0.05)'
                }
            }
        };
        
        this.currentTheme = localStorage.getItem('axiomTheme') || 'dark';
        this.observers = [];
        this.init();
    }
    
    init() {
        
        this.updateCSSVariables();
        
        
        window.addEventListener('storage', (e) => {
            if (e.key === 'axiomTheme') {
                this.currentTheme = e.newValue || 'dark';
                this.updateCSSVariables();
                this.notifyObservers();
            }
        });
        
        
        if (window.matchMedia) {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            mediaQuery.addListener(() => {
                if (localStorage.getItem('axiomThemeAuto') === 'true') {
                    this.setTheme(mediaQuery.matches ? 'dark' : 'midnight');
                }
            });
        }
    }
    
    updateCSSVariables() {
        const theme = this.themes[this.currentTheme];
        if (!theme) return;
        
        const root = document.documentElement;
        
        
        Object.entries(theme.colors).forEach(([key, value]) => {
            root.style.setProperty(`--theme-${key}`, value);
        });
        
        
        this.applyPageSpecificStyles();
    }
    
    applyPageSpecificStyles() {
        const theme = this.themes[this.currentTheme];
        const pageName = this.detectPageType();
        
        
        const existingStyle = document.getElementById('axiom-theme-style');
        if (existingStyle) {
            existingStyle.remove();
        }
        
        
        const style = document.createElement('style');
        style.id = 'axiom-theme-style';
        
        let css = '';
        
        switch (pageName) {
            case 'browser':
                css = this.getBrowserThemeCSS(theme);
                break;
            case 'start':
                css = this.getStartThemeCSS(theme);
                break;
            case 'games':
                css = this.getGamesThemeCSS(theme);
                break;
            case 'ai':
                css = this.getAIThemeCSS(theme);
                break;
            case 'yt':
                css = this.getYTThemeCSS(theme);
                break;
            case 'settings':
                css = this.getSettingsThemeCSS(theme);
                break;
            case 'main':
                css = this.getMainThemeCSS(theme);
                break;
            case 'load':
                css = this.getLoadThemeCSS(theme);
                break;
        }
        
        style.textContent = css;
        document.head.appendChild(style);
    }
    
    getBrowserThemeCSS(theme) {
        const logoInversion = 'invert(1)'; 
        
        return `
            body {
                background-color: ${theme.colors.primary} !important;
                color: ${theme.colors.textPrimary} !important;
            }
            
            
            #sidebar img {
                filter: ${logoInversion} !important;
            }
            
            .tab {
                color: ${theme.colors.textPrimary} !important;
                border: 1px solid transparent !important;
                transition: all 0.2s ease !important;
            }
            
            .tab:hover, #add-tab:hover {
                background-color: ${theme.colors.hover} !important;
                border-color: ${theme.colors.surface} !important;
            }
            
            .tab.active {
                background-color: ${theme.colors.active} !important;
                border-color: ${theme.colors.accent} !important;
            }
            
            .tab.drag-over {
                background-color: ${theme.colors.focus} !important;
            }
            
            #add-tab {
                background-color: ${theme.colors.surfaceLight} !important;
                border: 1px solid ${theme.colors.surface} !important;
            }
            
            .exit {
                color: ${theme.colors.textSecondary} !important;
            }
            
            .exit:hover {
                background-color: ${theme.colors.overlay} !important;
                color: ${theme.colors.error} !important;
            }
            
            #url-input {
                background-color: ${theme.colors.surface} !important;
                color: ${theme.colors.textPrimary} !important;
                border: 1px solid ${theme.colors.surfaceLight} !important;
            }
            
            #url-input:focus {
                border-color: ${theme.colors.accent} !important;
                outline: none !important;
                box-shadow: 0 0 0 2px ${theme.colors.focus} !important;
            }
            
            #url-input::placeholder {
                color: ${theme.colors.textMuted} !important;
            }
            
            .input-expansion {
                background-color: ${theme.colors.surface} !important;
                border: 1px solid ${theme.colors.surfaceLight} !important;
                border-left: none !important;
            }
            
            #separator {
                background-color: ${theme.colors.surfaceLight} !important;
            }
            
            #url-bar button {
                color: ${theme.colors.textPrimary} !important;
                border: 1px solid transparent !important;
                transition: all 0.2s ease !important;
            }
            
            #url-bar button:hover {
                background-color: ${theme.colors.overlay} !important;
                border-color: ${theme.colors.surface} !important;
            }
            
            #sidebar button {
                color: ${theme.colors.textPrimary} !important;
                border: 1px solid transparent !important;
            }
            
            #sidebar button:hover {
                background-color: ${theme.colors.surfaceDark} !important;
                border-color: ${theme.colors.surface} !important;
            }

            /* Material Symbols theming */
            .material-symbols-outlined {
                color: ${theme.colors.textPrimary} !important;
                transition: color 0.2s ease !important;
            }

            .exit:hover .material-symbols-outlined {
                color: ${theme.colors.error} !important;
            }

            .status-icon .material-symbols-outlined {
                color: ${theme.colors.textSecondary} !important;
            }

            .section-title .material-symbols-outlined {
                color: ${theme.colors.textSecondary} !important;
            }
            
            #sidemenu {
                box-shadow: 0 4px 12px ${theme.colors.shadow} !important;
                background-color: ${theme.colors.secondary} !important;
            }
            
            #sidemenu iframe {
                background-color: ${theme.colors.primary} !important;
            }
            
            .extensions {
                background-color: ${theme.colors.active} !important;
            }
            
            .window {
                background: ${theme.colors.windowBackground} !important;
                border: 1px solid ${theme.colors.surface} !important;
            }
            
            .close {
                background-color: ${theme.colors.error} !important;
            }
            
            .title-bar span {
                filter: invert(0) !important;
            }
        `;
    }
    
    getStartThemeCSS(theme) {
        return `
            body {
                background: ${theme.colors.backgroundGradient} !important;
                color: ${theme.colors.textPrimary} !important;
            }
            
            #url-input {
                background-color: ${theme.colors.surface} !important;
                color: ${theme.colors.textPrimary} !important;
            }
            
            #url-input::placeholder {
                color: ${theme.colors.textMuted} !important;
            }
            
            .reccomendation {
                background-color: ${theme.colors.surface} !important;
                color: ${theme.colors.textPrimary} !important;
            }
            
            .reccomendation:hover {
                background-color: ${theme.colors.hover} !important;
            }
            
            .star {
                background: ${theme.colors.textSecondary} !important;
            }
            
            .star:nth-child(3n) {
                background: ${theme.colors.accent} !important;
            }
            
            .star:nth-child(6n) {
                background: ${theme.colors.error} !important;
            }
            
            .star:nth-child(7n) {
                background: ${theme.colors.success} !important;
            }
        `;
    }
    
    getGamesThemeCSS(theme) {
        return `
            body {
                background-color: ${theme.colors.surfaceDark} !important;
                color: ${theme.colors.textPrimary} !important;
            }
            
            .card {
                background-color: ${theme.colors.tertiary} !important;
                box-shadow: 0 2px 4px ${theme.colors.shadow} !important;
                border: 1px solid ${theme.colors.surface} !important;
                transition: all 0.2s ease !important;
            }
            
            .card:hover {
                background-color: ${theme.colors.surface} !important;
                box-shadow: 0 10px 20px ${theme.colors.shadow} !important;
                transform: scale(1.05) !important;
            }
            
            .card h2 {
                color: ${theme.colors.textPrimary} !important;
                font-weight: 600 !important;
            }
            
            .card img {
                border-radius: 8px !important;
                filter: brightness(0.9) !important;
            }
            
            #search-input {
                background-color: ${theme.colors.tertiary} !important;
                color: ${theme.colors.textPrimary} !important;
                box-shadow: 0 2px 4px ${theme.colors.shadow} !important;
                border: 1px solid ${theme.colors.surface} !important;
            }
            
            #search-input:focus {
                border-color: ${theme.colors.accent} !important;
                box-shadow: 0 0 0 2px ${theme.colors.focus} !important;
            }
            
            #search-input::placeholder {
                color: ${theme.colors.textMuted} !important;
            }
            
            #category-select {
                background-color: ${theme.colors.tertiary} !important;
                color: ${theme.colors.textPrimary} !important;
                box-shadow: 0 2px 4px ${theme.colors.shadow} !important;
                border: 1px solid ${theme.colors.surface} !important;
            }
            
            #category-select:focus {
                border-color: ${theme.colors.accent} !important;
                outline: none !important;
            }
            
            #category-select option {
                background-color: ${theme.colors.tertiary} !important;
                color: ${theme.colors.textPrimary} !important;
            }
            
            #selector {
                background-color: ${theme.colors.tertiary} !important;
                box-shadow: 0 2px 4px ${theme.colors.shadow} !important;
                border: 1px solid ${theme.colors.surface} !important;
            }
            
            #selector button {
                background-color: ${theme.colors.tertiary} !important;
                color: ${theme.colors.textPrimary} !important;
                box-shadow: 0 2px 4px ${theme.colors.shadow} !important;
                border: 1px solid ${theme.colors.surface} !important;
                transition: all 0.2s ease !important;
            }
            
            #selector button.active {
                background-color: ${theme.colors.active} !important;
                color: ${theme.colors.textPrimary} !important;
                box-shadow: 0 0 0 2px ${theme.colors.accent} !important;
            }
            
            #selector button:hover {
                background-color: ${theme.colors.hover} !important;
                transform: translateY(-1px) !important;
            }
            
            #controls {
                margin-bottom: 30px !important;
            }
        `;
    }
    
    getAIThemeCSS(theme) {
        return `
            body {
                background-color: ${theme.colors.secondary} !important;
                color: ${theme.colors.textPrimary} !important;
            }
            
            #chat-container {
                background: ${theme.colors.secondary} !important;
                border: 1px solid ${theme.colors.surface} !important;
                border-radius: 8px !important;
            }
            
            #chat-message-user {
                background-color: ${theme.colors.userMessage} !important;
                color: ${theme.colors.textPrimary} !important;
                border: 1px solid ${theme.colors.surface} !important;
                box-shadow: 0 2px 4px ${theme.colors.shadow} !important;
            }
            
            #chat-message-ai {
                background-color: ${theme.colors.aiMessage} !important;
                color: ${theme.colors.textSecondary} !important;
                border: 1px solid ${theme.colors.surface} !important;
                box-shadow: 0 2px 4px ${theme.colors.shadow} !important;
            }
            
            #chat-message-user md-block,
            #chat-message-ai md-block {
                color: inherit !important;
            }
            
            #chat-message-user pre,
            #chat-message-ai pre,
            #chat-message-user code,
            #chat-message-ai code {
                background: rgba(255,255,255,0.1) !important;
                color: inherit !important;
                border-radius: 4px !important;
                padding: 2px 4px !important;
            }
            
            #chat-controls {
                background: ${theme.colors.secondary} !important;
                border-top: 1px solid ${theme.colors.surface} !important;
            }
            
            #chat-controls input {
                background-color: ${theme.colors.inputBackground} !important;
                color: ${theme.colors.textPrimary} !important;
                border: 1px solid ${theme.colors.surface} !important;
                box-shadow: 0 2px 4px ${theme.colors.shadow} !important;
            }
            
            #chat-controls input:focus {
                border-color: ${theme.colors.accent} !important;
                outline: none !important;
                box-shadow: 0 0 0 2px ${theme.colors.focus} !important;
            }
            
            #chat-controls input::placeholder {
                color: ${theme.colors.textMuted} !important;
            }
            
            #chat-container::-webkit-scrollbar {
                width: 6px !important;
            }
            
            #chat-container::-webkit-scrollbar-track {
                background: ${theme.colors.secondary} !important;
            }
            
            #chat-container::-webkit-scrollbar-thumb {
                background: ${theme.colors.surfaceLight} !important;
                border-radius: 3px !important;
            }
            
            #chat-container::-webkit-scrollbar-thumb:hover {
                background: ${theme.colors.active} !important;
            }
        `;
    }
    
    getYTThemeCSS(theme) {
        return `
            body {
                background: ${theme.colors.ytBackground} !important;
                color: ${theme.colors.textPrimary} !important;
            }
            
            #controls {
                margin-bottom: 30px !important;
            }
            
            #search {
                background: ${theme.colors.ytSurface} !important;
                color: ${theme.colors.textPrimary} !important;
                border: 2px solid ${theme.colors.surface} !important;
                box-shadow: 0 4px 20px ${theme.colors.shadow} !important;
                transition: all 0.3s ease !important;
            }
            
            #search::placeholder {
                color: ${theme.colors.textMuted} !important;
            }
            
            #search:focus {
                background: ${theme.colors.ytHover} !important;
                border-color: ${theme.colors.accent} !important;
                box-shadow: 0 6px 25px ${theme.colors.shadow}, 0 0 0 3px ${theme.colors.focus} !important;
                outline: none !important;
            }
            
            #player {
                background: ${theme.colors.secondary} !important;
                box-shadow: 0 8px 32px ${theme.colors.shadow} !important;
                border: 1px solid ${theme.colors.surface} !important;
            }
            
            #results {
                background: transparent !important;
            }
            
            .video-item {
                background: ${theme.colors.ytSurface} !important;
                border: 1px solid ${theme.colors.surface} !important;
                transition: all 0.3s ease !important;
            }
            
            .video-item:hover {
                background: ${theme.colors.ytHover} !important;
                box-shadow: 0 8px 25px ${theme.colors.shadow} !important;
                border-color: ${theme.colors.accent} !important;
            }
            
            .video-thumbnail {
                border: 1px solid ${theme.colors.surface} !important;
                transition: all 0.3s ease !important;
            }
            
            .video-item:hover .video-thumbnail {
                border-color: ${theme.colors.accent} !important;
            }
            
            .video-title {
                color: ${theme.colors.textPrimary} !important;
                font-weight: 600 !important;
            }
            
            .video-channel {
                color: ${theme.colors.textSecondary} !important;
                font-weight: 500 !important;
            }
            
            .video-duration {
                color: ${theme.colors.textMuted} !important;
                background: ${theme.colors.surface} !important;
                border: 1px solid ${theme.colors.surfaceLight} !important;
            }
            
            .loading {
                color: ${theme.colors.textSecondary} !important;
                background: ${theme.colors.ytSurface} !important;
                padding: 20px !important;
                border-radius: 12px !important;
                border: 1px solid ${theme.colors.surface} !important;
            }
            
            #results::-webkit-scrollbar {
                width: 8px !important;
            }
            
            #results::-webkit-scrollbar-track {
                background: ${theme.colors.ytBackground} !important;
            }
            
            #results::-webkit-scrollbar-thumb {
                background: ${theme.colors.surface} !important;
                border-radius: 4px !important;
            }
            
            #results::-webkit-scrollbar-thumb:hover {
                background: ${theme.colors.surfaceLight} !important;
            }
        `;
    }
    
    getSettingsThemeCSS(theme) {
        return `
            body {
                background-color: ${theme.colors.primary} !important;
                color: ${theme.colors.textPrimary} !important;
            }

            /* Global Material Symbols theming */
            .material-symbols-outlined {
                color: ${theme.colors.textPrimary} !important;
            }

            .status-icon .material-symbols-outlined {
                color: ${theme.colors.textSecondary} !important;
            }
            
            .header {
                background-color: ${theme.colors.secondary} !important;
                box-shadow: 0 2px 8px ${theme.colors.shadow} !important;
                border-bottom: 1px solid ${theme.colors.surface} !important;
            }
            
            .back-button {
                color: ${theme.colors.textPrimary} !important;
            }
            
            .back-button:hover {
                background-color: ${theme.colors.overlay} !important;
            }
            
            .header h1 {
                color: ${theme.colors.textPrimary} !important;
            }
            
            .settings-section {
                background-color: ${theme.colors.secondary} !important;
                box-shadow: 0 4px 12px ${theme.colors.shadow} !important;
                border: 1px solid ${theme.colors.surface} !important;
            }
            
            .section-title {
                color: ${theme.colors.textPrimary} !important;
            }
            
            .section-title .material-symbols-outlined {
                color: ${theme.colors.accent} !important;
            }
            
            .setting-item {
                border-bottom: 1px solid ${theme.colors.surface} !important;
            }
            
            .setting-label {
                color: ${theme.colors.textPrimary} !important;
            }
            
            .setting-description {
                color: ${theme.colors.textSecondary} !important;
            }
            
            .slider {
                background-color: ${theme.colors.surfaceLight} !important;
            }
            
            input:checked + .slider {
                background-color: ${theme.colors.accent} !important;
            }
            
            .dropdown-select {
                background-color: ${theme.colors.surface} !important;
                border: 1px solid ${theme.colors.surfaceLight} !important;
                color: ${theme.colors.textPrimary} !important;
            }
            
            .dropdown-select:hover,
            .dropdown-select:focus {
                border-color: ${theme.colors.accent} !important;
            }
            
            .dropdown-select option {
                background-color: ${theme.colors.surface} !important;
                color: ${theme.colors.textPrimary} !important;
            }
            
            .input-field {
                background-color: ${theme.colors.surface} !important;
                border: 1px solid ${theme.colors.surfaceLight} !important;
                color: ${theme.colors.textPrimary} !important;
            }
            
            .input-field:focus {
                border-color: ${theme.colors.accent} !important;
                box-shadow: 0 0 0 2px ${theme.colors.focus} !important;
            }
            
            .input-field::placeholder {
                color: ${theme.colors.textMuted} !important;
            }
            
            .button {
                background-color: ${theme.colors.accent} !important;
                color: ${theme.colors.textPrimary} !important;
            }
            
            .button:hover {
                background-color: ${theme.colors.accent} !important;
                filter: brightness(1.1) !important;
            }
            
            .button.secondary {
                background-color: ${theme.colors.surfaceLight} !important;
                color: ${theme.colors.textPrimary} !important;
            }
            
            .button.secondary:hover {
                background-color: ${theme.colors.active} !important;
            }
            
            .version-info {
                color: ${theme.colors.textMuted} !important;
                border-top: 1px solid ${theme.colors.surface} !important;
            }

            /* Material Symbols theming for settings */
            .material-symbols-outlined {
                color: ${theme.colors.textPrimary} !important;
            }

            .section-title .material-symbols-outlined {
                color: ${theme.colors.accent} !important;
            }
            
            
            .theme-picker {
                background: transparent !important;
                box-shadow: none !important;
                padding: 0 !important;
            }
            
            .theme-picker-header h3 {
                color: ${theme.colors.textPrimary} !important;
            }
            
            .theme-option {
                background: ${theme.colors.surface} !important;
                border: 1px solid ${theme.colors.surfaceLight} !important;
            }
            
            .theme-option:hover {
                background: ${theme.colors.hover} !important;
                border-color: ${theme.colors.accent} !important;
            }
            
            .theme-option.active {
                background: ${theme.colors.active} !important;
                border-color: ${theme.colors.accent} !important;
                box-shadow: 0 0 0 2px ${theme.colors.focus} !important;
            }
            
            .theme-option span {
                color: ${theme.colors.textPrimary} !important;
            }
            
            .theme-picker-auto {
                border-top: 1px solid ${theme.colors.surface} !important;
            }
            
            .theme-picker-auto label {
                color: ${theme.colors.textPrimary} !important;
            }
        `;
    }
    
    getMainThemeCSS(theme) {
        return `
            body {
                background-color: ${theme.colors.primary} !important;
                color: ${theme.colors.textPrimary} !important;
            }
            body {
                color: ${theme.colors.textPrimary} !important;
            }
            
            #top-bar { 
                background: ${theme.colors.secondary}f0 !important;
                border-bottom-color: ${theme.colors.surface} !important;
                color: ${theme.colors.textPrimary} !important;
                backdrop-filter: blur(20px) !important;
            }
            
            .menu-item { 
                color: ${theme.colors.textPrimary} !important;
                transition: background-color 0.15s ease !important;
            }
            
            .menu-item:hover { 
                background-color: ${theme.colors.overlay} !important;
            }
            
            .status-icon { 
                color: ${theme.colors.textPrimary} !important;
                transition: background-color 0.15s ease !important;
            }
            
            .status-icon:hover { 
                background-color: ${theme.colors.overlay} !important;
            }
            
            #time-display { 
                color: ${theme.colors.textPrimary} !important;
                font-weight: 500 !important;
            }
            
            #toolbar { 
                background: ${theme.colors.secondary}cc !important;
                backdrop-filter: blur(20px) !important;
                border: 1px solid ${theme.colors.surface} !important;
            }
            
            #toolbar button { 
                color: ${theme.colors.textPrimary} !important;
                transition: all 0.2s ease !important;
            }
            
            #toolbar button:hover {
                background-color: ${theme.colors.overlay} !important;
                transform: scale(1.1) !important;
            }
            
            .window { 
                background: ${theme.colors.secondary}cc !important;
                backdrop-filter: blur(15px) !important;
                border: 1px solid ${theme.colors.surface} !important;
                box-shadow: 0 8px 32px ${theme.colors.shadow} !important;
            }
            
            .title-bar span { 
                color: ${theme.colors.textPrimary} !important; 
                filter: none !important;
                font-weight: 600 !important;
            }
            
            .window-controls {
                opacity: 0.8 !important;
                transition: opacity 0.2s ease !important;
            }
            
            .window:hover .window-controls {
                opacity: 1 !important;
            }
            
            .close {
                background-color: ${theme.colors.error} !important;
                transition: transform 0.2s ease !important;
            }
            
            .close:hover {
                transform: scale(1.1) !important;
                box-shadow: 0 2px 8px ${theme.colors.shadow} !important;
            }
            
            .minimize {
                background-color: ${theme.colors.warning} !important;
                transition: transform 0.2s ease !important;
            }
            
            .minimize:hover {
                transform: scale(1.1) !important;
                box-shadow: 0 2px 8px ${theme.colors.shadow} !important;
            }
            
            .maximize {
                background-color: ${theme.colors.success} !important;
                transition: transform 0.2s ease !important;
            }
            
            .maximize:hover {
                transform: scale(1.1) !important;
                box-shadow: 0 2px 8px ${theme.colors.shadow} !important;
            }
            
            .content { 
                background-color: ${theme.colors.primary} !important;
                border-top: 1px solid ${theme.colors.surface} !important;
            }
            
            .content iframe {
                border-radius: 0 0 4px 4px !important;
            }
            
            #desktop {
                /* Don't override desktop background to preserve background image */
            }
            
            /* Battery status colors based on theme */
            #battery.low {
                color: ${theme.colors.error} !important;
            }
            
            #battery.charging {
                color: ${theme.colors.success} !important;
            }
            
            #battery.medium {
                color: ${theme.colors.warning} !important;
            }
        `;
    }
    
    getLoadThemeCSS(theme) {
        return `
            body {
                background-color: ${theme.colors.primary} !important;
                color: ${theme.colors.textPrimary} !important;
            }
            
            #land {
                background: ${theme.colors.overlay} !important;
                border: 1px solid ${theme.colors.surface} !important;
                box-shadow: 0 8px 32px ${theme.colors.shadow} !important;
            }
            
            #land h1 {
                color: ${theme.colors.textPrimary} !important;
            }
            
            #land h2 {
                color: ${theme.colors.textSecondary} !important;
            }
            
            .hero-feature {
                color: ${theme.colors.accent} !important;
            }
            
            .loader {
                border: 4px solid ${theme.colors.surface} !important;
                border-top: 4px solid ${theme.colors.accent} !important;
            }
            
            .progress-container {
                background: ${theme.colors.surface} !important;
            }
            
            .progress-bar {
                background: ${theme.colors.accent} !important;
            }
        `;
    }
    
    detectPageType() {
        const path = window.location.pathname;
        const filename = path.split('/').pop();
        
        if (filename.includes('browser.html') || path.includes('/browser/')) {
            return 'browser';
        } else if (filename.includes('start.html')) {
            return 'start';
        } else if (filename.includes('games.html')) {
            return 'games';
        } else if (filename.includes('ai.html')) {
            return 'ai';
        } else if (filename.includes('yt.html')) {
            return 'yt';
        } else if (filename.includes('settings.html')) {
            return 'settings';
        } else if (filename.includes('load.html')) {
            return 'load';
        } else if (filename.includes('main.html') || path === '/' || filename === '') {
            return 'main';
        }
        
        return 'browser'; 
    }
    
    setTheme(themeName) {
        if (!this.themes[themeName]) {
            console.warn(`Theme "${themeName}" does not exist`);
            return false;
        }
        
        this.currentTheme = themeName;
        localStorage.setItem('axiomTheme', themeName);
        this.updateCSSVariables();
        this.notifyObservers();
        
        return true;
    }
    
    getTheme() {
        return this.currentTheme;
    }
    
    getThemes() {
        return Object.keys(this.themes);
    }
    
    getThemeInfo(themeName = null) {
        const theme = themeName || this.currentTheme;
        return this.themes[theme] || null;
    }
    
    subscribe(callback) {
        this.observers.push(callback);
    }
    
    unsubscribe(callback) {
        const index = this.observers.indexOf(callback);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    }
    
    notifyObservers() {
        this.observers.forEach(callback => {
            try {
                callback(this.currentTheme, this.themes[this.currentTheme]);
            } catch (error) {
                console.error('Theme observer error:', error);
            }
        });
    }
    
    enableAutoTheme() {
        localStorage.setItem('axiomThemeAuto', 'true');
        if (window.matchMedia) {
            const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            this.setTheme(isDark ? 'dark' : 'midnight');
        }
    }
    
    disableAutoTheme() {
        localStorage.removeItem('axiomThemeAuto');
    }
    
    isAutoThemeEnabled() {
        return localStorage.getItem('axiomThemeAuto') === 'true';
    }
    
    createThemePicker(container) {
        const picker = document.createElement('div');
        picker.className = 'theme-picker';
        picker.innerHTML = `
            <div class="theme-picker-header">
                <h3>Choose Theme</h3>
            </div>
            <div class="theme-picker-options">
                ${this.getThemes().map(theme => `
                    <div class="theme-option ${theme === this.currentTheme ? 'active' : ''}" 
                         data-theme="${theme}">
                        <div class="theme-preview" style="background: ${this.themes[theme].colors.primary}; border: 2px solid ${this.themes[theme].colors.accent};"></div>
                        <span>${this.themes[theme].name}</span>
                    </div>
                `).join('')}
            </div>
            <div class="theme-picker-auto">
                <label>
                    <input type="checkbox" ${this.isAutoThemeEnabled() ? 'checked' : ''}> 
                    Auto (follow system)
                </label>
            </div>
        `;
        
        if (!document.getElementById('theme-picker-styles')) {
            const styles = document.createElement('style');
            styles.id = 'theme-picker-styles';
            styles.textContent = `
                .theme-picker {
                    background: var(--theme-tertiary, #2a2a2a);
                    border-radius: 8px;
                    padding: 16px;
                    color: var(--theme-textPrimary, #ffffff);
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                    box-shadow: 0 4px 12px var(--theme-shadow, rgba(0,0,0,0.3));
                }
                
                .theme-picker-header h3 {
                    margin: 0 0 16px 0;
                    font-size: 16px;
                    font-weight: 600;
                }
                
                .theme-picker-options {
                    display: flex;
                    gap: 12px;
                    margin-bottom: 16px;
                    flex-wrap: wrap;
                }
                
                .theme-option {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 8px;
                    cursor: pointer;
                    padding: 8px;
                    border-radius: 6px;
                    transition: background-color 0.2s;
                }
                
                .theme-option:hover {
                    background: var(--theme-hover, #3d3d3d);
                }
                
                .theme-option.active {
                    background: var(--theme-active, #575757);
                }
                
                .theme-preview {
                    width: 32px;
                    height: 32px;
                    border-radius: 50%;
                    border: 2px solid;
                }
                
                .theme-option span {
                    font-size: 12px;
                    text-align: center;
                }
                
                .theme-picker-auto {
                    padding-top: 16px;
                    border-top: 1px solid var(--theme-surface, #363636);
                }
                
                .theme-picker-auto label {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    cursor: pointer;
                    font-size: 14px;
                }
            `;
            document.head.appendChild(styles);
        }
        
        picker.addEventListener('click', (e) => {
            const themeOption = e.target.closest('.theme-option');
            if (themeOption) {
                const theme = themeOption.dataset.theme;
                this.setTheme(theme);
                
                picker.querySelectorAll('.theme-option').forEach(opt => opt.classList.remove('active'));
                themeOption.classList.add('active');
            }
        });
        
        const autoCheckbox = picker.querySelector('input[type="checkbox"]');
        autoCheckbox.addEventListener('change', (e) => {
            if (e.target.checked) {
                this.enableAutoTheme();
            } else {
                this.disableAutoTheme();
            }
        });
        
        if (container) {
            container.appendChild(picker);
        }
        
        return picker;
    }
}

window.themeManager = new ThemeManager();
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ThemeManager;
}
window.themeManager = new ThemeManager();