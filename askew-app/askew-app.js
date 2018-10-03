import { PolymerElement, html } from '../node_modules/@polymer/polymer/polymer-element.js';
import { } from '../node_modules/@polymer/polymer/lib/elements/dom-if.js';

import AskewChatt from './shared/chatt/chatt.js';
import AppHeader from './shared/header/header.js';
import AppMenu from './shared/menu/menu.js';
import AskewLogo from './shared/logo/logo.js';
import AskewMap from './shared/map/map.js';
import AskewHome from './shared/home/home.js';
import AppContent from './shared/content/content.js';
import AskewAbout from './shared/about/about.js';
import AskewGeolocation from './shared/geolocation/geolocation.js';
import askewPositions from './shared/positions/positions.js';
import AskewLogin from './shared/login/login.js';

import authentication from './shared/authentication/authentication.js'


export default class SandboxApp extends PolymerElement {

    constructor() {
        super();
        // ----------------
        // Event listeners
        // ----------------
        this.addEventListener('navigate', this.navigateHandler)
        this.addEventListener('geo-update', this.geoUpdateHandler)
        this.addEventListener('geo-error', this.geoErrorHandler)
        this.addEventListener('get-positions', this.getPositionsHandler)
        this.addEventListener('login', this.loginHandler)
        this.addEventListener('logout', this.logoutHandler)
        this.addEventListener('route-go', this.routeGoHandler)
        // ------------------
        // Initialize events
        // ------------------
        this.dispatchEvent(new CustomEvent('navigate', { detail: { target: window.location.pathname == '/' ? 'home' : window.location.pathname } }));
        this.dispatchEvent(new CustomEvent('get-positions', { detail: { target: 'jocke' } }));
    }

    // ----------------------
    // Methods and functions
    // ----------------------
    navigateHandler(detail) {
        this.state.routes.map((route) => {
            if (this._trimLeadingSlash(route.name) == this._trimLeadingSlash(detail.detail.target)) {
                if (!route.protected || authentication.status(detail.detail.target)) {
                    window.history.pushState({}, null, detail.detail.target);

                    this.state.routes.map((nav, index) => {
                        this.set(`state.navigation.${index}.active`, false)
                        if (this._trimLeadingSlash(nav.name) == this._trimLeadingSlash(detail.detail.target)) {
                            this.set(`state.navigation.${index}.active`, true)
                            this.set('state.currentRoute', nav.name)
                        }
                    })
                } else {
                    this.dispatchEvent(new CustomEvent('navigate', { detail: { target: 'login' } }));
                }
            }
        })
    }

    _trimLeadingSlash(path) {
        if (path[0] == '/') {
            return path.substring(1)
        } else {
            return path
        }
    }

