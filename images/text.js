import { html, PolymerElement } from '../../../../node_modules/@polymer/polymer/polymer-element.js';
import { } from './../app-shared-style.js';

export default class AppText extends PolymerElement {

    static get template() {
        return html`
        <style include="app-shared-style">
            :host {
                display: flex;
                justify-content: space-between;
                user-select: text;
            }
        
            :host([paragraph]) {
                font-size: var(--font-size);
                line-height: var(--line-height);
            }
        
            :host([title]) {
                font-size: 3.6rem;
                font-weight: bold;
                text-transform: uppercase;
                color: var(--accent-color);
            }
        
            :host([header]) {
                font-size: 3.6rem;
                font-weight: bold;
            }
        
            :host([subtitle]) {
                font-size: 2.4rem;
                font-weight: bold;
                height: var(--baseline);
            }
        
            :host([title]) app-icon {
                fill: var(--accent-color);
                height: calc(2 * var(--baseline));
                width: calc(2 * var(--baseline));
            }
        </style>
        <slot></slot>
        <dom-if if="[[icon]]">
            <template>
                <app-icon name="[[icon]]"></app-icon>
            </template>
        </dom-if>
        `
    }

    static get properties() {
        return {
            icon: {
                type: String
            }
        }
    }
}

window.customElements.define('app-text', AppText)