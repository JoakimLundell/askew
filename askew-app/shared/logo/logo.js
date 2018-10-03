import { html, PolymerElement } from '../../../../node_modules/@polymer/polymer/polymer-element.js';

export default class AskewLogo extends PolymerElement {

    static get template() {
        return html`
        <style>
            :host {
                color: rgba(24,24,24,0.99);
                letter-spacing: 13px;
                background-color: transparent;
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: flex-start;
                font-size: 70px;
                overflow: hidden;
            }

            @media screen and (min-width: 800px) {
                :host {
                    font-size: 120px;
                }
            }
        </style>
        <slot></slot>
        `
    }
}
