import css from "./css/style.css";
import places from './js/data/places.json';

import { Map } from './js/components/map';
import { Places } from "./js/components/places";
import { AddPlace } from "./js/components/add-place";


const map = new Map(places).init();
const placeList = new Places(places).init();
const addPlace = new AddPlace(places).init();
