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
            const settingsContainer = document.createElement('div');
            settingsContainer.textContent =
                'All cards are mixed up. Cards lay down in rows, face down. You should turn over any two cards. If the two cards match, they will stay face up. If they don’t match, they will turn back over. The game is over when all the cards have been matched.';
            settingsContainer.classList.add('settings_container');
            settingsContainer.classList.add('about_container');
            this.main.element.appendChild(settingsContainer);
        } else if (this.location === 'best_score') {
            const settingsContainer = document.createElement('div');
            settingsContainer.textContent = 'Best Scores';
            settingsContainer.classList.add('settings_container');
            settingsContainer.classList.add('about_container');
            this.main.element.appendChild(settingsContainer);
        } else if (this.location === 'game') {
            this.game = new Game();
            this.indexCardsType = this.dropdown.checkSelected() || 0;
            this.indexGameType = this.dropdown2.checkSelected() || 0;
            this.game.getCardsPics(this.indexCardsType, this.indexGameType);
            this.main.element.appendChild(this.game.element);
            this.header.text = 'Pause Game';
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
