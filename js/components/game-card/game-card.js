import config from '../../../config.js';

const { BaseComponent } = await import(`${config.LIB_DIR}/base-component.js`);

export class GameCard extends BaseComponent {
    constructor() {
        super(import.meta.url, { dynamic: false });
    }
}
