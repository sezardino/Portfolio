import {worksDataType} from '../api';
import AbsComponent from './absComponent';

const workTemplate = (item) => {
	const {name, mockup} = item;
	return `
  <li class="portfolio__item  animate__animated animate__flipInX animate__delay-14" data-id="${name}">
  <a href="${`#works/${name}`}"><img src=${mockup} alt="${name}"></a>
  </li>
  `;
};

const worksTemplate = (data) => {
	const works = data.map(workTemplate);
	return `
  <section class="portfolio container">
  <h2 class="title title--main title--portfolio portfolio__title"><span class="row  animate__animated animate__rotateInDownRight animate__delay-10"><span class="title__letter title__letter--scale">P</span><span class="title__letter title__letter--scale">o</span><span class="title__letter title__letter--scale">r</span><span class="title__letter title__letter--scale">t</span><span class="title__letter title__letter--scale">f</span></span><span class="row  animate__animated animate__rotateInDownRight animate__delay-11"><span class="title__letter title__letter--scale">o</span><span class="title__letter title__letter--scale">l</span><span class="title__letter title__letter--scale">i</span><span class="title__letter title__letter--scale">o</span></span></h2>
  <div class="portfolio__wrapper ">
    <ul class="portfolio__list  undefined animate__delay-1">
      ${works.join('')}
    </ul>
    <div class="scroll scroll--white portfolio__scroll  animate__animated animate__fadeIn animate__delay-5">
      <div class="scroll__track">
        <div class="scroll__bar" style="top: 0%; transform: translate(-50%, 0%);"></div>
      </div>
    </div>
  </div>
</section>`;
};

class WorksPage extends AbsComponent {
	data: worksDataType;

	constructor(data: worksDataType) {
		super();
		this.data = data;
	}

	getTemplate() {
		return worksTemplate(this.data);
	}
}

export default WorksPage;
