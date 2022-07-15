import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import CreaturesService from "../service/CreaturesService";
import CreatureList from "./CreaturesList";

const creaturesService = new CreaturesService();

const Creatures = () => {
    const [data, setData] = useState([]);

    const getCreatures = async () => {
        const creatures = await creaturesService.getCreatures();

        setData(creatures);
    }

    useEffect(() => {
        getCreatures();
    }, []);

    return <CreatureList creatures={data} />;
};

export default Creatures;