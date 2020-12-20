import AbsComponent from './absComponent';

const contactTemplate = () => {
	return `
  <section class="contact container"><div class="contact__wrapper"><h2 class="title title--contact title--main contact__title animate__animated animate__jackInTheBox">Contact</h2><ul class="info contact__info"><li class="info__item animate__delay-16 animate__animated animate__zoomIn"><span class="info__def">tel:</span><span class="info__data">+48 576 048 669</span></li><li class="info__item animate__delay-17 animate__animated animate__zoomIn"><span class="info__def">e-mail:</span><span class="info__data">e.arechwa@gmail.com</span></li></ul></div><ul class="social contact__social"><li class="social__item animate__delay-13 animate__animated animate__zoomIn"><a href="https://github.com/sezardino" target="blank" class="social__link">git</a></li><li class="social__item animate__delay-14 animate__animated animate__zoomIn"><a href="https://www.facebook.com/edvard.arekhva/" target="blank" class="social__link">f</a></li><li class="social__item animate__delay-15 animate__animated animate__zoomIn"><a href="https://vk.com/sezardino" target="blank" class="social__link">vk</a></li></ul></section>`;
};

class ContactPage extends AbsComponent {
	getTemplate() {
		return contactTemplate();
	}
}

export default ContactPage;
