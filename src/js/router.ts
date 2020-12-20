import controller from './controller';

const getLocation = () => {
	const hash = location.hash ? location.hash.slice(1) : '';
	const [name, id] = hash.split('/');
	return {name, params: {id}};
};

class Router {
	constructor() {
		this.hashCheck();
		this.init();
	}

	hashCheck() {
		let {
			name,
			params: {id},
		} = getLocation();
		name = name ? name : 'home';
		if (name) {
			controller.hashChange(name, id ? decodeURI(id) : id);
		}
	}

	init() {
		addEventListener('hashchange', this.hashCheck);
	}
}

export default Router;
