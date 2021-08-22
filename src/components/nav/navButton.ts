import './nav.scss';
import BaseComponent from '../base-component';

export default class NavButton extends BaseComponent {
    constructor(path: string, text: string, image: string) {
        super('li', ['nav_button']);
        this.element.innerHTML = `
        <span style="background-image: url('./${image}')"></span><a href="${path}">${text}</a>`;
    }
}
