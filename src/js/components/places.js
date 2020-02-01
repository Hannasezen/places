import { eventBus } from '../modules/eventbus';

export class Places {
  constructor(data) {
    this.places = data;
    this.container = document.getElementById("place-list");
  }

  init() {
    this.addId();
    this.bindEvents();
    this.subscribeEvents();
    this.places.forEach(place => this.renderPlace(place));
  }

  addId() {
    this.places.forEach(place => place.id = `${place.coordinates.ltd}${place.coordinates.lgt}`);
  }

  renderPlace(place) {
    const template = `
                    <li data-id="${place.id}">
                      <span>${place.title}</span>
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
    console.log("edit-place", li);
  }

  removePlace(target) {
    const li = target.closest('li');
    const id = li.getAttribute('data-id');
    const index = this.places.findIndex(place => place.id === id);
    if (index !== -1) {
      this.places.splice(index, 1);
      li.remove();
    }    
    eventBus.publish('removed_place', id);
  }

  subscribeEvents() {
    eventBus.subscribe('added_new_place', this.addPlace.bind(this));
  }
}