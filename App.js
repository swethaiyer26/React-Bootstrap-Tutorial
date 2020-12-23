import React, { useCallback, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {Container,Row,Col,Button,Alert,Breadcrumb,Card,Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  const [message, setMessage] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [url, setUrl] = useState('/api');

  const fetchData = useCallback(() => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`status ${response.status}`);
        }
        return response.json();
      })
      .then(json => {
        setMessage(json.message);
        setIsFetching(false);
      }).catch(e => {
        setMessage(`API call failed: ${e}`);
        setIsFetching(false);
      })
  }, [url]);

  useEffect(() => {
    setIsFetching(true);
    fetchData();
  }, [fetchData]);

  return (
    <div className="App">
      <header className="App-header">
      <Container>
        <Form>
          <Row>
            <Col>
            <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="swetha@abc.com"/>
          <Form.Text type="text-muted">
            we will never share your email address.
          </Form.Text>
          </Form.Group>
            </Col>
            <Col>
            <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password"/>
          </Form.Group>
          </Col>
          </Row>
         <Button variant="secondary">Login</Button>
        </Form>
        <Card classname="mb-3" style={{color:"green"}}>
        <Card.Img  src="https://picsum.photos/200/80"/>
        <Card.Body>
        <Card.Title>Card Example</Card.Title>
        <Card.Text>This is an example of react bootstrap card</Card.Text>
        </Card.Body>
        </Card>
        </Container>
        
      </header>
    </div>
  
  );
}

export default App;
