import './scss/base.scss';
import './json/test.json';
const App = require('./js/app.js');
const app = new App();
document.addEventListener("DOMContentLoaded", app.init.bind(app));