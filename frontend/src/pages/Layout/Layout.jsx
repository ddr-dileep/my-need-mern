import Footer from "./Footer/Footer";
import Navigation from "./Navigation/Navigation";
import PropTypes from 'prop-types';
import "./Layout.scss";

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <div className="layout-container">{children}</div>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout