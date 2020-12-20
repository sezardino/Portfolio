import firebase from 'firebase/app';
import 'firebase/database';
import firebaseConfig from './firebaseConfig';

type worksDataType = {
	desktop: string,
	ghPages: string,
	git: string,
	mobile: string,
	mockup: string,
	name: string,
	technologyList: Array<string>,
};

type skillsDataType = {
	level: string,
	skill: string,
};

class Api {
	database: firebase.database.Database;
	api: firebase.app.App;
	constructor(config: Object) {
		this.api = firebase.initializeApp(config);
		this.database = firebase.database();
	}

	loadSkills(handler) {
		const skills = this.database.ref('skills');
		skills.on('value', (snapshot) => {
			const data: skillsDataType = snapshot.val();
			handler(data);
		});
	}

	loadWorks(handler) {
		const works = this.database.ref('works');
		works.on('value', (snapshot) => {
			const data: worksDataType = snapshot.val();
			handler(data);
		});
	}
}

const api = new Api(firebaseConfig);

export default api;
export {worksDataType, skillsDataType};
