import css from "./css/style.css";
import places from './js/data/places.json';

import { Map } from './js/components/map';
import { Places } from "./js/components/places";
import { Form } from "./js/components/form";


const map = new Map(places).init();
const placeList = new Places(places).init();
const form = new Form(places).init();
