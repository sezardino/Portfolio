import AbsComponent from './absComponent';

const ACTIVE_CLASS = 'nav__link--active';

const headerTemplate = () => {
	return `
  <header class="header container">
    <button class="button button--hamburger header__button"></button>
    <a href="?home" class="logo">
      <img src="/assets/img/logo.svg" alt="logo">
    </a>
    <div class="menu header__menu">
      <button class="button button--close menu__button"></button>
      <nav class="nav nav--header menu__nav header__nav">
        <a href="#home" class="nav__link nav__link--active">
          Home
        </a>
        <a href="#about" class="nav__link">
          About
        </a>
        <a href="#skills" class="nav__link">
          Skills
        </a>
        <a href="#works" class="nav__link">
          Works
        </a>
        <a href="#contact" class="nav__link">
          Contact
        </a>
      </nav>
    </div>
  </header>`;
};

class HeaderComponent extends AbsComponent {
  navLinks: Array<HTMLAnchorElement>;
  openTrigger: HTMLButtonElement | null;
  closeTrigger: HTMLButtonElement | null;
  menu: HTMLDivElement | null;
  constructor() {
    super();
    this.navLinks = Array.from(this.getElement()!.querySelectorAll('a.nav__link'));
    this.openTrigger = this.getElement()!.querySelector('.button--hamburger');
    this.closeTrigger = this.getElement()!.querySelector('.button--close');
    this.menu = this.getElement()!.querySelector('.header__menu');
    this.addListeners();
  }
	getTemplate() {
		return headerTemplate();
  }

  checkActiveLink = (page) => {
    this.navLinks.map((item) => {
      const itemContent = item.textContent!.trim().toLowerCase();
      item.classList.remove(ACTIVE_CLASS);
      if (page === itemContent) {
        item.classList.add(ACTIVE_CLASS);
      }
    });
    setTimeout(this.closeMenu, 200);
  }

  openMenu = () => {
    this.menu!.classList.add('menu--active');
  }

  closeMenu = () => {
    this.menu!.classList.remove('menu--active');
  }

  addListeners() {
    this.openTrigger!.addEventListener('click', this.openMenu);
    this.closeTrigger!.addEventListener('click', this.closeMenu);
  }
}

export default HeaderComponent;
