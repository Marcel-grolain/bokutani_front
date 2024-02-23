import React from 'react';




function Home({ marce, sidebar, topNavbar, rightSidebar, createPost, userPostData1, userPostData2, userPostData3, userPostData4, userPostData5, mediaStory, mediaEvents, upcomingBirthday, pageStory, footer }) {

    return (
        <>
            <div className="wrapper">

                {sidebar}

                {topNavbar}

                {rightSidebar}

                <div id="content-page" className="content-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 row m-0 p-0">

                                {createPost}

                                {userPostData1}

                                {userPostData2}

                                {userPostData3}

                                {userPostData4}

                                {userPostData5}

                            </div>

                            <div className="col-lg-4">

                                {mediaStory}

                                {mediaEvents}

                                {upcomingBirthday}

                                {pageStory}
                                
                            </div>

                            <div className="col-sm-12 text-center">
                                <img src="../assets/images/page-img/page-load-loader.gif" alt="loader" style={{height: 100}} />
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            
            {footer}
        </>
    );
}


export default Home;