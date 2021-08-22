import './game.scss';
import BaseComponent from '../base-component';
import Card from '../card/card';
import CardField from '../cards-field/card-field';
import delay from '../delay/delay';
import Timer from '../timer/timer';
import FinishPopup from '../finishPopup/finishPopup';
import ImageCategory from '../image-category/image-category';
import Dropdown from '../dropdown/dropdown';

const DELAY = 2000;
const openedCards = [];
let cardsSet: number;

export default class Game extends BaseComponent {
    private readonly cardsField: CardField;

    private readonly timer: Timer;

    private cardsType: Dropdown;

    private popup: FinishPopup;

    private activeCard?: Card;

    private card: Card;

    private isActive = false;

    constructor() {
        super('div', ['game-container']);
        this.cardsField = new CardField();
        this.timer = new Timer();
        setTimeout(() => {
            this.element.appendChild(this.timer.element);
            this.element.appendChild(this.cardsField.element);
        }, 500);
    }

    startGame(images: string[], gameType: number) {
        this.cardsField.clear();
        const cards = images
            .concat(images)
            .map((url) => new Card(url))
            .sort(() => Math.random() - 0.5);
        cardsSet = cards.length;
        cards.forEach((card) => {
            card.element.addEventListener('click', () => this.clickHandler(card));
        });
        if (gameType === 1) {
            this.cardsField.element.style.width = '40%';
        }
        this.cardsField.addCards(cards, gameType);
        setTimeout(() => {
            this.timer.startTimer();
        }, 5000);
    }

    private async clickHandler(card: Card) {
        if (this.isActive) return;
        if (!card.isFlipped) return;
        this.isActive = true;
        await card.flipToFront();
        if (!this.activeCard) {
            this.activeCard = card;
            this.isActive = false;
            return;
        }
        if (this.activeCard.image !== card.image) {
            await delay(DELAY);
            await Promise.all([this.activeCard.flipToBack(), card.flipToBack()]);
        } else {
            openedCards.push(this.activeCard);
            openedCards.push(card);
            this.checkSet();
        }
        this.activeCard = undefined;
        this.isActive = false;
    }

    checkSet() {
        if (openedCards.length === cardsSet) {
            const log = this.timer.stopTimer();
            this.popup = new FinishPopup(log);
            this.element.appendChild(this.popup.element);
        }
    }

    async getCardsPics(index: number, gameType: number) {
        let images = [];
        const result = await fetch('./images.json');
        const categories: ImageCategory[] = await result.json();
        if (gameType === 1) {
            images = categories[index].images6.map((name) => `${categories[index].category}/${name}`);
        } else {
            images = categories[index].images.map((name) => `${categories[index].category}/${name}`);
        }

        this.startGame(images, gameType);
    }
}
