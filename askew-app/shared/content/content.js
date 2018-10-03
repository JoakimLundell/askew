import { html, PolymerElement } from '../../../../node_modules/@polymer/polymer/polymer-element.js';

export default class AppContent extends PolymerElement {

    static get template() {
        return html`
            <style>
                :host {
                    grid-area: content;
                    background: linear-gradient(-25deg, black, rgb(45,45,45));
                    /*padding: var(--padding-small);*/
                    overflow: hidden;
                }
            </style>

            <slot></slot>

        `
    }

    static get observers() {
        return [
            'select(currentRoute)'
        ]
    }

    select(currentRoute){
        Array.from(this.querySelectorAll('[route]')).map((selected)=>{
            selected.style.display = 'none'
        })
        Array.from(this.querySelectorAll(`[route~=${currentRoute}]`)).map((selected)=>{
            selected.style.display = 'flex'
        })
    }
}
