import { getActualLinks } from '../services';
import AbsComponent from './absComponent';

const footerTemplate = () => {
	return `
  <footer class="footer container">
    <a href="#contact" class="button button-arrow button-arrow--prev footer__prev">
      <span class="hidden">Prev page</span>
    </a>
    <nav class="nav nav--footer footer__nav">
      <div class="nav__link nav__link--active"><span class="hidden">home</span></div>
      <div class="nav__link"><span class="hidden">about</span></div>
      <div class="nav__link"><span class="hidden">skills</span></div>
      <div class="nav__link"><span class="hidden">works</span></div>
      <div class="nav__link"><span class="hidden">contact</span></div>
    </nav>
    <a href="#about" class="button button-arrow button-arrow--next footer__next">
      <span class="hidden">Next page</span>
    </a>
  </footer>`;
};

class FooterComponent extends AbsComponent {
	prevTrigger: HTMLAnchorElement | null;
	nextTrigger: HTMLAnchorElement | null;
	dots: Array<HTMLDivElement>;
  constructor() {
    super();
    this.prevTrigger = this.getElement()!.querySelector('.button-arrow--prev');
		this.nextTrigger = this.getElement()!.querySelector('.button-arrow--next');
		this.dots = Array.from(this.getElement()!.querySelectorAll('div.nav__link'));
  }
	getTemplate() {
		return footerTemplate();
  }

  changeActiveDot = (page?) => {
		this.dots.map((item) => {
      const itemLabel: string | null = item.children[0].textContent;
      item.classList.remove('nav__link--active');
			if (page === itemLabel) {
				item.classList.add('nav__link--active');
			}
    });
    this.bindLinks();
  };

  bindLinks = () => {
    const [prevLink, nextLink] = getActualLinks();
    this.prevTrigger!.href = prevLink;
    this.nextTrigger!.href = nextLink;
  }

}

export default FooterComponent;
