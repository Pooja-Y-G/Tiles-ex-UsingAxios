import React from "react";
import { Card } from "antd";
import {
  HeartFilled,
  ShareAltOutlined,
  CommentOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { Row, Col } from "antd";


const Article = ({
  title = "",
  subtitle = "",
  paragraphs = [],
  imagelink = "",
}) => {
  return (
    <div style={{ width: "300", marginLeft: "500px" }}>
      <div
        style={{
          width: 350,
          height: 580,
          margin: "10px",
          backgroundColor: "#B6EDEA",
          textAlign: "left",
        }}
      >
        <img
          style={{
            borderRadius: "50%",
            padding: "2px",
            margin: "2px",
          }}
          width="70"
          height="70"
          alt="example"
          src={imagelink}
        />

        <span
          style={{
            color: "purple",
            fontSize: "16px",
            marginLeft: "10px",
            fontStyle: "italic",
            fontWeight: "bold",
          }}
        >
          {title}
        </span>
        <div style={{ color: "brown" }}>
          <HomeOutlined /> Davangere,Karnataka,India.
        </div>
        <div>
          {paragraphs.map((paragraph) => (
            <p className="paragraph" key={paragraph.text}>
              {paragraph.text}
            </p>
          ))}
        </div>
        <Card
          hoverable
          style={{
            width: 340,
            margin: "5px",
            alignItems: "center",
          }}
          cover={<img width="600" height="300" alt="example" src={imagelink} />}
        >
          <Row>
            <Col span={8}>
              {" "}
              <button
                style={{
                  color: "blue",
                }}
              >
                <HeartFilled />
                <b>Like</b>
              </button>
            </Col>
            <Col span={8}>
              <button style={{ color: "blue" }}>
                <ShareAltOutlined />
                <b>Share</b>
              </button>
            </Col>
            <Col span={8}>
              <button style={{ color: "blue" }} >
                <CommentOutlined />
                <b>Comment</b>
              </button>
            </Col>
          </Row>
        </Card>
      </div>
    </div>
  );
};

export default Article;
