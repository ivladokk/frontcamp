import 'babel-polyfill';
import 'whatwg-fetch';
import './../scss/base.scss';
import './../json/test.json';
import App from './app.js';
const app = new App();
document.addEventListener("DOMContentLoaded", app.init.bind(app));