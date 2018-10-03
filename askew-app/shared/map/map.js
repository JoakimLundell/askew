import { html, PolymerElement } from '../../../node_modules/@polymer/polymer/polymer-element.js';


export default class AskewMap extends PolymerElement {

    static get template() {
        return html`

        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.3.4/dist/leaflet.css" integrity="sha512-puBpdR0798OZvTTbP4A8Ix/l+A4dHDD0DGqYW6RQ+9jxkRFclaxxQb/SJAWZfWAkuyeQUytO7+7N4QKrDh+drA==" crossorigin=""/>

        <style>
            #map { height: 60vh; width: 100%;}
        </style>

    <slot></slot>
    <div id="map"></div>

        `
    }

    connectedCallback() {
        super.connectedCallback();
        //console.log("reading map");
        setTimeout(() => {
            var map = L.map(this.$.map).setView([59.3345, 18.0632], 12);

/*          L.tileLayer('https://korona.geog.uni-heidelberg.de/tiles/roadsg/x={x}&y={y}&z={z}', {
               maxZoom: 19,
               attribution: 'Imagery from <a href="http://giscience.uni-hd.de/">GIScience Research Group @ University of Heidelberg</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(map);
*/
            var OpenStreetMap_BlackAndWhite = L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
	           maxZoom: 18,
	           attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
           }).addTo(map);

           L.marker([59.32354, 18.07023]).bindPopup("<div>Råtta</div><a href='{{url('/pokemon')}}' />Kör</a>").addTo(map);

           // Place zoomControl bottom right
           map.zoomControl.setPosition('bottomright');

           //Building a new componenet taking care of retriving positions
           //map.locate({setView: false });

           // On locationfound or locationerror
            map.on('locationfound', onLocationFound);
            map.on('locationerror', onLocationError);

            function onLocationError(e) {
                console.log(e.message);
            }

            function onLocationFound(e) {
                console.log(e);
            }


       }, 2000)

    }

    ready() {
        super.ready();
        //setTimeout(() => {
        //  var map = L.map('map').setView([59.3345, 18.0632], 12);
        //}, 1000)

    }




}
