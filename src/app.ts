import Dropdown from './components/dropdown/dropdown';
import Game from './components/game/game';
import Header from './components/header/header';
import MainContainer from './components/main_container/main';
import Settings from './components/settings/settings';

export default class App {
    private location: string;

    private game: Game;

    private readonly header: Header;

    private main: MainContainer;

    private settings: Settings;

    private settings2: Settings;

    private dropdown: Dropdown;

    private dropdown2: Dropdown;

    private indexCardsType: number;

    private indexGameType: number;

    constructor(private readonly rootElement: HTMLElement, location: string) {
        this.location = location;
        this.header = new Header('Start Game');
        this.rootElement.appendChild(this.header.render());
        this.main = new MainContainer();
        this.settings = new Settings('Game Cards', 'Select game cards type:');
        this.settings2 = new Settings('Difficulty', 'Select game type:');
        this.dropdown = new Dropdown('Animals', 'Fruits');
        this.dropdown2 = new Dropdown('4x4', '6x6');
        this.route = this.route.bind(this);
        this.initApp();
    }

    async initApp() {
        window.history.replaceState({ pageName: `${this.location}` }, `${this.location} page`, this.location);
        this.render(this.location);
        this.header.element.addEventListener('click', this.route);
        window.addEventListener('popstate', (e) => {
            this.render(e.state.pageName);
        });
    }

    render(location: string) {
        this.location = location;
        this.main.element.innerHTML = '';
        if (this.location === 'about') {
            // eslint-disable-next-line no-empty
        } else if (this.location === 'best_score') {
        } else if (this.location === 'game') {
            this.game = new Game();
            this.indexCardsType = this.dropdown.checkSelected() || 0;
            this.indexGameType = this.dropdown2.checkSelected() || 0;
            this.game.getCardsPics(this.indexCardsType, this.indexGameType);
            this.main.element.appendChild(this.game.element);
        } else if (this.location === 'settings') {
            const settingsContainer = document.createElement('div');
            settingsContainer.classList.add('settings_container');
            this.settings.element.appendChild(this.dropdown.element);
            this.settings2.element.appendChild(this.dropdown2.element);
            settingsContainer.appendChild(this.settings.element);
            settingsContainer.appendChild(this.settings2.element);
            this.main.element.appendChild(settingsContainer);
        }
        this.rootElement.appendChild(this.main.element);
    }

    route(event) {
        event.preventDefault();
        if (event.target.tagName !== 'A') return;
        const link = event.target.href.split('\\').pop().split('/').pop();
        if (link === this.location) return;
        if (link !== 'game') {
            this.header.text = 'Start Game';
            this.header.element.innerHTML = '';
            this.header.render();
        }
        this.render(link);
        window.history.pushState({ pageName: `${link}` }, `${link} page`, link);
        localStorage.setItem('pageName', JSON.stringify(link));
    }
}
