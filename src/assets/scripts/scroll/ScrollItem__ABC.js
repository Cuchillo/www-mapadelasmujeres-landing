import gsap, { Power4 } from 'gsap';
import { GetBy } from '../_app/cuchillo/core/Element';

import { Scroll } from '../_app/cuchillo/scroll/Scroll';
import VScroll_Item from '../_app/cuchillo/scroll/VScroll_Item';

class ScrollItem__ABC extends VScroll_Item {
  _number;
  _target;

  //==================================================================================================================
  //          CONSTRUCTOR
  //==================================================================================================================
  constructor(__link, __index, __scroller) {
    super(__link, __index, __scroller);

    this._number = GetBy.selector('.__title b', __link)[0];
    this._target = { val: 0 };
    
    this.opts.offsetShow = window.innerHeight * .75;
    
    this.onShow = () => {
      
      const { width } = this._number.getBoundingClientRect();
      this._number.style = 'display: inline-block; width: ' + width + 'px';

      gsap.to(this._target, {
        val: 4.6,
        duration: 2.5, 
        roundProps: 'd',
        ease: Power4.easeInOut,
        onUpdate: () => {
          this._number.innerHTML = `${this._target.val.toFixed(1)}%`.replace('.', ',');
        },
        onComplete: () => {
          this._number.style = '';
        }
      });
    };
    this.onHide = () => {};
    this.onMove = () => {};
  }
}

Scroll._registerClass('widget-abc', ScrollItem__ABC);
