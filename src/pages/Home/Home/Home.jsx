import useTitle from "../../../hook/useTitle";
import Banner from "../Banner/Banner";
import DollCategory from "../DollCategory/DollCategory";
import Gallery from "../Gallery/Gallery";
import UpComingDolls from "../UpComingDolls/UpComingDolls";
import UserReview from "../UserReview/UserReview";

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <DollCategory></DollCategory>
            <UpComingDolls></UpComingDolls>
            <UserReview></UserReview>
        </div>
    );
};

export default Home;