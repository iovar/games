import config from '../../../config.js';

const { BaseComponent } = await import(`${config.LIB_DIR}/base-component.js`);

export class Layout extends BaseComponent {
    constructor() {
        super(import.meta.url, { dynamic: false });
    }
}
