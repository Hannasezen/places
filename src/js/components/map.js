import { API_KEY, URL, params } from "../constants/api_config";
import { eventBus } from '../modules/eventbus.js';
import { EVENTS } from '../constants/events';

export class Map {
  constructor(data) {
    this.markers = data;
    this.image = document.querySelector("#map-image");
    this.center = params.center;
    this.url = URL;
    this.apiKey = API_KEY;
    this.maptype = params.maptype;
    this.zoom = params.zoom;
  }

  init() {
    this.addId();
    this.showMap(this.createUrl());
    this.subscribeEvents();
  }

  addId() {
    this.markers.forEach(marker => marker.id = `${marker.coordinates.ltd}${marker.coordinates.lgt}`);
  }

  createUrl(markers) {
    markers = markers && markers.length ? markers : this.markers;

    return `${this.url}center=${this.center}&zoom=${this.zoom}&size=${
      params.size
    }&format=png&maptype=${this.maptype}&${markers.map(marker => {
      return `markers=color:${marker.color}%7Clabel:${marker.label}%7C${marker.coordinates.ltd},${marker.coordinates.lgt}`;
    })}&key=${this.apiKey}`.replace(/,markers/g, "&markers");
  }

  showMap(src) {
    this.image.src = src;
  }

  refreshMap(data) {
    this.showMap(this.createUrl(data));
  }

  setCoords(coords) {
    this.center = `${coords.ltd},${coords.lgt}`;
    this.refreshMap();
    console.log(coords);
  }

  subscribeEvents() {
    eventBus.subscribe(EVENTS.REMOVED_PLACE, this.refreshMap.bind(this));
    eventBus.subscribe(EVENTS.EDIT_PLACE, this.refreshMap.bind(this));
    eventBus.subscribe(EVENTS.SHOW_FILTERED_PLACES, this.refreshMap.bind(this));
    eventBus.subscribe(EVENTS.SHOW_ALL_PLACES, this.refreshMap.bind(this));
    eventBus.subscribe(EVENTS.GETED_COORDS, this.setCoords.bind(this));
  }
}




