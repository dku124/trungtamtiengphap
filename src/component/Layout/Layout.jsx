import React from 'react';
import Routers from '../../routers/Routers';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Layout = () => {
  return (
    <div className="wrap">
      <Header />
      <div>
        <Routers />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
