import React, {PropTypes} from 'react'
import ReactDOM from 'react-dom'
import cn from 'classnames'
import style from './style/section.css'

export default class Section extends React.PureComponent{

	static propTypes = {
		editable: PropTypes.bool,
		deletable: PropTypes.bool,
		onEdit: PropTypes.func,
		onDelete: PropTypes.func
	}

	render(){
		return <section className={style.section}>
			<div className={style.tools}>
				{do{
					if(this.props.editable){
						<i className={cn(style.edit, style.icon)} onClick={this.props.onEdit}></i>
					}
				}}
				{do{
					if(this.props.deletable){
						<i className={cn(style.delete, style.icon)} onClick={this.props.onDelete}></i>
					}
				}}
			</div>
			{this.props.children}
		</section>
	}
}