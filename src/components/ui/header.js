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
		return <h2 className={style.header}>
			{this.props.children}
		</h2>
	}
}