import PhotoContainer from "../components/photoContainer/PhotoContainer";
import SellSlider from "../components/searchBar/SellSlider";
import CatSlider from "../components/sliders/CatSlider";
import IconSlider from "../components/sliders/IconSlider";
import NewShopSlider from "../components/sliders/newShopSlider/NewShopSlider";
import PhotoSlider from "../components/sliders/PhotoSlider";
import PostSlider from "../components/sliders/postSlider/PostSlider";
import ShopsSlider from "../components/sliders/ShopsSlider";
import VideoSlider from "../components/sliders/VideoSlider";

function Home() {
  return (
    <div className="flex justify-center items-center flex-col bg-gray-100">
      <ShopsSlider />
      <PhotoSlider />
      <IconSlider />
      <SellSlider />
      <PhotoContainer img="https://statics.basalam.com/public-132/users/ZA8EOD/09-23/PPFkTW5Wgk2gfCDkoDXfL26Pm9nRSggFgNavIb0HHVbvzyfHjb.webp" />
      <CatSlider />
      <VideoSlider variant="Y" title="این ما هستیم،این قدرت ماست" />
      <PhotoContainer img="https://statics.basalam.com/public-130/users/em5Yq/09-20/2ZQpCAhIORFbpYSff9B5Y2do5AhniLXvTO2Ooj4pP81bsc9SBQ.webp" />
      <NewShopSlider />
      <VideoSlider variant="X" title="با سلام قدرت گرفته از خودمان" />
      <PostSlider />
      <br />

    </div>
  );
}

export default Home;
