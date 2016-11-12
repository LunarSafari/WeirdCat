
export default class App{
	get(path){
		return fetch(path).then(e => e.json())
	}

	post(path, data){
		return fetch(path, {
			method: 'POST',
			body: this.convertObjectToFormData(data)
		}).then(e => e.json())
	}

	patch(path, data){
		return fetch(path, {
			method: 'PATCH',
			body: this.convertObjectToFormData(data)
		}).then(e => e.json())
	}

	delete(path){
		return fetch(path, {method: 'DELETE'}).then(e => e.json())
	}

	convertObjectToFormData(obj){
		var form_data = new FormData()
		obj.kq(Object.keys).map(key => form_data.append(key, obj[key]))
		return form_data
	}
}