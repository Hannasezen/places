import { eventBus } from '../modules/eventbus';
import { EVENTS } from '../constants/events';

export class Places {
  constructor(data) {
    this.places = data;
    this.container = document.getElementById("place-list");
  }

  init() {
    this.addId();
    this.bindEvents();
    this.subscribeEvents();
    this.renderPlaceList();
  }

  addId() {
    this.places.forEach(place => place.id = `${place.coordinates.ltd}${place.coordinates.lgt}`);
  }

  renderPlace(place) {
    const template = `
                    <li data-id="${place.id}">
                      <span>Name: ${place.title}</span>
                      <span>Description: ${place.description}</span>
                      <span>From: ${place.openhours.start}</span>
                      <span>To: ${place.openhours.end}</span>
                      <button class="edit-place">Edit</button>
                      <button class="remove-place">Remove</button>
                    </li>
                    `;
    this.container.insertAdjacentHTML("beforeend", template);
  }
  
  bindEvents() {
    this.container.addEventListener("click", this.clickHandler.bind(this));
  }

  clickHandler(e) {
    const target = e.target;
    if (target.classList.contains("edit-place")) {
      this.editPlace(target);
    } else if (target.classList.contains("remove-place")) {
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
    const index = this.places.findIndex(place => place.id === id);
    if (index !== -1) {
      this.places.splice(index, 1);
      li.remove();
    }    
    eventBus.publish(EVENTS.REMOVED_PLACE);
  }

  renderPlaceList(places = this.places) {
    this.container.innerHTML = '';
    places.forEach(place => this.renderPlace(place));
  }

  subscribeEvents() {
    eventBus.subscribe(EVENTS.EDIT_PLACE, this.renderPlaceList.bind(this));
    eventBus.subscribe(EVENTS.SHOW_FILTERED_PLACES, this.renderPlaceList.bind(this));
    eventBus.subscribe(EVENTS.SHOW_ALL_PLACES, this.renderPlaceList.bind(this));
  }
}