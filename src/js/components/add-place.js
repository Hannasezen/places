import { eventBus } from '../modules/eventbus';

export class AddPlace {
  constructor(data) {
    this.places = data;
    this.addPlaceBtn = document.getElementById('add-place-btn');
    this.savePlaceBtn = document.getElementById('save-place-btn');
    this.addPlaceForm = document.getElementById('add-place-form');

    this.place = {
      title: '',
      description: '',
      open: '9-00',
      coordinates: {
        ltd: '50.005063',
        lgt: '36.190219'
      },
      keywords: [],
      color: 'yellow',
      label: 'C',
    }
  }

  init() {
    this.bindEventHandlers();
  }

  bindEventHandlers() {
    this.addPlaceBtn.addEventListener('click', this.showModal.bind(this));
    this.addPlaceForm.addEventListener('submit', this.savePlace.bind(this));
  }

  showModal() {
    this.addPlaceForm.classList.remove('hidden');
  }

  savePlace(e) {
    e.preventDefault();
    const ltd = `${this.place.coordinates.ltd * 1 + (Math.random() - 0.5) / 20}`;
    const lgt = `${this.place.coordinates.lgt * 1 + (Math.random() - 0.5) / 20}`;
    const id = ltd + lgt;

    const serializedPlace = {
      title: "my-title",
      coordinates: {
        lgt,
        ltd
      },
      id,
    };
    if (this.validateForm(serializedPlace)) {
      const newPlace = Object.assign({}, this.place, serializedPlace);
      this.places.push(newPlace);
      eventBus.publish('added_new_place', newPlace);
    }
  }

  validateForm(place) {
    return true;
  }
}