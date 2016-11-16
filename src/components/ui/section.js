import React, {PropTypes} from 'react'
import ReactDOM from 'react-dom'
import cn from 'classnames'
import style from './style/section.css'

export default class Section extends React.PureComponent{

	static propTypes = {
		editable: PropTypes.boolean,
		deletable: PropTypes.boolean
	}

	render(){
		return <section className={style.section}>
			{do{
				if(this.props.editable){
					<a style={{
						float: 'right'
					}}>Edit</a>
				}
			}}
			{this.props.children}
		</section>
	}
}