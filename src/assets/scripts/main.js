import "core-js/stable";
import "regenerator-runtime/runtime";

import { Scroll } from './_app/cuchillo/scroll/Scroll';
import { VSticky } from './_app/cuchillo/scroll/insiders/VSticky';

import { Keyboard } from './_app/cuchillo/core/Keyboard';
import { Basics, isDebug, isMobile, isTouch } from './_app/cuchillo/core/Basics';
import { Accessibility } from './_app/cuchillo/core/Accessibility';
import { Statics } from './_app/cuchillo/utils/Statics';

import LoaderController from './_app/cuchillo/loaders/LoaderController';
import PagesLoader from './_app/cuchillo/loaders/PagesLoader';
import MediaLoader from './_app/cuchillo/loaders/MediaLoader';
import { ControllerPage } from './_app/cuchillo/pages/ControllerPage';
import { Metrics } from './_app/cuchillo/core/Metrics';
import Default from './pages/Default';
import EventDispatcher from './_app/cuchillo/core/EventDispatcher';
import Page from './_app/cuchillo/pages/Page';
import { Interaction, MrInteraction } from './_app/cuchillo/core/Interaction';
import { gsap } from "gsap";
import { ControllerWindow } from './_app/cuchillo/windows/ControllerWindow';
import Win from './_app/cuchillo/windows/Window';

import Wrap from './layout/Wrap';
import InterfaceCanvas from './_app/cuchillo/layout/InterfaceCanvas';
import Loading from './layout/Loading';
import BG from './_app/cuchillo/layout/Background';
import Cookies from './windows/Cookies';

import { ScrollItem__SliderScrollHorizontal } from './scroll/ScrollItem__SliderScrollHorizontal';
import { ScrollItem__ABC } from './scroll/ScrollItem__ABC';
import { ScrollItem__Town } from './scroll/ScrollItem__Town';
import WinSidemenu from "./windows/Sidemenu";
import { isThisSecond } from "date-fns";
import ScrollTop from "./modules/ScrollTop";
import Header from "./layout/Header";
import { GetBy } from "./_app/cuchillo/core/Element";

export default class Main {
  static scrollbar;
  static stats;
  
  static init () {
    Basics.id = "w11p_v005"; // ID para cookies
    
    Metrics.init(() => Main.resize()); // Tamaños y resize
    Keyboard.enable(); // ESC para cerrar ventana
    Accessibility.init(); // Utils accesibilidad
    Statics.init(); // Si estamos en debug pinta un FPS counter
    Interaction.init({ ajax: true }) // Posiciones del cursor (Movimiento, click...), Acciones links, drag...
    ControllerWindow.init(); // Control ventanas

    Basics.hasCookies = false;
    [...GetBy.selector("[data-cookiecategory='analytics']")].map(item=> {
      Basics.hasCookies = true;
    })
    

    BG.init(CMS_COLORS); // Control de paletas y color de fondo de pantallas. Automatico si añadimos un data-palette='loquesea' en el div con data-page
    InterfaceCanvas.init(); // Canvas de interface, se usa con Cursor
    Cookies.init(); // Checkea y saca el aviso de cookies

    LoaderController.add(new PagesLoader()); // Carga/Precarga de paginas HTML
    LoaderController.add(new MediaLoader()); // Carga/Precarga de imgs
    LoaderController.onComplete = () => Main.setup();
    // LoaderController.update = progress => {  };
    LoaderController.init();

    Header.init();
    Header.directHide();
    ScrollTop.init();

    this.doCuchilloInfo();
    
    // LOOP
    if (isDebug) {
      gsap.ticker.add(() => { Main.loopDebug(); });
    } else {
      gsap.ticker.add(() => { Main.loop(); });
    }

    //this.setupData();   
  }

  static setup () {
    this.setupEvents();
    // INIT PAGE
    ControllerPage.init(Wrap.mainholder);
  }

  static setupEvents () {
    EventDispatcher.addEventListener(Page.ON_SHOW, () => {
      //Cursor.start();
      Loading.stop();
    });
    EventDispatcher.addEventListener(Page.ON_HIDE, () => {
      //Cursor.hide();
    });
    EventDispatcher.addEventListener(Page.ON_HIDE_END, () => {
      Loading.start();
    });

    EventDispatcher.addEventListener(Win.ON_HIDE, () => { Scroll.setEnabled(true); });
    EventDispatcher.addEventListener(Win.ON_SHOW, () => { Scroll.setEnabled(false); });
  }

  static resize () {
    InterfaceCanvas.resize();
    ControllerPage.resize();
    Header.resize();
  }

  static loop () {
    ControllerPage.loop();
    InterfaceCanvas.loop();
    Header.loop();

    if (Scroll.isScrolling) Scroll.loop();
  }

  static loopDebug () {
    Statics.begin();
    this.loop();
    Statics.end();
  }

  static doCuchilloInfo () {
    console.log('%cby Cuchillo', 'background: #000; color: #bada55; padding:25px 100px;');
    console.log('⟶ http://cuchillo.studio');
    console.log('⟶ https://www.instagram.com/_cuchillo');
    console.log('⟶ https://twitter.com/somoscuchillo');
    console.log('⟶ https://twitter.com/mr__corrales');
    console.log('');
    console.log('Gsap by Greenshock');
    console.log('⟶ https://greensock.com');
    console.log('');
    console.log('Font: Fraktion Mono by Pangram Pangram');
    console.log('⟶ https://pangrampangram.com/products/fraktion');
    console.log('');
    console.log('SVGOMG');
    console.log('⟶ https://jakearchibald.github.io/svgomg/');
    console.log('');
    console.log('Favicon Generator');
    console.log('⟶ https://realfavicongenerator.net');
  }

  static setWorker () {
    if ('serviceWorker' in navigator && !isDebug) {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then(function () { });
    }
  }

  static setupData() {
    const data = this.data.split("_");
    const towns = {}

    let town = "";
    let isStreet = true;
    for(let i=0; i<this.data.length; i++) {
      //if(i+1<data.length) {
        if(!data[i]) break;

        if(isStreet && isNaN(data[i])) {
          isStreet = false;
          town = data[i];
          towns[town] = {
            town: town,
            streets: []
          }
        } else if(!isNaN(data[i])){
          isStreet = false;
        } else {
          isStreet = true;
          towns[town].streets.push(this.data[i].trim());
        }
      }
  }
}

if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
  Main.init();
} else {
  document.addEventListener('DOMContentLoaded', Main.init);
}