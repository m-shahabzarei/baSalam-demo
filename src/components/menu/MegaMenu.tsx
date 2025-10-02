import React, { useState } from "react";
import { menuData } from "./menuData";

const MegaMenu: React.FC = () => {
  const categories = Object.keys(menuData);
  const [selectedCategory, setSelectedCategory] = useState<string>(
    categories[0]
  );
  const subCategories = Object.keys(menuData[selectedCategory] || {});
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>(
    subCategories[0] || ""
  );
  const items = menuData[selectedCategory]?.[selectedSubCategory] || [];

  return (
    <div className="group z-50">
      <div className="text-sm cursor-pointer transition ease-in-out duration-500 hover:text-orange-500 ">
        دسته بندی ها<i className="fa-solid fa-bars"></i>
      </div>

      <div
        className={` h-0 mt-8 w-[900px]  overflow-hidden font-sans text-right bg-white absolute right-[100px] opacity-0 transition-all duration-500 ease-in-out flex  group-hover:h-[500px] group-hover:opacity-100`}
        dir="rtl"
      >
        {/* ستون راست - دسته‌های اصلی */}
        <div className="w-1/4 border-l border-gray-200 bg-white overflow-y-auto max-h-[500px]">
          {categories.map((cat) => (
            <div
              key={cat}
              onMouseEnter={() => {
                setSelectedCategory(cat);
                const firstSub = Object.keys(menuData[cat])[0] || "";
                setSelectedSubCategory(firstSub);
              }}
              className={`p-3 items-center w-full flex justify-between cursor-pointer transition ${
                cat === selectedCategory
                  ? "bg-orange-50 text-red-600 font-bold"
                  : "hover:bg-gray-50"
              }`}
            >
              <p className="text-sm">{cat}</p>
              <span className={`p-3  ${
                cat === selectedCategory
                  ?  "text-red-600"
                  : "text-gray-400"
              }`}>{">"}</span>
            </div>
          ))}
        </div>

        {/* ستون وسط - زیرمجموعه‌ها */}
        <div className="w-1/4 border-l border-gray-200 bg-white overflow-y-auto max-h-[500px]">
          {subCategories.map((sub) => (
            <div
              key={sub}
              onMouseEnter={() => setSelectedSubCategory(sub)}
              className={`p-3 items-center flex justify-between cursor-pointer transition ${
                sub === selectedSubCategory
                  ? "bg-orange-50 text-red-600 font-bold"
                  : "hover:bg-gray-50"
              }`}
            >
              <p className="text-sm">{sub}</p>
              <span className={`p-3  ${
                sub === selectedSubCategory
                  ?  "text-red-600"
                  : "text-gray-400"
              }`}>{">"}</span>
            </div>
          ))}
        </div>

        {/* ستون چپ - آیتم‌ها */}
        <div className=" flex-1 bg-white flex flex-wrap gap-6 p-4 overflow-y-auto ">
          {items.length > 0 ? (
            items.map((item) => (
              <div
                key={item.name}
                className="w-28 text-center cursor-pointer transition hover:scale-105"
              >
                <div className="text-4xl mb-2">{item.icon}</div>
                <div className="text-sm text-gray-700">{item.name}</div>
              </div>
            ))
          ) : (
            <div className="text-gray-400">آیتمی موجود نیست</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
