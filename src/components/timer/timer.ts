import './timer.scss';
import BaseComponent from '../base-component';

let intervalID;

export default class Timer extends BaseComponent {
    private seconds;

    private minutes;

    constructor() {
        super('div', ['timer']);
        this.seconds = 0;
        this.minutes = 0;
        this.element.innerText = `0${this.minutes} : 0${this.seconds}`;
    }

    startTimer() {
        let outputSeconds;
        let outputMinutes;
        intervalID = setInterval(() => {
            if (this.seconds === 59) {
                this.minutes += 1;
                this.seconds = 0;
            } else {
                this.seconds += 1;
            }
            if (this.seconds <= 9) {
                outputSeconds = `0${this.seconds}`;
            } else {
                outputSeconds = `${this.seconds}`;
            }
            if (this.minutes <= 9) {
                outputMinutes = `0${this.minutes}`;
            } else {
                outputMinutes = `${this.minutes}`;
            }
            this.element.innerText = `${outputMinutes} : ${outputSeconds}`;
        }, 1150);
    }

    stopTimer() {
        clearInterval(intervalID);
        this.seconds = 0;
        this.minutes = 0;
        return this.element.innerText;
    }

    // eslint-disable-next-line class-methods-use-this
    pauseTimer() {
        clearInterval(intervalID);
    }

    resumeTimer(min: number, sec: number) {
        this.seconds = sec;
        this.minutes = min;
        let outputSeconds;
        let outputMinutes;
        intervalID = setInterval(() => {
            if (this.seconds === 59) {
                this.minutes += 1;
                this.seconds = 0;
            } else {
                this.seconds += 1;
            }
            if (this.seconds <= 9) {
                outputSeconds = `0${this.seconds}`;
            } else {
                outputSeconds = `${this.seconds}`;
            }
            if (this.minutes <= 9) {
                outputMinutes = `0${this.minutes}`;
            } else {
                outputMinutes = `${this.minutes}`;
            }
            this.element.innerText = `${outputMinutes} : ${outputSeconds}`;
        }, 1150);
    }
}
