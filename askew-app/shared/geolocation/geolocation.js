import { html, PolymerElement } from '../../../../node_modules/@polymer/polymer/polymer-element.js';

export default class AskewGeolocation extends PolymerElement {

    static get template() {
        return html`
            
        `
    }

    static get properties() {
        return {
            latitude: {
                type: Number,
                reflectToAttribute: true,
                value: null
            },
            longitude: {
                type: Number,
                reflectToAttribute: true
            },
            position: {
                type: Object,
                notify: true,
                readOnly: true,
                value: null
            },
            watchPosition: {
                type: Boolean,
                value: true
            },
            highAccuracy: {
                type: Boolean,
                value: false
            },
            active: {
                type: Boolean,
                reflectToAttribute: true
            }

        }
    }

    getPosition() {
        if (this.active) {
        console.log("retriving position");

        var success = this._onSuccess.bind(this);
        var error = this._onError.bind(this);
        var options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };
        navigator.geolocation.getCurrentPosition(success, error, options);
    } else {
        console.log("Not asking for user position")
    }
    }

    _onSuccess(position) {
        let coords = position.coords;
        this.set('longitude', coords.longitude);
        this.set('latitude', coords.latitude);
        this.set('accuracy', coords.accuracy);
        this.dispatchEvent(new CustomEvent('geo-update', { bubbles: true, composed: true, detail: { pos: position } }));
    }

    _onError(error) {
        console.warn(`ERROR(${error.code}): ${error.message}`);
        this.dispatchEvent(new CustomEvent('geo-error', { bubbles: true, composed: true, detail: { message: error.message } }));
    }

    static get observers() {
      return [
        'getPosition(watchPosition)'
      ]
    }

}

window.customElements.define('askew-geolocation', AskewGeolocation);
