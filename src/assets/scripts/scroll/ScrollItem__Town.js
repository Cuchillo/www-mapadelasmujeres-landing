import gsap, { Power4 } from 'gsap';
import { GetBy } from '../_app/cuchillo/core/Element';

import { Scroll } from '../_app/cuchillo/scroll/Scroll';
import VScroll_Item from '../_app/cuchillo/scroll/VScroll_Item';

class ScrollItem__Town extends VScroll_Item {
  _streets;

  //==================================================================================================================
  //          CONSTRUCTOR
  //==================================================================================================================
  constructor(__link, __index, __scroller) {
    super(__link, __index, __scroller);

    /*this._streets = GetBy.class('show', __link);

    this.onShow = () => {
      for (let index = 0; index < this._streets.length; index++) {
        const element = this._streets[index];
        gsap.delayedCall(.5 + (index * .15), () => {
          element.classList.add('animated');
        });
      }
    };
    this.onHide = () => {};
    this.onMove = () => {};*/
  }
}

Scroll._registerClass('widget-town', ScrollItem__Town);
