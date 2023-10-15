// vi: ft=html
function getTemplate() { return `
<style>
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
    margin-bottom: 8px;
    display: block;
}

.children {
    display: grid;
    grid-template-areas: "card";
    justify-items: center;
    row-gap: 30px;
}

@container root-container (min-width: 720px) {
    .children {
        grid-template-columns: 1fr 1fr;
        row-gap: 20px;
    }
}

@container root-container (min-width: 1280px) {
    .children {
        grid-template-columns: 1fr 1fr 1fr;
        row-gap: 20px;
    }
}
</style>
<section class="root">
    <div class="header">
        <slot class="header" name="header"></slot>
    </div>
    <slot class="children"></slot>
</section>
`}

// <script>
export class Layout extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = getTemplate();
    }
}
// </script>
