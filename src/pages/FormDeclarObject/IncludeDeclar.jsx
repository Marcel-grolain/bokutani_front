import React from 'react';

import FormDeclaration from './FormDeclaration';
import Sidebar from '../../components/Sidebar';
import TopNavbar from '../../components/TopNavbar';
import RightSidebar from '../../components/RightSidebar';
import Footer from '../../components/Footer';



function IncludeDeclar() {
  return (
    <>
      <FormDeclaration 

        sidebar={<Sidebar />}
        topNavbar={<TopNavbar />}
        rightSidebar={<RightSidebar />}
        footer={<Footer />}

      />

    </>
  );
}

export default IncludeDeclar;
