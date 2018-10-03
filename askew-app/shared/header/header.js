import { html, PolymerElement } from '../../../../node_modules/@polymer/polymer/polymer-element.js';

export default class AppHeader extends PolymerElement {

    static get template() {
        return html`
        <style>
            :host {
                grid-area: header;
                background: var(--accent-color);
                padding: var(--padding-small);
                box-sizing: border-box;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                --logo-size: 100px;
                position: relative;
            }

            .monkey-position {
                position: absolute;
                background-color: rgb(24,24,24);
                width: calc(var(--logo-size) + 6px);
                height: calc(var(--logo-size) + 6px);
                border-radius: 50%;
                right: calc(50% - calc(var(--logo-size) / 2));
                top: calc(var(--header-height) + 6px - calc(var(--logo-size) / 2));
                display: flex;
                justify-content: space-around;
                align-items: center;
                z-index: 2000;
            }

            .monkey {
                display: block;
                text-indent: -9999px;
                width: var(--logo-size);
                height: var(--logo-size);
                background: url(./../images/monkey.svg) no-repeat center center;
                background-size: contain;
                fill: #6b90a0;
            }
        </style>

        <slot></slot>
        
        <div class="monkey-position">
            <div class="monkey"></div>
        </div>

        `
    }
}
