import {skillsDataType} from '../api';
import AbsComponent from './absComponent';

const skillTemplate = (item) => {
	const {skill, level} = item;
	const arr = Array(5).fill('skill level');
	const dots = arr.map(
		(item, index) => `
    <li class="dots__item ${index <= level ? 'dots__item--active' : ''}">
      <p class="hidden">${item}</p>
    </li>`
	);
	return `
  <li class="skills-list__item  animate__animated animate__fadeInLeft ">
        <p class="skills-list__skill">${skill}</p>
        <ul class="dots skills-list__dots  animate__animated animate__fadeInLeft animate__delay-2">
          ${dots.join('')}
        </ul>
      </li>`;
};

const skillsTemplate = (data) => {
	const skills = data.map(skillTemplate);
	return `
  <section class="skills container">
  <h2 class="title title--main title--skills skills__title"><span class="row  animate__animated animate__fadeInRight animate__delay-0"> <span class="title__letter title__letter--scale">m</span><span class="title__letter title__letter--scale">y</span></span><span class="row  animate__animated animate__fadeInRight animate__delay-1"> <span class="title__letter title__letter--scale">S</span><span class="title__letter title__letter--scale">K</span><span class="title__letter title__letter--scale">i</span><span class="title__letter title__letter--scale">L</span><span class="title__letter title__letter--scale">l</span><span class="title__letter title__letter--scale">S</span></span></h2>
  <ul class="skills-list skills__skills-list  undefined">
    ${skills.join('')}
  </ul>
  </section>
  `;
};

class SkillsPage extends AbsComponent {
	data: skillsDataType;
	constructor(data) {
		super();
		this.data = data;
	}
	getTemplate() {
		return skillsTemplate(this.data);
	}
}

export default SkillsPage;
