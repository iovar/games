// vi: ft=html
// <style>
const getStyles = () => (`
    .root {
        position: relative;
        container-name: root-container;
        container-type: inline-size;
    }

    .header {
        position: sticky;
        top: 0;
        width: 100%;
        z-index: 1;
        background:  black;
    }

    .header ::slotted(page-title-x) {
        display: block;
    }

    .children {
        display: grid;
        grid-template-areas: "card";
        justify-items: center;
        align-items: center;
        padding-bottom: 20px;
    }

    @container root-container (min-width: 720px) {
        .children {
            grid-template-columns: 1fr 1fr;
        }
    }

    @container root-container (min-width: 1280px) {
        .children {
            grid-template-columns: 1fr 1fr 1fr;
        }
    }
`);
// </style>

const getTemplate = () => (`
    <section class="root">
        <div class="header">
            <slot class="header" name="header"></slot>
        </div>
        <slot class="children"></slot>
    </section>
`);

// <script>
const styleSheet = new CSSStyleSheet();
styleSheet.replaceSync(getStyles());

export class Layout extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.adoptedStyleSheets = [...document.adoptedStyleSheets, styleSheet ];
        this.shadowRoot.innerHTML = getTemplate();
    }
}
// </script>
