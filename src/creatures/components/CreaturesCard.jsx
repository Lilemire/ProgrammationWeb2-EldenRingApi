import React from "react";
import Card from "../../components/Card";
import BCard from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

const DEFAULT_IMAGE_POSITION ="top";

const CreaturesCard = ({ creature }) => {
    return (
        <Col className="my-3">
            <Card>
                <BCard.Header as="small">{creature.id}</BCard.Header>
                <BCard.Body>
                    <BCard.Img
                        variant={DEFAULT_IMAGE_POSITION}
                        src={}/**//**/*/**/*/*/*/* */ */ */
                </BCard.Body>
            </Card>
        </Col>