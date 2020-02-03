import { eventBus } from '../modules/eventbus';
import { EVENTS } from '../constants/events';

export class Places {
  constructor(data) {
    this.places = data;
    this.container = document.getElementById("place-list");
  }

  init() {
    // this.addId();
    this.bindEvents();
    this.subscribeEvents();
    this.renderPlaceList();
  }

  // addId() {
  //   this.places.forEach(place => place.id = `${place.coordinates.ltd}${place.coordinates.lgt}${new Date().getTime()}`);
  // }

  renderPlace(place) {
    const template = `
                    <li data-id="${place.id}" class="place place-list__item">
                      <span class="place__content">
                        <span class="place__title">${place.title}</span>
                        <span class="place__description">${place.description}</span>
                        <span class="place__labels">
                          <ul class="place__time">
                            <li>From: ${place.openhours.start}</li>
                            <li>To: ${place.openhours.end}</li>
                          </ul>
                          <ul class="place__coords">
                            <li>${place.coordinates.ltd}</li>
                            <li>${place.coordinates.lgt}</li>
                          </ul>
                          <ul class="place__keywords">
                            <li>#place</li>
                            <li>#map</li>
                            <li>#google</li>
                          </ul>
                        </span>
                      </span>
                      <span class="place__controls">
                        <button class="btn btn-edit-place">Edit</button>
                        <button class="btn btn-remove-place">Remove</button>
                      </span>
                    </span>
                    `;
    this.container.insertAdjacentHTML("beforeend", template);
  }
  
  bindEvents() {
    this.container.addEventListener("click", this.clickHandler.bind(this));
  }

  clickHandler(e) {
    const target = e.target;
    if (target.classList.contains("btn-edit-place")) {
      this.editPlace(target);
    } else if (target.classList.contains("btn-remove-place")) {
      this.removePlace(target);
    }
  }

  addPlace(newPlace) {
    this.renderPlace(newPlace);
  }

  editPlace(target) {
    const li = target.closest('li');
    const id = li.getAttribute('data-id');
    eventBus.publish(EVENTS.OPEN_PLACE_FOR_EDITING, id);
    document.body.classList.add('form-open');
  }

  removePlace(target) {
    const li = target.closest('li');
    const id = li.getAttribute('data-id');

    const xhr = new XMLHttpRequest();
    xhr.open('DELETE', `/place/${id}`);
    xhr.onload = function() {
      const resPlaces = JSON.parse(xhr.response);
      eventBus.publish(EVENTS.REFRESH_PLACES, resPlaces);
    };
    xhr.send();
    // eventBus.publish(EVENTS.REMOVED_PLACE);
  }

  renderPlaceList(places = this.places) {
    this.container.innerHTML = '';
    places.forEach(place => this.renderPlace(place));
  }

  subscribeEvents() {
    // eventBus.subscribe(EVENTS.EDIT_PLACE, this.renderPlaceList.bind(this));
    // eventBus.subscribe(EVENTS.SHOW_FILTERED_PLACES, this.renderPlaceList.bind(this));
    // eventBus.subscribe(EVENTS.SHOW_ALL_PLACES, this.renderPlaceList.bind(this));
    eventBus.subscribe(EVENTS.REFRESH_PLACES, this.renderPlaceList.bind(this));
  }
}