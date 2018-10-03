import { html, PolymerElement } from '../../../node_modules/@polymer/polymer/polymer-element.js';

export default class AskewLogin extends PolymerElement {

    static get template() {
        return html`
        <style>
            :host {
                height: 400px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }

            input {
                font-size: 1rem;
                color: silver;
                background-color: transparent;
                border: 0;
                width: 300px;
                border-style: solid;
                border-width: 0 0 2px;
                border-color: gray;
                margin: 12px;
                padding: 6px 0 2px 0;
                caret-color: var(--accent-color);
                transition: border-color 1s ease;
            }

            input:focus {
                border-color: white
            }

            input:focus,
            select:focus,
            textarea:focus,
            button:focus {
                outline: none;
            }

            input:-webkit-autofill {
                -webkit-animation-name: autofill;
                -webkit-animation-fill-mode: both;
            }

            @-webkit-keyframes autofill {
                to {
                    color: white;
                    background: transparent;
                }
            }

            button {
                margin: 12px;
                font-size: 30px;
                background-color: var(--accent-color);
                padding: 6px 24px 4px;
                border: 0;
                cursor: pointer;
            }

            button:hover {
                background: linear-gradient(-25deg, var(--accent-color), var(--accent-color-light));
            }
        </style>

        <input autocomplete="off" placeholder="email" id="email" value="jocke.lundell@gmail.com" required></input>
        <input type="password" placeholder="password" id="password" value="hejsan" required></input>
        <button type="submit" on-click="clickHandler" loading$="[[loading]]">Login</button>
        `
    }

    clickHandler(event) {
        event.preventDefault()
        this.dispatchEvent(new CustomEvent('login', {
            bubbles: true,
            composed: true,
            detail: {
                email: this.$.email.value,
                pw: this.$.password.value
            }
        }));
    }

    static get properties() {
        return {
            loading: {
                type: Boolean,
                value: false
            },
        }
    }
}

window.customElements.define('askew-login', AskewLogin)
