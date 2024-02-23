import React from 'react';

import Home from './Home';
import Sidebar from '../../components/Sidebar';
import TopNavbar from '../../components/TopNavbar';
import RightSidebar from '../../components/RightSidebar';
import CreatePost from '../../components/CreatePost';
import UserPostData1 from '../../components/UserPostData1';
import UserPostData2 from '../../components/UserPostData2';
import UserPostData3 from '../../components/UserPostData3';
import UserPostData4 from '../../components/UserPostData4';
import UserPostData5 from '../../components/UserPostData5';
import MediaStory from '../../components/MediaStory';
import MediaEvents from '../../components/MediaEvents';
import UpcomingBirthday from '../../components/UpcomingBirthday';
import PageStory from '../../components/PageStory';
import Footer from '../../components/Footer';

function IncludeHome() {
  return (
    <>
      <Home 

        sidebar={<Sidebar />}
        topNavbar={<TopNavbar />}
        rightSidebar={<RightSidebar />}
        createPost={<CreatePost />}
        userPostData1={<UserPostData1 />}
        userPostData2={<UserPostData2 />}
        userPostData3={<UserPostData3 />}
        userPostData4={<UserPostData4 />}
        userPostData5={<UserPostData5 />}
        mediaStory={<MediaStory />}
        mediaEvents={<MediaEvents />}
        upcomingBirthday={<UpcomingBirthday />}
        pageStory={<PageStory />}
        footer={<Footer />}

      />

    </>
  );
}

export default IncludeHome;
