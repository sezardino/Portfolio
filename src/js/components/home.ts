import AbsComponent from './absComponent';

const homeTemplate = () => {
	return `<section class="hero container animate__animated ">
  <p class="hero__img animate__animated animate__fadeInBottomRight">
    <picture>
      <source media="(min-width: 768px)" srcset="assets/img/hero_desktop.png"><img src="assets/img/hero.png" alt=""></picture>
  </p>
  <div class="hero__wrapper undefined">
    <h2 class="title title--hero hero__title"><span class="title title--name hero__title--name animate__delay-12 animate__animated animate__fadeInBottomLeft">Edward</span><span class="title title--surname hero__title--surname animate__animated animate__delay-13 animate__animated animate__fadeInBottomLeft">Arechwa</span></h2>
    <p class="text text--hero hero__text animate__animated animate__delay-14 animate__animated animate__fadeInBottomLeft">junior front-end developer</p>
  </div>
</section>`;
};

class HomePage extends AbsComponent {
	getTemplate() {
		return homeTemplate();
	}
}

export default HomePage;
