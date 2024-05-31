import Banner from "../Banner/Banner";
import Estates from "../Estates/Estates";
import CardSlider from "../Slider/CardSlider";
import Show from "../Show/Show";
import ChooseUs from "../ChooseUs/ChooseUs";
import BestRecomendation from "../BestRecomendation/BestRecomendation";
import { useEffect } from "react";

const Home = () => {

    useEffect(() => {
        document.title = 'Home';
      }, []);

    return (
        <div className="bg-white">
            <Banner></Banner>
            <Estates></Estates>
            <CardSlider></CardSlider>
            <Show></Show>
            <BestRecomendation></BestRecomendation>
            <ChooseUs></ChooseUs>
        </div>
    );
};

export default Home;