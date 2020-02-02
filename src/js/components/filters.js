import { eventBus } from '../modules/eventbus';
import { EVENTS } from '../constants/events';

export class Filter {
  constructor(data) {
    this.places = data;
    this.openPlacesBtn = document.querySelector('#filter-open-places');
    this.isShowOpenPlaces = false;
  }

  init() {
    this.subscribeToEvents();
  }

  subscribeToEvents() {
    eventBus.subscribe(EVENTS.REFRESH_PLACES, this.showAllPlaces.bind(this));
    this.openPlacesBtn.addEventListener('click', this.toggleOpenPlacesBtn.bind(this));
  }

  toggleOpenPlacesBtn(e) {
    if (this.isShowOpenPlaces) {
      eventBus.publish(EVENTS.SHOW_ALL_PLACES);
    } else {
      this.showFilteredPlaces();
    }
    this.isShowOpenPlaces = !this.isShowOpenPlaces;
    e.target.closest('#filter-open-places').classList.toggle('open');
  }

  showFilteredPlaces() {
    const nowTime = new Date().getHours();
    const filteredList = this.places.filter(place => {
      return nowTime > place.openhours.start.match(/\d+(?=\:)/)[0]
          && nowTime < place.openhours.end.match(/\d+(?=\:)/)[0];
    });
    eventBus.publish(EVENTS.SHOW_FILTERED_PLACES, filteredList);
  }

  showAllPlaces() {
    this.isShowOpenPlaces = false;
    this.openPlacesBtn.classList.remove('open');
    eventBus.publish(EVENTS.SHOW_ALL_PLACES);
  }
}