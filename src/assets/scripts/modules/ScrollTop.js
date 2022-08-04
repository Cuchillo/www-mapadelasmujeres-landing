import { Basics } from '../_app/cuchillo/core/Basics';
import { GetBy } from '../_app/cuchillo/core/Element';
import { Scroll } from '../_app/cuchillo/scroll/Scroll';

export default class ScrollTop {
  static container = GetBy.id("scroll-top");

  static init () {
    ScrollTop.container.addEventListener(Basics.clickEvent, () => {
        Scroll.goto(0);
    });
  }
}
