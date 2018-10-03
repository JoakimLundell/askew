import { html, PolymerElement } from '../../../../node_modules/@polymer/polymer/polymer-element.js';

export default class AskewHome extends PolymerElement {

    static get template() {
        return html`
            <style>
                :host {
                    display: flex;
                    flex-direction: column;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    padding: var(--padding);
                }

                @media screen and (min-width: 650px) {

                    :host {
                        flex-direction: row;
                    }
                    ::slotted(.home-item), ::slotted(div) {
                        max-width: 50%;
                        _flex-grow: 1;

                    }
                    ::slotted(div:nth-child(even)) {
                        text-align: right;
                    }
                }
            </style>

            <slot></slot>

        `
    }

}
