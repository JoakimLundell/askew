import { html, PolymerElement } from '../../../../node_modules/@polymer/polymer/polymer-element.js';
import {} from '../../../node_modules/@polymer/polymer/lib/elements/dom-repeat.js';

export default class AskewPositions extends PolymerElement {

    static get template() {
        return html`
        <style>
            :host {

            }
    l    </style>



        <dom-repeat items="{{positions}}">
            <template>
                <a href="/" on-click="click">{{item.namn}}</a>
            </template>
        </dom-repeat>
        `
    }

    static get properties() {
        return {
            positions: []
        }
    }

}

window.customElements.define('askew-positions', AskewPositions);