    ready() {
        super.ready();
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                this.set('state.user', user); // when a user is logged in set their firebase user variable to
                this.set('state.authenticated', true)
            } else {
                this.set('state.user', false); // when no user is logged in set user to false
                this.set('state.authenticated', false)
            }
        }.bind(this));
    }

    routeGoHandler(event) {
        window.history.pushState({}, null, event.detail.target)
        this.dispatchEvent(new CustomEvent('navigate', { bubbles: true, composed: true, detail: { target: 'home' } }));
    }

    loginHandler(user) {
        this.set('state.loading', true)

        let loginSuccess = this._loginSuccess.bind(this);
        let loginFail = this._loginFail.bind(this);

        firebase.auth().signInWithEmailAndPassword(user.detail.email, user.detail.pw)
        .then(function() {
            window.localStorage.setItem('emailForSignIn', user.detail.email);
            loginSuccess();
        })
        .catch(function(error) {
            loginFail(error);
        });

        this.set('state.loading', false)
    }

    _loginSuccess() {
        this.set('state.authenticated', true)
        this.set('loading', false)
        this.dispatchEvent(new CustomEvent('route-go', { detail: { target: 'home' } }))
    }
    _loginFail(err) {
        alert(err.code + " " + err.message);
    }

    logoutHandler() {
        this.set('state.loading', true)

        let logoutSuccess = this._logoutSuccess.bind(this)
        let logoutFail = this._logoutFail.bind(this)

        firebase.auth().signOut().then(function() {
            logoutSuccess();
        }).catch(function(error) {
            logoutFail(error)
        });

        this.set('state.loading', false)
    }

    _logoutSuccess() {
        this.set('state.authenticated', false);
        this.set('state.user', null);
    }

    _logoutFail(err) {
        alert(err.code + " " + err.message);
    }

    getPositionsHandler() {
        var database = firebase.database();
        var receivedData =  this.gotData.bind(this)
        var ref = database.ref("posts");
        ref.on("value", receivedData, this.errData);
    }

    gotData(data) {
        var temp = []
        //console.log(data.val());
        data.forEach(function(child) {
            //console.log(child.val().namn);
            temp.push(child.val());
        });
        this.set('state.positions', temp);
    }

    errData(err) {
        console.log(err);
    }

    savePosition() {
        console.log("savePosition");
        var postData = {
            uid: '3434343',
            name: 'Joakim',
            longitude: '123123123',
            latitude: '345345345',
            speed: '12',
            accuracy: '423'
        }

        return firebase.database().ref('positions/joakim').update(postData);
    }

    geoUpdateHandler(pos) {
        //console.dir(pos.detail.pos.coords);
        //console.log("we got new coords");
        this.savePosition(pos);
        this.set('state.geo.longitude', pos.detail.pos.coords.longitude )
        this.set('state.geo.latitude', pos.detail.pos.coords.latitude )
        this.set('state.geo.accuracy', pos.detail.pos.coords.accuracy )
    }

    geoErrorHandler(err) {
        this.set('state.geo.error', err.detail.message)
    }

    // remove after test
    logoutClick() {
        this.dispatchEvent(new CustomEvent('logout', { detail: { target: null } }))
    }


    static get template() {
        return html`
        <style>
        :host {
            min-height: 100vh;
            background-color: var(--background);
            padding: var(--padding);
            display: grid;
            grid-template-areas: "header" "content" "menu";
            grid-template-columns: auto;
            grid-template-rows: var(--header-height) 1fr auto;
            grid-gap: var(--padding);
            max-width: 800px;
            margin: 0 auto;
            font-size: 1rem;
        }

        @media screen and (min-width: 800px) {
            :host {
                margin: 0 auto;
                min-height: 600px;
                --header-height: 220px;
                transition: margin 1s ease;
            }
        }
        </style>

        <app-header>
            Inloggad:[[state.authenticated]]
            <askew-logo>ASKEW</askew-logo>
        </app-header>

        <app-content current-route=[[state.currentRoute]]>

            <askew-home route="home">
                <div>
                    <h3>Senaste nytt</h3>
                    <p>Sidan uppdaterad mer design. Sidan uppdaterad med ny läcker design</p>
                </div>
                <div>
                    <h3>Chatt</h3>
                    <p> Joqe, Bali, Nisse, Lasse, Hasse och Bert</p>
                </div>
                <div>
                    <h3>Kartan</h3>
                    <p>Det finns en aktiv samlingsplats. Tudor Arms från 13:00. Hurry!</p>
                </div>
                <div>
                    <h3>Positions</h3>
                    [[state.positions.length]]
                    <p> <askew-positions positions="[[state.positions]]"></askew-postions></p>
                </div>
                <div>
                    <h3>Din position</h3>
                    <p>[[state.geo.error]]
                    Latitude = [[state.geo.latitude]]
                    longitude = [[state.geo.longitude]]
                    accuracy = [[state.geo.accuracy]]
                    </p>
                </div>
                <div>
                    <h3>Du</h3>
                    <p>
                        <template is="dom-if" if="[[!state.authenticated]]">
                            <a href="/login">Login</a>
                        </template>
                        <template is="dom-if" if="[[state.authenticated]]">
                            <button on-click="logoutClick">Logout</button>
                        </template>
                    </p>
                </div>
            </askew-home>

            <askew-map route="map">
                <askew-geolocation active="true" watch-pos high-accuracy latitude="{{latitude}}" longitude="{{longitude}}"></askew-geolocation>
                <div id="mapid"></div>
            </askew-map>

            <askew-about route="about">
                <h1>Tjena vi är Askew</h1>
                <p>Vi är gänget som går på matcher. Dricker öl, åker snett, kommer i tid, klär oss snyggt, eldar, ramlar och sjunger högt. Vi håller ihop, bjuder upp, hatar, hånar, skrattar och gråter. Det har vi alltid gjort och så tänker vi fortsätta.</p>
            </askew-about>

            <askew-chatt route="page"></askew-chatt>

            <askew-login route="login">
                <h3>Login</h3>
            </askew-login>

        </app-content>

        <askew-menu navigation="[[state.navigation]]"></askew-menu>

        `
    }

    // ---------------
    // App properties
    // ---------------
    static get properties() {
        return {
            state: {
                type: Object,
                value: {
                    loading: false,
                    authenticated: false,
                    navigation: [{
                        href: '/',
                        name: 'home',
                        active: true
                    }, {
                        href: 'map',
                        name: 'map',
                        active: false
                    }, {
                        href: 'page',
                        name: 'page',
                        active: false
                    }, {
                        href: 'about',
                        name: 'about',
                        active: false
                    }],
                    title: 'This is the title',
                    currentRoute: String,
                    routes: [{
                        href: 'home',
                        name: 'home',
                        protected: false,
                        proportions: '50% 50%'
                    }, {
                        href: 'map',
                        name: 'map',
                        protected: false,
                        proportions: '50% 50%'
                    }, {
                        href: 'page',
                        name: 'page',
                        protected: false,
                        proportions: '50% 50%'
                    }, {
                        href: 'about',
                        name: 'about',
                        protected: false,
                        proportions: '50% 50%'
                    }, {
                        href: 'login',
                        name: 'login',
                        protected: false,
                        proportions: '50% 50%'
                    }],
                    geo: {
                        longitude: 0,
                        latitude: 0,
                        accuracy: 0,
                        active: true,
                        error: null
                    },
                    user: {
                        type: Object,
                        value: null
                    },
                    positions: []
                }
            }
        }
    }
}

window.customElements.define('askew-app', SandboxApp);
window.customElements.define('askew-chatt', AskewChatt);
window.customElements.define('app-header', AppHeader);
window.customElements.define('app-content', AppContent);
window.customElements.define('askew-menu', AppMenu);
window.customElements.define('askew-logo', AskewLogo);
window.customElements.define('askew-map', AskewMap);
window.customElements.define('askew-home', AskewHome);
window.customElements.define('askew-about', AskewAbout);
