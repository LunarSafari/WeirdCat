import React, {PropTypes} from 'react'
import ReactDOM from 'react-dom'
import cn from 'classnames'
import style from './style/expandable.css'
import sectionStyle from './style/section.css'

export default class Expandable extends React.Component{

	static propTypes = {
		title: PropTypes.string.isRequired,
		content: PropTypes.string.isRequired,
	}

	state = {
		expanded: false
	}

	handleExpand(){
		this.setState({expanded: !this.state.expanded})
	}

	iconClassName(){
		var names = [sectionStyle.icon]
		if(this.state.expanded){
			names.push(style.caretDown)
		} else {
			names.push(style.caretRight)
		}
		return cn(names)
	}

	render(){
		return <div>
			<h3 className={style.title} onClick={::this.handleExpand}><i className={this.iconClassName()}></i>{this.props.title}</h3>
			{do{
				if(this.state.expanded){
					<div className={style.content}>{this.props.content}</div>
				}
			}}
		</div>
	}
}