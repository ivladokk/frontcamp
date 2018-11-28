export default class Mask {
    static show() {
        let mask = document.getElementById('loading');
        mask.classList.add('show-mask');
    }
    static hide() {
        let mask = document.getElementById('loading');
        mask.classList.remove('show-mask');
    }
}
