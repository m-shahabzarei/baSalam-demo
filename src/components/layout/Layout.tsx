import Footer from "./Footer";
import Header from "./Header";

interface Ilayout {
  children: React.ReactNode;
}
function Layout({ children }: Ilayout) {
  return (
    <>
      <Header/>
      {children}
      <Footer />
    </>
  );
}

export default Layout;
