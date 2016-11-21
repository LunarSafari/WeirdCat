import React, {PropTypes} from 'react'
import ReactDOM from 'react-dom'
import cn from 'classnames'
import style from './style/modal.css'

export default class Modal extends React.Component{

	static propTypes = {
		opened: PropTypes.bool,
	}

	state = {
		opened: !!this.props.opened
	}

	componentWillReceiveProps(props){
		this.setState({opened: !!props.opened})
	}

	handleDimmerClick(){
		//this.setState({opened: !this.state.opened})
	}

	render(){
		return <div>
			{do{
				if(this.state.opened){
					<div className={style.dimmer} onClick={::this.handleDimmerClick}>
						<div className={style.modal}>
							{this.props.children}
						</div>
					</div>
				}
			}}
		</div>
	}
}