import './finishPopup.scss';
import BaseComponent from '../base-component';

export default class FinishPopup extends BaseComponent {
    constructor(readonly duration: string) {
        super('div', ['popup']);

        this.element.innerHTML = `
        <div class="popup__body"></div>
          <div class="popup__content">Congratulations! You successfully found all matches on ${this.duration} minutes.
          <button>Ok</button>
        </div>
        `;
    }
}
