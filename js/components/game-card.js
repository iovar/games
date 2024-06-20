// vi: ft=html

// <style>
const getStyles = () => (`
    :host {
        display: block;
        border: 4px solid var(--col-d);
    }
    .root {
        width: 100%;
        min-height: 320px;

        overflow: hidden;
        position: relative;
    }

    .title {
        font-size: 24px;
        border-bottom: 4px solid var(--col-d);
        text-align: center;
        color: var(--col-d);
        background-color: var(--col-a);
        margin: 0;
        line-height: 2em;
    }

    .image {
        overflow: hidden;
        text-align: center;
    }

    .image ::slotted(img) {
        max-width: 100%;
        height: auto;
        max-height: 200px;
    }

    .description {
        position: absolute;
        bottom: -100%;
        width: 100%;
        height: fit-content;
        max-height: calc(100% - 2*var(--spacing-1));
        overflow: auto;
        background: var(--col-c);
        transition: bottom 0.2s ease-in;
        border: 4px solid var(--col-d);
    }

    .root:hover .description,
    .root:focus .description {
        bottom: 0;
    }

    .description-text {
        padding: 16px;
    }

    .link {
        bottom: 0;
        position: sticky;
        padding: 16px;
        margin: 0 calc(- var(--spacing-1));
        text-align: center;
        background: var(--col-c);
    }

    .link-cta {
        color: var(--col-d);
        cursor: pointer;
        background: var(--col-a);
        border: 2px solid var(--col-d);
        line-height: 2rem;
        padding: 16px;
    }

    .link ::slotted(a) {
        background: var(--col-d);
        position: absolute;
        right: 0;
        bottom: 0;
    }
`);
// </style>

const getTemplate = () => (`
    <section tabindex=0  class="root">
        <h3 class="title">
            <slot name="title">Title</slot>
        </h3>
        <p class="image">
            <slot name="image">image</slot>
        </p>
        <section class="description">
            <p class="description-text">
                <slot name="description">Description</slot>
            </p>

            <p class="link">
                <span class="link-cta" aria-role="link" onclick="this.getRootNode().host.visitLink()">
                    Click here to check it out
                </span>
                <slot name="link">Link</slot>
            </p>
        </section>
    </section>
`);

// <script>
const styleSheet = new CSSStyleSheet()
styleSheet.replaceSync(getStyles());

export class GameCard extends HTMLElement {
    #values = {}

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.adoptedStyleSheets = [...document.adoptedStyleSheets, styleSheet];
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = getTemplate();
    }

    visitLink() {
        const slot = this.shadowRoot.querySelector('slot[name=link]')
        const link = slot.assignedNodes()[0];
        link.click();
    }
}
// </script>
