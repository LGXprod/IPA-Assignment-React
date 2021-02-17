import React, { useState, useEffect } from "react";
import Thumbnail from "common/Thumbnail";
import ReadWDate from "common/ReadWDate";
import getArticles from "request/getArticles";

const MoreArticles = () => {
  const [articles, setArticles] = useState();

  useEffect(() => {
    (async () => {
      const articles = await getArticles("more-articles");
      setArticles(articles);
    })();
  }, []);

  return (
    <div className="content-width">
      <h1 id="more-title">More Articles</h1>

      <div className="centered-column more-articles-width">
        {(() => {
          if (articles != null) {
            let articleComponents = [];

            function singleArticleComponent({
              title,
              thumbnail,
              readDuration,
              dateUploaded,
            }) {
              return (
                <div class="centered-row small-article-container">
                  <Thumbnail
                    size="small"
                    image={`data:image/jpg;base64, ${thumbnail}`}
                  />

                  <div class="article-info small-article-info">
                    <h5>{title}</h5>

                    <ReadWDate
                      readDuration={readDuration}
                      date={dateUploaded}
                    />
                  </div>
                </div>
              );
            }

            for (let i = 0; i < articles.length; i += 2) {
              articleComponents.push(
                <>
                  <div
                    className="centered-row center-ends"
                    style={{ width: "100%" }}
                  >
                    {singleArticleComponent(articles[i])}
                    {i + 1 < articles.length
                      ? singleArticleComponent(articles[i + 1])
                      : null}
                  </div>

                  <hr className="more-articles-line" />
                </>
              );
            }

            return articleComponents;
          }
        })()}
      </div>
    </div>
  );
};

export default MoreArticles;
