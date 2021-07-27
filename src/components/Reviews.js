import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import StarRating from "./StarRating";

const Reviews = () => {
  return (
    <Row>
      <Col md={4}>
        <Card variant="light">
          <Card.Header>
            <Row>
              <Col>Bash</Col>
              <Col style={{ "text-align": "right" }}>
                <StarRating rating={4} />
              </Col>
            </Row>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Reviews;