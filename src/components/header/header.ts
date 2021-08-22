import './header.scss';
import BaseComponent from '../base-component';
import Nav from '../nav/nav';
import Button from '../button/button';

export default class Header extends BaseComponent {
    text: string;

    private nav: Nav;

    private button: Button;

    constructor(text: string) {
        super('header', ['header']);
        this.text = text;
    }

    render() {
        const logo = document.createElement('div');
        logo.classList.add('logo');
        logo.innerHTML = `<div class="upper">Match</div>
                          <div class="bottom">Match</div>`;
        this.element.appendChild(logo);
        this.nav = new Nav();
        this.nav.renderButtons();
        this.element.appendChild(this.nav.element);
        this.button = new Button(`${this.text}`, 'game');
        this.element.appendChild(this.button.render());
        return this.element;
    }
}
