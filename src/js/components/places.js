export class Places {
  constructor(data) {
    this.places = data;
    this.container = document.getElementById("place-list");
  }

  init() {
    this.bindEvents();
    this.places.forEach(place => this.renderPlace(place));
  }

  renderPlace(place) {
    const template = `
                    <li>
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
      this.editPlace();
    } else if (target.classList.contains("remove-place")) {
      this.removePlace();
    }
  }

  editPlace() {
    console.log("edit-place");
  }

  removePlace() {
    console.log("remove-place");
  }
}