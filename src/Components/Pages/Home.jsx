import { useLoaderData } from "react-router-dom";
import Carousel from "../Carousel";
import TabCategories from "../TabCategories";
const Home = () => {
  return (
    <div>
      <Carousel></Carousel>
      <TabCategories></TabCategories>
    </div>
  );
};

export default Home;
