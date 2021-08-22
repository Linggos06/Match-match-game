import './button.scss';
import BaseComponent from '../base-component';

export default class Button extends BaseComponent {
    private text: string;

    private href: string;

    constructor(text: string, href: string) {
        super('a', ['button']);
        this.text = text;
        this.href = href;
    }

    render() {
        this.element.textContent = this.text;
        this.element.setAttribute('href', `${this.href}`);
        this.element.addEventListener('click', () => {
            if (this.element.textContent === 'Pause game') {
                this.element.textContent = 'Resume game';
            } else {
                this.element.textContent = 'Pause game';
            }
        });
        return this.element;
    }
}
