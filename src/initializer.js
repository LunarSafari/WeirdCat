import routes from 'json!./api_routes.json'
import App from './app'

var baseUrl = 'http://localhost:3000'

var app = new App

function defineRoute([name, path], app){
	app[`${name}_path`] = (...args) => {
		var result = []
		var path_array = path.split(/:[^\/]+/i)
		while(args.length > 0){
			result.push(path_array.shift())
			result.push(args.shift())
		}
		var result_path = result.concat(path_array).join('')
		return `${baseUrl}${result_path}`
	}
}

routes.map(x => defineRoute(x, app))

window.app = app