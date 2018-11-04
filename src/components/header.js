import React from 'react'
import Helmet from 'react-helmet';
import AdSense from 'react-adsense'

const Header = (data) => {
    return (
        <div>
 <AdSense.Google
          client="ca-pub-2548259343015828"
          slot="5153910610"
          format="auto"
        />
            <Helmet>
            <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
                <title>{data.title}</title>
                <meta name="description" content={data.description} />
            </Helmet>
            <header className="masthead" style={{ backgroundImage: `url(${data.image})` }}>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <div className="site-heading">
                                <h1>{data.title}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>

    )



}

export default Header
