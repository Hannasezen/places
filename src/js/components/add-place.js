import { eventBus } from '../modules/eventbus';
import validateForm from '../modules/validate-form';

export class AddPlace {
  constructor(data) {
    this.places = data;
    this.addPlaceBtn = document.getElementById('add-place-btn');
    this.savePlaceBtn = document.getElementById('save-place-btn');
    this.addPlaceForm = document.getElementById('add-place-form');

    this.place = {
      title: '',
      description: '',
      open: '',
      coordinates: {
        ltd: '',
        lgt: '',
      },
      keywords: [],
      color: 'yellow',
      label: 'C',
    }
  }

  init() {
    this.getCoords();
    this.bindEventHandlers();
  }

  getCoords() {
    const success = (res) => {
      this.place.coordinates = {
        ltd: res.coords.latitude,
        lgt: res.coords.longitude,
      };
      this.addDefaultValues(res.coords);
    };
    const error = (error) => console.error(error.message);
    return window.navigator.geolocation.getCurrentPosition(success, error);
  }

  addDefaultValues(coords) {
    const ltdInput = this.addPlaceForm.querySelector('[name="place-ltd"]');
    const lgtInput = this.addPlaceForm.querySelector('[name="place-lgt"]');
    ltdInput.setAttribute('value', coords.latitude);
    lgtInput.setAttribute('value', coords.longitude);
  }

  bindEventHandlers() {
    this.addPlaceBtn.addEventListener('click', this.showModal.bind(this));
    this.addPlaceForm.addEventListener('submit', this.savePlace.bind(this));
  }

  showModal() {
    this.addPlaceForm.classList.remove('hidden');
  }

  serializeForm(form) {
    const title = form.querySelector('[name="place-title"]').value || 'New Place';
    const description = form.querySelector('[name="place-description"]').value || 'No discription';
    const openhours = form.querySelector('[name="place-openhours"]').value;
    const ltd = form.querySelector('[name="place-ltd"]').value;
    const lgt = form.querySelector('[name="place-lgt"]').value;

    const id = `${ltd}${lgt}`;

    return {
      title,
      description,
      openhours,
      coordinates: {
        ltd,
        lgt
      },
      id
    }
  }

  savePlace(e) {
    e.preventDefault();
 
    if (this.validateForm(this.addPlaceForm)) {
      const serializedPlace = this.serializeForm(this.addPlaceForm);
      const newPlace = Object.assign({}, this.place, serializedPlace);
      this.places.push(newPlace);
      eventBus.publish('added_new_place', newPlace);
    }
  }

  validateForm(form) {
    return true;
  }
}