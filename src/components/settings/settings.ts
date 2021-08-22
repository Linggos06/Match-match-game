import './settings.scss';
import BaseComponent from '../base-component';
import Dropdown from '../dropdown/dropdown';

export default class Settings extends BaseComponent {
    private dropdown: Dropdown;

    constructor(header: string, label: string) {
        super('div', ['settings_box']);
        this.element.innerHTML = `
        <h3 class="setting_name">${header}</h3>
        <label for="cards">${label}</label>`;
    }
}
