import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Dashboard = () => {
  return (
    <Container className="my-4">
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Welcome to Cybersecurity Sentinel</Card.Title>
              <Card.Text>
                This is your personalized dashboard for monitoring and protecting your websites against cybersecurity threats.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;