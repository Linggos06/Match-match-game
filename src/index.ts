// eslint-disable-next-line import/no-named-as-default
import App from './app';
import './styles/main.scss';

window.addEventListener('load', () => {
    const rootElem = document.getElementById('root');
    if (!rootElem) {
        throw Error('Not found');
    }
    const location = JSON.parse(localStorage.getItem('pageName')) || 'about';
    // eslint-disable-next-line no-new
    new App(rootElem, location);
});

window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.querySelector<HTMLElement>('.header').style.top = '-75px';
    } else {
        document.querySelector<HTMLElement>('.header').style.top = '0px';
    }
});
