import React, {PropTypes} from 'react'
import ReactDOM from 'react-dom'
import {Container, Header, Segment, Button, Divider, Modal, Form} from 'semantic-ui-react'
import ConceptCard from './components/concept_card'

app.get(app.concept_path(1)).then(data => {
	ReactDOM.render(<ConceptCard name={data.name} alias={data.alias} description={data.description} aspects={data.aspects}/>, document.querySelector('#main'))
})