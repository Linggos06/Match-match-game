import './nav.scss';
import BaseComponent from '../base-component';
import NavButton from './navButton';

export default class Nav extends BaseComponent {
    private button: NavButton;

    constructor() {
        super('nav', ['nav']);
    }

    async renderButtons() {
        const list = document.createElement('ul');
        const result = await fetch('./buttons.json').then((res) => res.json());
        result.forEach((res) => {
            this.button = new NavButton(res.path, res.text, res.background);
            list.appendChild(this.button.element);
        });
        this.element.appendChild(list);
    }
}
