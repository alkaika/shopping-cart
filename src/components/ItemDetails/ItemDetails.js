import React, { Component } from 'react'
import { Button, Accordion, Card, Row, Col } from 'react-bootstrap';

export default class ItemDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    }
  }

  render() {
  return (
    <div>
    <Accordion defaultActiveKey="0">
    <Card>
      <Card.Header>
      <Accordion.Toggle 
        as={Button} 
        variant='link'
        eventKey="0" 
        onClick={() => this.setState({open: !this.state.open})}
      >
      {this.state.open === false ? 'Hide' : 'View'} Item Details
      {this.state.open === false ? `-` : `+`} 
      </Accordion.Toggle>
      </Card.Header>
    <Accordion.Collapse eventKey="0">
     <Card.Body className='card-body'>
     <img 
      width={200}
      height={200}
      alt='thumbnail'
      src='https://i5.walmartimages.com/asr/4104a16d-4ebb-4387-ae36-2619f3d2f232_1.466980d10b5491837b6578303f1c4967.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff'
      />
      <Row className='show-grid'>
        <Col md={6}>
        <p>OFM Essentials Collection Racing Style Leather Gaming Chair (ESS-3085-BLU)</p>
        </Col>
        <Col>
          <strong> {`$${this.props.price}`} </strong>
        </Col>
        <Col> Qty: 1 </Col>
      </Row>
       </Card.Body>
    </Accordion.Collapse>
    </Card>
    </Accordion>
  </div>
  )
  }
}

  
    