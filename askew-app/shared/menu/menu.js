import { html, PolymerElement } from '../../../../node_modules/@polymer/polymer/polymer-element.js';
import {} from '../../../node_modules/@polymer/polymer/lib/elements/dom-repeat.js';

export default class AppMenu extends PolymerElement {

    static get template() {
        return html`
        <style>
            :host {
                grid-area: menu;
                display: flex;
                flex-direction: column;
                /*justify-content: space-between;*/
                letter-spacing: 2px;
                font-size: 30px;
                /*line-height: 30px;*/
                /*font-family: 'Open Sans', sans-serif;*/
                background-color: transparent;
                /*align-items: center;*/
                padding: 0;

            }

            a {
                text-decoration: none;
                color: var(--background);
                background-color: var(--accent-color);
                text-transform: capitalize;
                border-bottom: 12px solid black;
                /*display: block;*/
                padding-left: 10px;
                padding-top: 3px;
            }
            a:last-of-type {
                border-bottom: 0px solid black;
            }

            :host [selected] {
                color: var(--background);
                background: var(--accent-color)
            }

            a:hover {
                background: linear-gradient(-25deg, var(--accent-color), var(--accent-color-light));
            }

            @media screen and (min-width: 650px) {

                :host {
                    flex-direction: row;
                    align-items: center;
                }

                a {
                    flex:1;
                    text-align: center;
                    padding: 6px 0;
                    border: 0;
                    border-right: 12px solid black
                }

                a:last-of-type {
                    border-right: 0;
                }


            }

        </style>

        <dom-repeat items="{{navigation}}">
            <template>
                <a href="{{item.href}}"
                   on-click="click"
                   selected$="{{item.active}}"
                   name="{{item.name}}">{{item.name}}</a>
            </template>
        </dom-repeat>
        `
    }

    static get properties() {
        return {
            selected: {
                type: Boolean,
                reflectToAttribute: true
            }
        }
    }

    click(event) {
        event.preventDefault();
        this.dispatchEvent(new CustomEvent('navigate', { bubbles: true, composed: true, detail: { target: event.target.name } }));
    }

}
