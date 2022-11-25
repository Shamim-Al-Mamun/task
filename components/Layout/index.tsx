import Navbar from "../Navbar";

const Layout = ({ children }: any) => {
  return (
    <>
      <Navbar />

      <div>{children}</div>

      <div>Footer</div>
    </>
  );
};

export default Layout;
