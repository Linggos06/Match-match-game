/* eslint-disable no-param-reassign */
import './card-field.scss';
import BaseComponent from '../base-component';
import Card from '../card/card';

export default class CardField extends BaseComponent {
    private cards: Card[] = [];

    constructor() {
        super('div', ['cards-field']);
    }

    clear() {
        this.cards = [];
        this.element.innerHTML = '';
    }

    addCards(cards, gameType) {
        this.cards = cards;
        this.cards.forEach((card) => {
            if (gameType === 1) {
                card.element.style.flexBasis = '13%';
                card.element.style.margin = '0';
                card.element.style.marginBottom = '1.5%';
                card.element.style.marginLeft = '1.5%';
                card.element.style.height = '4.2rem';
                card.element.style.width = '3.2rem';
            }
            this.element.appendChild(card.element);
        });
        setTimeout(() => {
            this.cards.forEach((card) => card.flipToBack());
        }, 5000);
    }
}
