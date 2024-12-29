import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefRecommends from "../ChefRecommends/ChefRecommends";
import CallUS from "../Contact/CallUS";
import Featured from "../Featured/Featured";
import PopularMenu from "../Popular/PopularMenu";
import Service from "../Service/Service";
// import PopularItems from "../Popular/PopularItems";

const Home = () => {
    return (
        <div>
            <Banner />
            <Category/>
            <Service/>
            <PopularMenu/>
            <CallUS/>
            <ChefRecommends/>
            <Featured/>
        </div>
    );
};

export default Home;