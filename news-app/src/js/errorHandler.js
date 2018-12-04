export default class SingletonHandler {
    constructor() {
        let template = `
        <div id="popup_overlay" class="modal-overlay">
            <div id="popup" class="modal">
            
                <a id="popup_close" class="close-modal">
                <svg viewBox="0 0 20 20">
                    <path fill="#000000" d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"></path>
                </svg>
                </a><!-- close modal -->

                <div class="modal-content">
                   <p id="popup_text"></p>
                </div><!-- content -->
            
            </div><!-- modal -->
        </div><!-- overlay -->`;
        let parser  = new DOMParser();
        let popup = parser.parseFromString(template, "text/xml");
        document.getElementById("popup_container").innerHTML = template;//(popup.firstChild);
        document.getElementById('popup_close').addEventListener("click", ()=> this._close(), false);
        
    }
    static getInstance() {
        if(!this._instance) {
            this._instance = new SingletonHandler(); 
        }
        return this._instance;
    }

    handleError(msg) {
        document.getElementById('popup_text').innerText = `Something went wrong...${msg}`;
        document.getElementById('popup_overlay').classList.add('active');
        document.getElementById('popup').classList.add('active');
        //alert(`Something went wrong...${msg}`);
    }

    _close() {
        document.getElementById('popup_overlay').classList.remove('active');
        document.getElementById('popup').classList.remove('active');
    }
}