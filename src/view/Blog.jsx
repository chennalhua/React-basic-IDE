import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { HelmetProvider } from 'react-helmet-async';
const Blog = () => {
    return (
        <>
            <HelmetProvider>
                <div >
                    <Helmet>
                        <title>React Helmet Asyc example</title>
                        <link rel="canonical" href="https://www.url.com/" />
                        <meta keywords=" seo keywords" />
                        <meta description=" website description" />
                        <meta property="og:image" content="/metaBlog/travel_NO.1_S.jpg" />
                        <meta property="og:image:alt" content="文章說明" />
                        <meta property="og:image:type" content="image/png" />
                        <meta property="og:image:width" content="500" />
                        <meta property="og:image:height" content="350" />
                    </Helmet>
                </div>
            </HelmetProvider>
            <div>部落格文章</div>
        </>
    )
}
export default Blog