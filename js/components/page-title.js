// vi: ft=html
function getTemplate() { return `
<style>
.root {
    --bright-light: #ffe8d0;
    --stroke-light: #ffbb73;
    --ambient-light: #ff9729;

    color: var(--bright-light);
    -webkit-text-stroke: 2px var(--stroke-light);

    text-align: center;
    container-name: root-container;
    container-type: inline-size;
}

.header {
    border-radius: 8px;
    box-shadow:
        0 0 16px inset var(--ambient-light),
        0 0 2px inset var(--stroke-light),
        0 0 4px inset var(--bright-light),
        0 0 4px inset var(--bright-light),
        0 0 4px inset var(--bright-light),
        0 0 4px inset var(--bright-light),
        0 0 8px var(--ambient-light);
    box-sizing: border-box;
}

@keyframes flicker {
    0% { opacity: .95 }
    30% { opacity: 0.8 }
    60% { opacity: 0.9 }
    70% { opacity: .6 }
    100% { opacity: .8 }
}

.title {
    font-size: 128px;
    text-shadow: 0 0 16px var(--ambient-light);
    margin: .23em auto;
    animation: flicker .3s ease-in-out 5s 3 normal forwards;
}

.subtitle {
    text-shadow:
        0 0 16px var(--ambient-light),
        0 0 8px var(--ambient-light),
        0 0 4px var(--ambient-light),
        0 0 2px var(--ambient-light);
    animation: flicker 2s 3s ease-in-out 2 alternate;
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
</style>
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
`}

// <script>
export class PageTitle extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = getTemplate();
    }
}
// </script>
