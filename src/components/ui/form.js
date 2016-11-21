import React, {PropTypes} from 'react'
import ReactDOM from 'react-dom'
import cn from 'classnames'
import style from './style/form.css'

class Form extends React.PureComponent{
	static propTypes = {
		onSubmit: PropTypes.func.isRequired
	}

	render(){
		return <form onSubmit={this.props.onSubmit}>
			{this.props.children}
		</form>
	}
}

class TextField extends React.PureComponent {
	static propTypes = {
		label: PropTypes.string,
		name: PropTypes.string
	}

	render(){
		return <div className={style.field}>
			<label>{this.props.label}</label>
			<input name={this.props.name} defaultValue={this.props.defaultValue}/>
		</div>
	}
}

class TextArea extends React.PureComponent {
	static propTypes = {
		label: PropTypes.string,
		name: PropTypes.string
	}

	render(){
		return <div className={style.field}>
			<label>{this.props.label}</label>
			<textarea name={this.props.name} defaultValue={this.props.defaultValue} />
		</div>
	}
}

Form.TextField = TextField
Form.TextArea = TextArea

export default Form