import {
  MessageOutlined,
  PhoneOutlined,
  QuestionCircleOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Button, Card, Col, Row } from "antd";
import Meta from "antd/lib/card/Meta";
import React from "react";

export default function Features() {
  const Feature = ({ icon, heading, text }) => {
    return (
      <Col className="feature" xs={24} sm={12} lg={8}>
        <Card
          headStyle={{ color: "red" }}
          hoverable
          actions={[<Button style={{}}> Know More </Button>]}
        >
          <Meta avatar={icon} title={heading} description={text} />
        </Card>
      </Col>
    );
  };

  return (
    <div className="features">
      <Row gutter={16}>
        <Feature
          icon={<PhoneOutlined style={{ fontSize: "1.5rem" }} />}
          heading="Phone Consultation"
          text="Schedule a call from one of our fashion curators to know what would look good on you."
        />
        <Feature
          icon={<QuestionCircleOutlined style={{ fontSize: "1.5rem" }} />}
          heading="Fashion Quiz"
          text="Take a fashion quiz specifying your body attributes and get AI powered advice right away."
        />
        <Feature
          icon={<MessageOutlined style={{ fontSize: "1.5rem" }} />}
          heading="Messanger Chat"
          text="You can also talk to one of our fashion curators on Facebook Messenger platform."
        />
        <Feature
          icon={<UserAddOutlined style={{ fontSize: "1.5rem" }} />}
          heading="Personalised Experience"
          text="Our fashion stylists and curators suggest you the best options that are available nearby."
        />
      </Row>
    </div>
  );
}
