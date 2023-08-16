import Footer from "../pages/home/Footer";
import Header from "../pages/home/Header";

const DefaultLayout = ({ children }: any) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default DefaultLayout;
