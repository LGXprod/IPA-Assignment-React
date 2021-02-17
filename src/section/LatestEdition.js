import React, { useState, useEffect } from "react";
import Thumbnail from "common/Thumbnail";
import Tags from "common/Tags";
import ReadWDate from "common/ReadWDate";
import getArticles from "request/getArticles";
import "styles/index.css";

const LatestEdition = () => {
  const [articles, setArticles] = useState();

  useEffect(() => {
    (async () => {
      const articles = await getArticles("latest-edition");
      setArticles(articles);
    })();
  }, []);

  return (
    <div className="content-width">
      <h1 className="main-title">
        Latest Edition <span className="reg-font">13 November 2020</span>
      </h1>

      <hr />

      {articles != null
        ? articles.map(({ title, thumbnail, readDuration, dateUploaded, tags }, i) => {
            return (
              <React.Fragment key={i}>
                <div className="centered-row">
                  <Thumbnail
                    size="large"
                    image={`data:image/jpg;base64, ${thumbnail}`}
                  />

                  <div
                    className="centered-column center-left center-ends"
                    style={{ width: "100%" }}
                  >
                    <div className="centered-row article-info-container center-ends">
                      <ReadWDate readDuration={readDuration} date={dateUploaded} />
                      <Tags tagNames={JSON.parse(tags)} />
                    </div>

                    <a href="html/article.html" target="_blank">
                      <h3 className="article-info article-title-large">
                        {title}
                      </h3>
                    </a>
                  </div>
                </div>

                <hr />
              </React.Fragment>
            );
          })
        : null}
    </div>
  );
};

export default LatestEdition;
