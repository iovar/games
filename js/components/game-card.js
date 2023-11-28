// vi: ft=html
function getTemplate() { return `
<style>
    .root {
        --bright-light: #ffe8d0;
        --ambient-light: #ff9729;
        --stroke-light: #ffbb73;
        --spacing-1: 4px;

        width: 240px;
        min-height: 320px;
        box-sizing: border-box;

        overflow: hidden;
        padding: var(--spacing-1);
        position: relative;
    }

    .title {
        color: var(--bright-light);
        text-shadow: 0 0 var(--spacing-1) var(--ambient-light);
        font-size: xx-large;
    }

    .image {
        overflow: hidden;
    }

    .image ::slotted(img) {
        width: 100%;
        height: auto;
    }

    .description {
        position: absolute;
        bottom: -100%;
        width: 100%;
        height: fit-content;
        max-height: calc(100% - 2*var(--spacing-1));
        box-sizing: border-box;
        overflow: auto;
        padding: var(--spacing-1) var(--spacing-1) 0 var(--spacing-1);
        background: rgba(0, 0, 0, 0.8);
        transition: bottom 0.2s ease-in;
    }

    .root:hover .description,
    .root:focus .description {
        bottom: var(--spacing-1);
    }

    .description-text {
        color: var(--bright-light);
    }

    .link {
        bottom: 0;
        position: sticky;
        background: black;
        padding: var(--spacing-1);
        margin: 0 calc(- var(--spacing-1));
    }

    .link-cta {
        font-size: small;
        color: var(--stroke-light);
        text-shadow: 0 0 var(--spacing-1) var(--ambient-light);
        cursor: pointer;
    }

    .link ::slotted(a) {
        background: var(--bright-light);
    }
</style>
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
`}

// <script>
export class GameCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = getTemplate();
    }

    visitLink() {
        const slot = this.shadowRoot.querySelector('slot[name=link]')
        const link = slot.assignedNodes()[0];
        link.click();
    }
}
// </script>
