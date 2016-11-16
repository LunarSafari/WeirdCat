import React, {PropTypes} from 'react'
import ReactDOM from 'react-dom'
import {Container,Segment, Divider, Form, Accordion, Icon} from 'semantic-ui-react'
import {Page, Section, Header, Expandable, Modal, Button} from './ui'

export default class ConceptCard extends React.Component{
	static propTypes = {
		name: PropTypes.string.isRequired,
		alias: PropTypes.string,
		description: PropTypes.string,
		aspects: PropTypes.array
	}

	state = {
		isEditing: false,
		isSubmitting: false,
		name: this.props.name,
		alias: this.props.alias,
		description: this.props.description,
		aspects: this.props.aspects
	}

	edit(){
		this.setState({isEditing: true})
	}

	save(e, form){
		e.preventDefault()
		app.patch(app.concept_path(1), form).then(e => {
			this.setState({isSubmitting: false, isEditing: false})
			this.setState(form)
		})
		this.setState({isSubmitting: true})
	}

	render(){
		var subtitle = this.state.alias && this.state.alias.length > 0 ? `Alias: ${this.state.alias}` : null
		return <Page>
			<Section editable deletable onEdit={::this.edit} onDelete={e=>e}>
				<Header title={this.state.name} subtitle={subtitle}/>
				<br />
				{this.state.description}
			</Section>
			{this.state.aspects.map(a => do {
				<Section editable deletable >
					<Expandable title={a.name} content={a.description} />
				</Section>
			})}
			<Modal opened={true}>
				<Button color="blue">Save</Button>
				<Button>Cancel</Button>
			</Modal>
		</Page>
	}
}