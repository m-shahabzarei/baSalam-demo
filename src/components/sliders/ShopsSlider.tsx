import { useState } from "react";
import Container from "../layout/Container";

function ShopsSlider() {
  const [move, setMove] = useState<boolean>(false);

  function moveR() {
    setMove(true);
  }
  function moveL() {
    setMove(false);
  }

  return (
    <Container>
      <div className="overflow-hidden mt-3" dir="rtl">
        <div
          onClick={moveR}
          className={`
            ${move ? "hidden" : "flex"}
            text-2xl text-orange-600 absolute bg-white w-10 h-10 rounded-xl text-center justify-center items-center shadow-md cursor-pointer trasnsition ease-in-out duration-500 top-48 hover:bg-orange-600 hover:text-white`}
        >
          ▶
        </div>
        <div
          className={`flex justify-evenly h-36 w-[1400px] transition duration-500 ease-in-out
            ${move ? "translate-x-64" : ""}
            `}
        >
          <div className="flex flex-col justify-center text-center items-center w-24 ">
            <div className="w-20 h-20 rounded-full outline outline-2 outline-offset-2 outline-orange-600 mb-3">
              <img
                className="w-full rounded-full"
                src="/../../src/assets/images/basalam.jpg"
              />{" "}
            </div>
            <span className="text-gray-600">باسلام</span>
          </div>
          <div className="flex flex-col justify-center text-center items-center w-24 ">
            <div className="w-20 h-20 rounded-full outline outline-2 outline-offset-2 outline-orange-600 mb-3">
              <img
                className="w-full rounded-full"
                src="/../../src/assets/images/basalam.jpg"
              />{" "}
            </div>
            <span className="text-gray-600">باسلام</span>
          </div>
          <div className="flex flex-col justify-center text-center items-center w-24 ">
            <div className="w-20 h-20 rounded-full outline outline-2 outline-offset-2 outline-blue-500 mb-3">
              <img
                className="w-full rounded-full"
                src="https://statics.basalam.com/public-117/users/X70zJw/08-18/H5GW9RaVVlH5GCmR9umIjKeJeTWRSl7GTTzgCm33cnSvuXsAfW.jpg_100X100X90.jpg"
              />{" "}
            </div>
            <span className="text-gray-600">باسلام</span>
          </div>
          <div className="flex flex-col justify-center text-center items-center w-24 ">
            <div className="w-20 h-20 rounded-full outline outline-2 outline-offset-2 outline-orange-600 mb-3">
              <img
                className="w-full rounded-full"
                src="/../../src/assets/images/basalam.jpg"
              />{" "}
            </div>
            <span className="text-gray-600">باسلام</span>
          </div>
          <div className="flex flex-col justify-center text-center items-center w-24 ">
            <div className="w-20 h-20 rounded-full outline outline-2 outline-offset-2 outline-orange-600 mb-3">
              <img
                className="w-full rounded-full"
                src="/../../src/assets/images/basalam.jpg"
              />{" "}
            </div>
            <span className="text-gray-600">باسلام</span>
          </div>
          <div className="flex flex-col justify-center text-center items-center w-24 ">
            <div className="w-20 h-20 rounded-full outline outline-2 outline-offset-2 outline-orange-600 mb-3">
              <img
                className="w-full rounded-full"
                src="/../../src/assets/images/basalam.jpg"
              />{" "}
            </div>
            <span className="text-gray-600">باسلام</span>
          </div>
          <div className="flex flex-col justify-center text-center items-center w-24 ">
            <div className="w-20 h-20 rounded-full outline outline-2 outline-offset-2 outline-blue-500 mb-3">
              <img
                className="w-full rounded-full"
                src="https://statics.basalam.com/public-117/users/X70zJw/08-18/H5GW9RaVVlH5GCmR9umIjKeJeTWRSl7GTTzgCm33cnSvuXsAfW.jpg_100X100X90.jpg"
              />{" "}
            </div>
            <span className="text-gray-600">اوریکا | orika</span>
          </div>
          <div className="flex flex-col justify-center text-center items-center w-24 ">
            <div className="w-20 h-20 rounded-full outline outline-2 outline-offset-2 outline-orange-600 mb-3">
              <img
                className="w-full rounded-full"
                src="/../../src/assets/images/basalam.jpg"
              />{" "}
            </div>
            <span className="text-gray-600">باسلام</span>
          </div>
          <div className="w-[150px] flex flex-col justify-evenly ">
            <p className="text-black opacity-70">برای استوری های بیشتر  
            </p>
                <span className="text-orange-600 cursor-pointer">برو بازارگردی{" >"}</span>
          </div>
        </div>
        <div
          onClick={moveL}
          className={`${move ? "flex" : "hidden"}
            text-orange-600 text-2xl absolute bg-white w-10 h-10 rounded-xl text-center flex justify-center items-center shadow cursor-pointer trasnsition ease-in-out duration-500 left-[5%] top-48 hover:bg-orange-600 hover:text-white`}
        >
          ◀
        </div>
      </div>
    </Container>
  );
}

export default ShopsSlider;
