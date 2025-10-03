/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";

type TBtn = {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  type: "normal" | "special";
  icon?: "cart" | "user" | "chat" | "shop";
};

function Button({ variant, children, type, icon }: TBtn) {
  const [iconClass, setIconClass] = useState("");

  useEffect(() => {
    if (icon === "cart") {
      setIconClass("fa-solid fa-cart-shopping");
    } else if (icon === "user") {
      setIconClass("fa-regular fa-user");
    } else if (icon === "chat") {
      setIconClass("fa-regular fa-message");
    } else if (icon === "shop") {
      setIconClass("fa-solid fa-store");
    }
  }, []);

  const checkType = (
    variant: string | undefined, 
    type: string,
    children: React.ReactNode
  ) => {
    if (type === "normal") {
      return (
        <div className="flex justify-center text-center items-center flex-col mx-1 h-12 cursor-pointer">
          <i className={`${iconClass} text-gray-600 text-[20px] max-lg:text-[2.5vw]`}></i>
          <span className="max-lg:text-[1.3vw] text-[14px] text-gray-900 mt-1"> {children}</span>
        </div>
      );
    } else {
      if (variant === "primary") {
        return (
          <button className="max-lg:h-10 border-2 border-orange-500 w-[12%] text-[1.4vw] rounded-lg h-14 text-orange-500 hover:bg-orange-50 transition delay-0 duration-1000 ease-in-out">
            {children}
            <i className={`${iconClass} px-2`}></i>
          </button>
        );
      } 
      else{
        return(
          <button className=" w-1/4 border-0 rounded py-2 px-4 text-white bg-orange-500 hover:bg-orange-700 transition delay-0 duration-1000 ease-in-out">
          {children}
          <i className={`${iconClass}`} ></i>
        </button>
        )
      }
    }
  };

  return <>{checkType(variant, type, children)}</>;
}

export default Button;
