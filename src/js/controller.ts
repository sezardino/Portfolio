import AboutPage from "./components/about";
import ContactPage from "./components/contact";
import HomePage from "./components/home";
import PopupPage from "./components/popup";
import SkillsPage from "./components/skills";
import WorksPage from "./components/works";
import api, { skillsDataType, worksDataType } from './api';
import { getActualLinks, renderComponent, swipe, removeComponent } from "./services";
import { Component, FooterComponent } from "./components";
import { PAGES } from "./const";
import HeaderComponent from "./components/header";

type ControllerType = {
  hashChange: (componentName: string, id?: string | undefined) => void;
  loadData: (handler: Function) => void;
  swipeInit: () => void;
  render: () => void;
}

class Controller implements ControllerType {
	app: HTMLDivElement | null;
	page: Component | null;
	skillsData: skillsDataType | null;
  worksData: worksDataType | null;
  header: Component;
  footer: Component;
  actualPage: string | null;

	constructor(app: string ) {
    this.app = document.querySelector(app);
    this.actualPage = null;
    this.header = new HeaderComponent();
    this.footer = new FooterComponent();
    this.page = null;
    this.skillsData = null;
    this.worksData = null;
  }

  hashChange = (componentName, id?) => {
    if(!this.worksData) {
      this.renderStatic();
      this.loadData(() => this.hashChange(componentName, id));
      this.swipeInit();
      if(componentName !== 'works' && componentName !== 'skills') {
        this.actualPage = componentName;
        this.render();
      }
    } else {
      if(this.actualPage !== componentName) {
        this.actualPage = componentName;
        this.render();
      }
      if(id) {
        this.renderWork(id);
      }
    }
  }

  loadData = (handler) => {
    api.loadSkills((data) => {
      this.skillsData = data;
      if(this.worksData) {
        handler();
      }
    });
    api.loadWorks((data) => {
      this.worksData = data;
      if(this.skillsData) {
        handler();
      }
    });
  }

	swipeInit() {
    document.addEventListener('touchstart', (evt) =>
      swipe(evt, (direction: string) => {
        const [next, prev] = getActualLinks();
        if (direction === 'next') {
          location.hash = prev;
        } else {
          location.hash = next;
        }
      })
    );
  }

  renderWork = (name) => {
    const data = this.worksData!.find((item) => item.name === name)
    renderComponent(this.app!, new PopupPage(data), 'beforeend');
  }

  renderStatic() {
    renderComponent(this.app!, this.footer, 'beforeend');
    renderComponent(this.app!, this.header, 'beforeend');
  }

  render = (id?) => {
    if(this.page) {
      removeComponent(this.page)
    }
    this.header.checkActiveLink(this.actualPage!);
    this.footer.changeActiveDot(this.actualPage!);
		switch (this.actualPage) {
			case PAGES.HOME:
				this.page = new HomePage();
				break;
			case PAGES.ABOUT:
        this.page = new AboutPage();
				break;
			case PAGES.SKILLS:
          this.page = new SkillsPage(this.skillsData);
				break;
			case PAGES.WORKS:
        this.page = new WorksPage(this.worksData!);
				break;
			case PAGES.CONTACT:
        this.page = new ContactPage();
				break;
        }
    renderComponent(this.app!, this.page, 'beforeend');
  }
}

export default new Controller('#app')
