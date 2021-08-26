import './button.scss';
import BaseComponent from '../base-component';
import Timer from '../timer/timer';

export default class Button extends BaseComponent {
    private text: string;

    private href: string;

    private timer: Timer;

    constructor(text: string, href: string) {
        super('a', ['button']);
        this.text = text;
        this.href = href;
    }

    render() {
        this.element.textContent = this.text;
        this.element.setAttribute('href', `${this.href}`);
        this.element.addEventListener('click', () => {
            this.timer = new Timer();
            if (this.element.textContent === 'Pause Game') {
                this.element.textContent = 'Resume Game';
                this.timer.pauseTimer();
            } else {
                this.element.textContent = 'Pause Game';
                const res = document.querySelector<HTMLElement>('.timer').innerText.split(' : ');
                this.timer.resumeTimer(parseInt(res[0], 2), parseInt(res[0], 2));
                // this.timer.startTimer();
            }
        });
        return this.element;
    }
}
