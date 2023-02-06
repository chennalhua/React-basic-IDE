import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
const Blog = () => {
    return (
        <>
            <Helmet>
                <title>部落格 title</title>
                {/* <!--圖片顯示--> */}
                <meta property="og:image" content="/metaBlog/travel_NO.1_S.jpg" />
                <meta property="og:image:alt" content="文章說明" />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="500" />
                <meta property="og:image:height" content="350" />
            </Helmet>
            <div>部落格文章</div>
        </>
    )
}
export default Blog