import { useEffect, useState } from "react";
import Container from "../layout/Container";
import Product from "../product/Product";
import { getProducts } from "../../services/api";
import { Link } from "react-router-dom";

function SellSlider() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProducts().then((res) => {
      setProduct(res);
    });
  }, []);

  const [move, setMove] = useState<boolean>(false);

  function moveR() {
    setMove(true);
  }
  function moveL() {
    setMove(false);
  }

  return (
    <>
      <div className="bg-orange-600 z-10 w-80 h-80 top-[760px] rounded-full absolute">
        <img
          className="relative top-5 left-[106px]"
          src="https://statics.basalam.com/public-74/admin/yDBE2/04-15/JcFhIHAEOTEWXZ7zVZOI6BVUNkstx3idN5wi6WPEgB4fp23DYw.SVG"
        />
      </div>
      <div className="w-full flex z-20 justify-center mt-36 " dir="rtl">
        <Container>
          <div className="bg-orange-600 overflow-hidden h-[600px] w-full rounded-2xl flex flex-col justify-between py-4 px-6">
            <div className="flex justify-between flex-row-reverse" dir="ltr">
              <h1 className="text-white">تخفیف های هیجان انگیز امروز</h1>
              <h2 className="text-gray-900 cursor-pointer">
                {"<"} مشاهده همه{" "}
              </h2>
            </div>
            <div
              onClick={moveR}
              className={`
            ${move ? "hidden" : "flex"}
            text-2xl text-orange-600 absolute bg-white w-10 h-10 rounded-xl text-center justify-center items-center shadow-md cursor-pointer trasnsition ease-in-out duration-500 right-16 top-[1150px] hover:bg-orange-600 hover:text-white`}
            >
              ▶
            </div>
            <div className={` flex transition duration-500 ease-in-out
            ${move ? "translate-x-[620px]" : ""}`}>
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              {product.map((item: any) => (
                <Link to={`/product/${1}`}>
                  <Product
                    img={item.img}
                    title={item.title}
                    city={item.city}
                    shop={item.shop}
                    rate={item.rate}
                    sell={item.sell}
                    offer={item.offer}
                    price={item.price}
                    offerPrice={item.offerPrice}
                    count={item.count}
                    badge={item.badge}
                  />
                </Link>
              ))}
              <div className="bg-white h-[510px] w-52 m-2 rounded-2xl flex p-4 justify-center text-center items-center"><span className="w-80 text-orange-600 cursor-pointer">مشاهده همه</span></div>
            </div>
            <div
              onClick={moveL}
              className={`${move ? "flex" : "hidden"}
            text-orange-600 text-2xl absolute bg-white w-10 h-10 rounded-xl text-center flex justify-center items-center shadow cursor-pointer trasnsition ease-in-out duration-500 left-16 top-[1150px] hover:bg-orange-600 hover:text-white`}
            >
              ◀
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default SellSlider;
