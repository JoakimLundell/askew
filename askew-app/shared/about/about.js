import { html, PolymerElement } from '../../../node_modules/@polymer/polymer/polymer-element.js';

export default class AskewAbout extends PolymerElement {

    static get template() {
        return html`
            <style>
                :host {
                    display: flex;
                    justify-content: space-around;
                    width: 100%;
                }

                .inner {
                    padding: 50px 0;
                    width: 300px;
                    text-align: justify;
                    line-height: 30px;
                }
                ::slotted(h1) {
                    color: #f8f8ff;
                }
                ::slotted(p) {
                    color: silver;
                }
            </style>
            <div class="inner">
            
                <slot></slot>
            </div>
        `
    }

}
