import './scss/base.scss';
const App = require('./js/app.js');
const app = new App();
document.addEventListener("DOMContentLoaded", app.init.bind(app));