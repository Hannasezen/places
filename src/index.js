import css from "./css/style.css";
import loader from './images/loader.gif';
import places from './js/data/places.json';

import { Map } from './js/components/map';
import { Places } from "./js/components/places";
import { Form } from "./js/components/form";
import { Filter } from "./js/components/filters";


const map = new Map(places).init();
const placeList = new Places(places).init();
const form = new Form(places).init();
const filter = new Filter(places).init();
