import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import CreaturesService from "../service/CreaturesService";
import CreatureList from "./CreatureList";

const creaturesService = new CreaturesService();

const Creatures = () => {
    const [data, setData] = useState([]);

    const getCreatures = async () => {
        const creatures = await creaturesService.getCreatures();

        setData(
            await Promise.all(
                creatures.map((creature) =>
                    creaturesService.getCreaturesWithReturnURL(creature.url)
            )
        )
    );
};

    useEffect(() => {
        getCreatures();
    }, []);

    return <CreatureList creatures={data} />;
};

export default Creatures;