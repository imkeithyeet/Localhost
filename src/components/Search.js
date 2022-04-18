import React from 'react';
import { Button, Form } from 'react-bootstrap';
import{Container, Row, Col} from 'react-bootstrap;

const Search=() =>{
  return(
    <Container>
        <Row>
         <Col>
         <Form>
          <Form.Row>
           <Col>
             <Form.Control placeholder="Search for new image..." />
            </Col>
          <Col>
       <Button></Button>
      </Col>
    </Form.Row>
   </Form>
    </Col>
     </Row>
    </Container>
  );
};

export default Search;