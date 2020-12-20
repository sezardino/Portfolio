import {PAGES, RENDER_POSITION} from '../const';

const getActualLinks = (): [next: string, prev: string] => {
	let next: string, prev: string;
  const locationUrl: string = location.hash.split('#')[1];
	if (locationUrl === undefined) {
		prev = '#contact';
		next = '#about';
	}
	switch (locationUrl) {
		case PAGES.HOME:
			prev = '#contact';
			next = '#about';
			break;
		case PAGES.ABOUT:
			prev = '#home';
			next = '#skills';
			break;
		case PAGES.SKILLS:
			prev = '#about';
			next = '#works';
			break;
		case PAGES.WORKS:
			prev = '#skills';
			next = '#contact';
			break;
		case PAGES.CONTACT:
			prev = '#works';
			next = '#home';
			break;
		default:
			break;
  }
	return [prev, next];
};

const touch = {
	event: false,
	startX: 0,
	dist: 0,
	shiftX: 0,
	startTime: 0,
	time: 0,
	minDist: 60,
	maxDist: 400,
	maxTime: 700,
	minTime: 150,
};

const swipe = (evt: TouchEvent, action) => {
	touch.startX = Math.floor(evt.changedTouches[0].clientX);
	touch.startTime = new Date().getTime();
	if (!touch.event) {
		touch.event = true;
		const touchendHandler = (evt) => {
			const endTime = new Date().getTime();
			touch.time = endTime - touch.startTime;
			touch.shiftX = Math.floor(evt.changedTouches[0].clientX) - touch.startX;
			touch.dist = Math.abs(touch.shiftX);
			if (
				touch.dist < touch.minDist ||
				touch.dist > touch.maxDist ||
				touch.time < touch.minTime ||
				touch.time > touch.maxTime
			) {
				return;
			}
			if (
				touch.dist > touch.minDist ||
				touch.dist < touch.maxDist ||
				touch.time > touch.minTime ||
				touch.time < touch.maxTime
			) {
				if (touch.shiftX < 0) {
					action('next');
				}
				if (touch.shiftX > 0) {
					action('prev');
				}
			}
		};
		document.addEventListener('touchend', (evt) => {
			touchendHandler(evt);
		});
		document.removeEventListener('touchend', (evt) => {
			touchendHandler(evt);
		});
	}
};

const createElement = (template: string): ChildNode | null => {
	const element = document.createElement(`div`);
  element.innerHTML = template;
	return element.firstElementChild;
};

const removeComponent = (component) => {
	component.getElement().remove();
	component.removeElement();
};

const renderComponent = (container, component, place) => {
  container.insertAdjacentElement(place, component.getElement());
};

export {getActualLinks, swipe, createElement, renderComponent, removeComponent};
