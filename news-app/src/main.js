import './scss/base.scss';
import './scss/news.scss';
import './scss/modal.scss';
import './scss/mask.scss';
import './json/test.json';
import App from './js/app.js';
const app = new App();
document.addEventListener("DOMContentLoaded", app.init.bind(app));