// vi: ft=html
// <style>
const getStyles = () => (`
    .root {
        text-align: center;
        container-name: root-container;
        container-type: inline-size;

        &, &::slotted(*) {
            color: var(--col-d);
            background-color: var(--col-c);
        }
    }

    .title {
        font-size: 128px;
        margin: .23em auto;
    }

    .subtitle {
        font-size: 32px;
    }

    @container root-container (min-width: 720px) {
        .header {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .title {
            margin: .23em 20px;
        }
        .subtitle {
            max-width: 200px;
            margin-right: 20px;
        }
    }
`);
// </style>

const getTemplate = () => (`
    <section class="root">
        <header class="header">
            <h1 class="title">
                <slot name="title">Title</slot>
            </h1>
            <h2 class="subtitle">
                <slot name="subtitle">Subtitle</slot>
            </h2>
        </header>
    </section>
`);

// <script>

const styleSheet = new CSSStyleSheet();
styleSheet.replaceSync(getStyles());

export class PageTitle extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.adoptedStyleSheets = [...document.adoptedStyleSheets, styleSheet];
        this.shadowRoot.innerHTML = getTemplate();
    }
}
// </script>
