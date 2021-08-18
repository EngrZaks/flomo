import { Button, Card, Col, Row } from "antd";
import Meta from "antd/lib/card/Meta";
import React from "react";

export default function Network() {
  const CardComponent = ({ heading, text, cover }) => {
    // const width = 600
    // const quality = 80
    return (
      <Col className="feature" xs={24} sm={12} lg={6}>
        <Card
          headStyle={{ color: "red" }}
          cover={cover}
          hoverable
          actions={[<Button style={{}}> Know More </Button>]}
        >
          <Meta title={heading} description={text} />
        </Card>
      </Col>
    );
  };
  return (
    <div className="network">
      <h1>Be A Part of Flomo Network</h1>
      <p>
        At Flomo we have fashion curators, fashion stylists, influencers,
        models, and photographers who leverage their creativity to bring about a
        much needed fashionable change. Join the revolution as:-
      </p>
      <div className="cards">
        <Row gutter={16}>
          <CardComponent
            heading="influencers"
            text="Your interest fashion products and potential reach to the segment of the population we are targeting will generate good visibility for our brand."
            cover={
              <img
                alt="influencer"
                src="https://images.unsplash.com/photo-1584998316204-3b1e3b1895ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              />
            }
          />
          <CardComponent
            heading="Fashion Curators"
            text="We expect the fashion curator to pick up buyer queries and preferences through a bot and source designs from nearby markets, preferably."
            cover={
              <img
                alt="Fashion curator"
                src="https://images.unsplash.com/photo-1481824429379-07aa5e5b0739?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
              />
            }
          />
          <CardComponent
            heading="Brand Ambassadors"
            text="An invite-only programme gives you an opportunity to collaborate with us as a brand ambassador and earn on a regular basis."
            cover={
              <img
                alt="brand ambassador"
                src="https://images.unsplash.com/photo-1587538639284-aec1076ba9c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
              />
            }
          />
          <CardComponent
            heading="Stylists"
            text="As the name suggests, stylists style and curate and prepare apparel, footwear and accessories combinations for our valuable customers."
            cover={
              <img
                alt="brand ambassador"
                src="https://images.unsplash.com/photo-1522512115668-c09775d6f424?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
              />
            }
          />
        </Row>
      </div>
    </div>
  );
}
