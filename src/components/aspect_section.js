import React, {PropTypes} from 'react'
import ReactDOM from 'react-dom'
import {Page, Section, Header, Expandable, Modal, Button, Form} from './ui'

export default class AspectSection extends React.Component{
	static propTypes = {
		name: PropTypes.string.isRequired,
		description: PropTypes.string,
	}

	state = {
		isEditing: false,
		isSubmitting: false,
		name: this.props.name,
		description: this.props.description,
	}

	edit(){
		this.setState({isEditing: true})
	}

	delete(){

	}

	save(e){
		e.preventDefault()
		var formData = new FormData(e.target)
		app.patch(app.aspect_path(this.props.id), formData).then(e => {
			this.setState({isSubmitting: false, isEditing: false})
			var data = {}
			formData.kq(Array.from).map(([k,v]) => data[k] = v)
			this.setState(data)
		})
		this.setState({isSubmitting: true})
	}

	handleModalCancel(){
		this.setState({isEditing: false})
	}

	render(){
		return(
			<Section editable deletable onEdit={::this.edit} onDelete={::this.delete}>
				<Expandable title={this.state.name} content={this.state.description} />
				<Modal opened={this.state.isEditing}>
					<Form onSubmit={::this.save}>
						<Form.TextField name="name" label="Name" defaultValue={this.state.name} />
						<Form.TextArea name="description" label="Description" defaultValue={this.state.description}/>
						<Button color="blue" type="submit">Save</Button>
						<Button onClick={::this.handleModalCancel}>Cancel</Button>
					</Form>
				</Modal>
			</Section>
		)
	}
}