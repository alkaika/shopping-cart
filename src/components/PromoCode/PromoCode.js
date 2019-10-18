import React, { Component } from 'react';
import { Button, Accordion, Card, Row, Col, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { handleChange } from '../../actions/promoCodeActions';

class PromoCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
    open: false
    };
  }

handleChange = e => {
    this.props.handleChange(e);
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
          {this.state.open === false ? 'Apply' : 'Hide'} Promo Code
          {this.state.open === false ? `+` : `-`} 
          </Accordion.Toggle>
        </Card.Header>
    <Accordion.Collapse in={this.state.open} eventKey="0">
      <Card.Body className='promo-body'>
        <Row className='show-grid'>
          <Col md={12}>
            <Form>
              <Form.Group controlId='formInLineName'>
                <Form.Label>
                This Month's 10% Off Promo Code: DISCOUNT
                </Form.Label>
              <Form.Control 
                type='text'
                placeholder='Enter Promo Code'
                value={this.props.promoCode}
                onChange={this.handleChange}
              />
              </Form.Group>
              <Button
                block
                variant='success'
                className='btn-round'
                disabled={this.props.isDisabled}
                onClick={this.props.giveDiscount}
              >
              Apply
              </Button>
            </Form>
          </Col>
        </Row>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  </Accordion>
    </div>
  )
  }
}

const mapStateToProps = state => ({
    promoCode: state.promoCode.value
});

export default connect(mapStateToProps, { handleChange })(PromoCode);