import config from 'config.js';

const { BaseComponent } = await import(`${config.LIB_DIR}/base-component.js`);

export class PageTitle extends BaseComponent {
    constructor() {
        super(import.meta.url, { dynamic: false });
    }
}
