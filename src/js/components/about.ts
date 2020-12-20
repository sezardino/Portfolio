import AbsComponent from './absComponent';

const aboutTemplate = () => {
	return `
  <section class="about container"><h2 class="title title--main title--about about__title"><span class="row  animate__animated animate__rollIn animate__delay-0"> <span class="title__letter title__letter--scale">a</span><span class="title__letter title__letter--scale">b</span><span class="title__letter title__letter--scale">o</span><span class="title__letter title__letter--scale">u</span><span class="title__letter title__letter--scale">t</span></span><span class="row  animate__animated animate__rollIn animate__delay-1"> <span class="title__letter title__letter--scale">m</span><span class="title__letter title__letter--scale">e</span></span></h2><div class="about__wrapper"><p class="text text--about about__text animate__animated animate__rollIn animate__delay-2">I am a junior front-end developer. I create websites and web-applications using modern technologies based on modern web-standards.</p><br><p class="text text--about about__text animate__animated animate__rollIn animate__delay-2">I am always up to date with the latest trends in web-technologies and bestPracticed, and I carry out the tasks entrusted to me accurately and in time</p></div></section>
`;
};

class AboutPage extends AbsComponent {
	getTemplate() {
		return aboutTemplate();
	}
}

export default AboutPage;
