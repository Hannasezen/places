import { eventBus } from '../modules/eventbus';

export class Filter {
  constructor(data) {
    this.places = data;
    this.openPlacesFilterBtn = document.querySelector('#filter-open-places')
  }

  init() {
    this.subscribeToEvents();
  }

  subscribeToEvents() {
    eventBus.subscribe('');
    this.openPlacesFilterBtn.addEventListener('click', this.showOpenPlaces.bind(this));
  }

  showOpenPlaces() {
    const nowTime = new Date().getHours();
    const filteredList = this.places.filter(place => {
      return nowTime > place.openhours.start.match(/\d+(?=\:)/)[0]
          && nowTime < place.openhours.end.match(/\d+(?=\:)/)[0];
    });
    eventBus.publish('show_filtered_places', filteredList);
  }
}