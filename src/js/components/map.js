import { API_KEY, URL, params } from "../constants/api_config";
import { eventBus } from '../modules/eventbus.js';

export class Map {
  constructor(data) {
    this.markers = data;
    this.image = document.querySelector("#map-image");
  }

  init() {
    this.showMap(this.createUrl());
    this.subscribeEvents();
  }

  createUrl() {
    return `${URL}center=${params.center}&zoom=${params.zoom}&size=${
      params.size
    }&maptype=${params.maptype}&${this.markers.map(marker => {
      return `markers=color:${marker.color}%7Clabel:${marker.label}%7C${marker.coordinates.ltd},${marker.coordinates.lgt}`;
    })}&key=${API_KEY}`.replace(/,markers/g, "&markers");
  }

  showMap(src) {
    this.image.src = src;
  }

  subscribeEvents() {
    eventBus.subscribe('added_new_place', this.addMarker.bind(this));
  }

  addMarker(newPlace) {
    this.markers.push(newPlace);
    this.showMap(this.createUrl());
    console.log(newPlace);
  }
}




