import './dropdown.scss';
import BaseComponent from '../base-component';

export default class Dropdown extends BaseComponent {
    private index: number;

    constructor(value: string, value2: string) {
        super('select', ['dropdown']);
        this.element.innerHTML = `
           <option value="${value}">${value}</option>
           <option value="${value2}">${value2}</option>`;
    }

    checkSelected(): number {
        this.element.addEventListener('change', () => {
            this.index = (<HTMLSelectElement>this.element).selectedIndex;
        });
        return this.index;
    }
}
