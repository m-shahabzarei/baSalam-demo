/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";

type TBtn = {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  type: "normal" | "special";
  icon?: "cart" | "user" | "chat" | "shop";
  onClick?:() => void;
};

function Button({ variant, children, type, icon , onClick }: TBtn) {
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
        <div onClick={onClick} className="flex justify-center text-center items-center flex-col  h-12 cursor-pointer">
          <i className={`${iconClass} text-gray-600 text-2xl`}></i>
          <span className="text-xs text-gray-900 mt-1"> {children}</span>
        </div>
      );
    } else {
      if (variant === "primary") {
        return (
          <button onClick={onClick} className="border-2 border-orange-500 rounded py-2 px-4 text-orange-500 hover:bg-orange-50 transition delay-0 duration-1000 ease-in-out">
            {children}
            <i className={`${iconClass} px-2`}></i>
          </button>
        );
      } 
      else{
        return(
          <button onClick={onClick} className=" w-full h-full border-0 rounded py-2 px-4 text-white bg-orange-500 hover:bg-orange-700 transition delay-0 duration-1000 ease-in-out">
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
