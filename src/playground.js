import React, {PropTypes} from 'react'
import ReactDOM from 'react-dom'
import ConceptCard from './components/concept_card'
import {Button, Header, Section, Page} from './components/ui'

import './components/ui/style/base.css'

//app.get(app.concept_path(1)).then(data => {
//	ReactDOM.render(<ConceptCard name={data.name} alias={data.alias} description={data.description} aspects={data.aspects}/>, document.querySelector('#main'))
//})

ReactDOM.render(
	<Page>
		<Section editable deletable>
			<Header>Title</Header>
			<Button color="blue" onClick={e => console.log(e)}>Primary</Button>
		</Section>
		<Section>
			Description
		</Section>
	</Page>
, document.querySelector('#main'))