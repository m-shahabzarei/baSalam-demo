import SearchBar from "../searchBar/SearchBar";
import MegaMenu from "../menu/MegaMenu";
import Button from "../button/Button";
import TopHeader from "../topHeader/TopHeader";
import { useEffect, useState } from "react";
import MobileHeader from "./mobile/MobileHeader";
import Login from "../modal/Login";

function Header() {



  const [showHeader, setShowHeader] = useState(true);
  let lastScroll = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if(currentScroll < 220){
        setShowHeader(false)
      }
      else if (currentScroll < lastScroll) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [showLogin, setShowLogin] = useState(false);

  function loginSetter(){
    setShowLogin(true)
  }

  return (
    <>
    <header className="h-36 flex flex-col justify-between w-full">
    <TopHeader/>

    <MobileHeader />

    <nav className={`max-md:hidden flex flex-row-reverse mt-20 z-[2000] w-full justify-between px-16 items-center transform transition-transform duration-300
      ${showHeader ? "fixed top-0 bg-white z-[2000] h-24 mt-0" : "relative h-fit"}`}>
      <img src="/public/images/basalam-logo.svg" className="cursor-pointer w-1/12 h-1/12 " />
      <MegaMenu />
      <SearchBar />
      <Button icon="chat" type="normal">گفت و گوها</Button>
      <Button onClick={loginSetter} icon="user" type="normal">عضویت | ورود</Button>
      <Button icon="cart" type="normal">سبدخرید</Button>
      <Button icon="shop" variant="primary" type="special">ایجاد غرفه</Button>
    </nav>
    </header>
    {showLogin && <Login onClose={() => setShowLogin(false)} />}  
    </>
  );
}

export default Header;
