import React, {PropTypes} from 'react'
import ReactDOM from 'react-dom'
import cn from 'classnames'
import style from './style/button.css'

export default class Button extends React.PureComponent{
	static propTypes = {
		color: PropTypes.string
	}

	className(){
		var names = [style.button]
		if(this.props.color){
			names.push(style[this.props.color])
			names.push(style.colored)
		}
		return cn(names)
	}

	render(){
		return <button className={this.className()} onClick={this.props.onClick}>
			{this.props.children}
		</button>
	}
}