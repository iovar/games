import { GameCard } from './components/game-card.js';
import { Layout } from './components/layout.js';
import { PageTitle } from './components/page-title.js';

const template = document.getElementById('global-styles')
    .content
    .querySelectorAll('style')
    .forEach((node) => {
        const styleSheet = new CSSStyleSheet();
        styleSheet.replaceSync(node.innerText);
        document.adoptedStyleSheets = [...document.adoptedStyleSheets, styleSheet];
    });

customElements.define('game-card-x', GameCard);
customElements.define('page-title-x', PageTitle);
customElements.define('layout-x', Layout);
