import gsap from 'gsap';

import _Header from '../_app/cuchillo/layout/Header';
import { Power3 } from "gsap";
import { GetBy } from '../_app/cuchillo/core/Element';
import { Scroll } from '../_app/cuchillo/scroll/Scroll';

export default class Header extends _Header {
  static container = GetBy.id("Footer");
  static offsetElement = GetBy.id('widget-towns');

  _offsetFrom;

  static options = {
    show: {
      duration: .3,
      delay: 0,
      ease: Power3.easeOut
    },
    hide: {
      duration: .3,
      delay: 0,
      ease: Power3.easeIn
    }
  }

  // static show(__call) {}
  //static hide(__call) {}

  static resize () {
    this._offsetFrom = Header.offsetElement.offsetTop - window.innerHeight;
  }

  static loop () {
    const DELTA = Scroll.y - this.oldY;
    const POS_Y = Math.min(0, Math.max(-this.height, this.y + DELTA));

    if (Scroll.y * -1 >= this._offsetFrom) {
      if (Scroll.direction === -1 && !this.isShow) {
        this.show();
      } else if (Scroll.direction === 1) {
        this.isShow = false;
        if (this.isShowing) {
          gsap.killTweensOf(this);
        }
  
        if (Scroll.y <= 0) this.y = POS_Y;
      }
    } else {
      this.hide();
    }

    this.oldY = Scroll.y;
  }
}


