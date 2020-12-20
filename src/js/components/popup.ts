import {worksDataType} from '../api';
import {removeComponent} from '../services';
import AbsComponent from './absComponent';

const popupTemplate = (data) => {
  const {desktop, ghPages, git, mobile, name, technologyList} = data;
  const technologies = technologyList.map((item) => `<li class="technologies__item">${item}</li>`);
	return `
  <section class="popup">
    <div class=" popup__wrapper">
    <a href="#works" class="button button--close button--close--dark popup__button"></a>
      <h2 class="title title--main title--popup popup__title">${name}</h2>
      <div class="view popup__view">
        <div class="view__wrapper">
          <div class="view__mockup-wrapper">
            <div class="view__mockup view__mockup--desktop">
              <p class="view__img">
                <img src="${desktop}" alt="${name}">
              </p>
            </div>
          </div>
          <div class="scroll scroll--black view__scroll">
            <div class="scroll__track">
              <div class="scroll__bar" style="top: 0%; transform: translate(-50%, 0%);"></div>
            </div>
          </div>
        </div>
        <div class="view__buttons">
          <button class="button button-view view__button button-view--active" data-img="${desktop}">
            <div class="button__image">
              <img src="/assets/img/icons/desktop.png" alt="desktop icon">
            </div>
            <span class="button-view__text">Desktop</span>
          </button>
          ${mobile && `
          <button class="button button-view view__button" data-img="${mobile}">
            <div class="button__image">
              <img src="/assets/img/icons/mobile.png" alt="mobile icon">
            </div>
            <span class="button-view__text">Mobile</span>
          </button>`}
        </div>
      </div>
      <div class="description popup__description">
        <h2 class="title title--main title--popup description__title">${name}</h2>
        <div class="description__buttons"><a href="${git}" target="blank"
            class="button button--github button--popup description__button">View on GitHub</a><a
            href="${ghPages}" target="blank"
            class="button button--ghpages button--popup description__button">View</a></div>
        <div class="technologies description__technologies">
          <h3 class="title title--technologies technologies__title">Using Technologies</h3>
          <ul class="technologies__list">
            ${technologies.join('')}
          </ul>
        </div>
      </div>
    </div>
  </section>`;
};

const BUTTON_ACTIVE_CLASS = 'button-view--active'
const BUTTON_LABEL = {
  MOBILE: 'mobile',
  DESKTOP: 'desktop',
}

class PopupPage extends AbsComponent {
  data: worksDataType;
  buttons: Array<HTMLButtonElement> | null;
  img: HTMLImageElement | null;
  mockup: HTMLDivElement | null;
	constructor(data: worksDataType) {
		super();
    this.data = data;
    this.buttons = null;
    this.img = null;
    this.mockup = null;
		this.addListeners();
	}
	getTemplate() {
		return popupTemplate(this.data);
	}

	closePopup = () => {
    removeComponent(this);
    this.removeListeners()
  };

  buttonHandler = (target) => {
    const buttonLabel = target.children[1].textContent.toLowerCase().trim();
    const src = target.dataset.img!;
    this.img!.src = src;
    switch (buttonLabel) {
      case BUTTON_LABEL.DESKTOP:
        this.mockup?.classList.remove('view__mockup--mobile')
        this.mockup?.classList.add('view__mockup--desktop')
        break;
        case BUTTON_LABEL.MOBILE:
        this.mockup?.classList.remove('view__mockup--desktop')
        this.mockup?.classList.add('view__mockup--mobile')
        break;
    }
    this.buttons?.forEach((item) => {
      if(item === target) {
        item.classList.add(BUTTON_ACTIVE_CLASS);
      } else {
        item.classList.remove(BUTTON_ACTIVE_CLASS);
      }
    })
  }

	addListeners = () => {
    const element = this.getElement();
    this.img = element!.querySelector('img');
    this.mockup = element!.querySelector('.view__mockup');
    this.buttons = element!.querySelectorAll('button');
    this.buttons?.forEach((item) => {
      item.addEventListener('click', () => this.buttonHandler(item));
    })
    element!.querySelector('.popup__button').addEventListener('click', this.closePopup);
  };

  removeListeners = () => {
    this.getElement()!.querySelector('.popup__button').removeEventListener('click', this.closePopup);
    this.buttons?.forEach((item) => {
      item.removeEventListener('click', () => this.buttonHandler(item));
    })

  }
}

export default PopupPage;
