import React, {PropTypes} from 'react'
import ReactDOM from 'react-dom'
import cn from 'classnames'
import style from './style/page.css'

export default class Page extends React.PureComponent{

	render(){
		return <div className={style.page}>
			{this.props.children}
		</div>
	}
}