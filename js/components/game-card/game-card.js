import config from '../../../config.js';

const { BaseComponent } = await import(`${config.LIB_DIR}/base-component.js`);

export class GameCard extends BaseComponent {
    constructor() {
        super(import.meta.url);
    }

    visitLink() {
        const slot = this.shadowRoot.querySelector('slot[name=link]')
        const link = slot.assignedNodes()[0];
        link.click();
    }
}
