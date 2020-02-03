import css from "./styles/index.scss";
import loader from './images/loader.gif';

import { Map } from './js/components/map';
import { Places } from "./js/components/places";
import { Form } from "./js/components/form";
import { Filter } from "./js/components/filters";

function startApp(places) {
  new Map(places).init();
  new Places(places).init();
  new Form(places).init();
  new Filter(places).init();
}

function getPosts() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', '/places');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = function() {
    const places = JSON.parse(xhr.response);
    startApp(places);
  };
  xhr.send();
}

getPosts();
