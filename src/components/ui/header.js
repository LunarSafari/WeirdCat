import React, {PropTypes} from 'react'
import ReactDOM from 'react-dom'
import cn from 'classnames'
import style from './style/header.css'

export default class Header extends React.PureComponent{

	className(){
		var names = [style.button]
		if(this.props.color){
			names.push(style[this.props.color])
			names.push(style.colored)
		}
		return cn(names)
	}

	render(){
		return <div>
			<h1 className={style.title}>
				{this.props.title}
			</h1>
			<p className={style.subtitle}>{this.props.subtitle}</p>
		</div>
	}
}