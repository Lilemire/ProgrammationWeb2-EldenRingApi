import React from "react";
import CreaturesCard from "./CreaturesCard";
import Row from "react-bootstrap/Row";

const CreaturesList = ({ creatures }) => {
    return (
        <Row>
            {creatures.map((creature) => (
                <CreaturesCard key={creature.id} creature={creature} />
            ))}
        </Row>
    );
};

export default CreaturesList;