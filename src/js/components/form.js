import { eventBus } from '../modules/eventbus';
import { EVENTS } from '../constants/events';
import validateForm from '../modules/validate-form';

export class Form {
  constructor(data) {
    this.places = data;
    this.addPlaceBtn = document.getElementById('add-place-btn');
    this.savePlaceBtn = document.getElementById('save-place-btn');
    this.form = document.getElementById('form');

    this.inputs = {
      title: form.querySelector('[name="place-title"]'),
      description: form.querySelector('[name="place-description"]'),
      start: form.querySelector('[name="place-start"]'),
      end: form.querySelector('[name="place-end"]'),
      ltd: form.querySelector('[name="place-ltd"]'),
      lgt: form.querySelector('[name="place-lgt"]'),
    };

    this.place = {};

    this.formId = '';

    this.defaultPlace = {
      title: '',
      description: '',
      openhours: {
        start: '09:00',
        end: '18:00'
      },
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
    this.subscribeToEvents();
  }

  getCoords() {
    const success = (res) => {
      this.defaultPlace.coordinates = {
        ltd: res.coords.latitude,
        lgt: res.coords.longitude,
      };
    };
    const error = (error) => console.error(error.message);
    return window.navigator.geolocation.getCurrentPosition(success, error);
  }

  bindEventHandlers() {
    this.addPlaceBtn.addEventListener('click', this.showModal.bind(this));
    this.form.addEventListener('submit', this.savePlace.bind(this));
  }

  showModal(id) {
    let obj;
    if (typeof id === 'string'){
      obj = this.findPlace(id);
      this.addFormId(id);
    } else {
      this.form.removeAttribute('data-id');
      this.formId = '';
    }
    this.fillForm(obj);
    document.body.classList.add('form-open');
  }

  serializeForm(form) {
    const title = form.querySelector('[name="place-title"]').value;
    const description = form.querySelector('[name="place-description"]').value;
    const start = form.querySelector('[name="place-start"]').value;
    const end = form.querySelector('[name="place-end"]').value;
    const ltd = form.querySelector('[name="place-ltd"]').value;
    const lgt = form.querySelector('[name="place-lgt"]').value;

    const id = this.formId ? this.formId : `${ltd}${lgt}`;
    const label = title[0].toUpperCase();

    return {
      title,
      description,
      openhours: {
        start,
        end
      },
      coordinates: {
        ltd,
        lgt
      },
      id,
      label
    }
  }

  savePlace(e) {
    e.preventDefault();
    const serializedPlace = this.serializeForm(this.form);

    if(this.validateForm(this.form)) {
      const newPlace = Object.assign({}, this.place, serializedPlace);
      if(this.formId) {
        this.editExistingPlace(newPlace);
      } else {
        this.createNewPlace(newPlace);
      }
      this.clearForm();
      this.closeForm();
      eventBus.publish(EVENTS.REFRESH_PLACES);
    }
  }

  createNewPlace(newPlace) {
    this.places.push(Object.assign({}, this.defaultPlace, newPlace));
    this.sendPost(newPlace);
  }

  editExistingPlace(newPlace) {
    const index = this.places.findIndex(place => place.id === this.formId);
    const oldPlace = this.places[index];
    this.places.splice(index, 1, Object.assign(oldPlace, newPlace));
    eventBus.publish(EVENTS.EDIT_PLACE);
    this.sendPut(newPlace);  
  }

  sendPost(data) {
    const xhr = new XMLHttpRequest();
    const json = JSON.stringify(data);
    xhr.open('POST', '/my-request');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
      console.log(xhr.response);
    };
    xhr.send(json);
  }

  sendPut(data) {
    const xhr = new XMLHttpRequest();
    const json = JSON.stringify(data);
    xhr.open('PUT', '/my-request');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
      console.log(xhr.response);
    };
    xhr.send(json);
  }

  clearForm() {
    this.inputs.title.value = '';
    this.inputs.description.value = '';
    this.inputs.start.value = '';
    this.inputs.end.value = '';
    this.inputs.ltd.value = '';
    this.inputs.lgt.value = '';
  }

  closeForm() {
    document.body.classList.remove('form-open');
  }

  subscribeToEvents() {
    eventBus.subscribe(EVENTS.OPEN_PLACE_FOR_EDITING, this.showModal.bind(this));
  }

  addFormId(id) {
    this.form.setAttribute('data-id', id);
    this.formId = id;
  }

  validateForm(form) {
    return true;
  }

  fillForm(obj = this.defaultPlace) {
    this.inputs.title.value = obj.title;
    this.inputs.description.value = obj.description;
    this.inputs.start.value = obj.openhours.start;
    this.inputs.end.value = obj.openhours.end;
    this.inputs.ltd.value = obj.coordinates.ltd;
    this.inputs.lgt.value = obj.coordinates.lgt;
  }

  findPlace(id) {
    return this.places.find(place => place.id === id);
  }
}