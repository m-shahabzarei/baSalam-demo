
interface Ilayout {
  children: React.ReactNode;
}
function Layout({ children }: Ilayout) {
  return (
    <>
      {children}
    </>
  );
}

export default Layout;
