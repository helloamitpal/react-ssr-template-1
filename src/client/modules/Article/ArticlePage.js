import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Helmet } from 'react-helmet';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import PropTypes from 'prop-types';

import * as articleActionCreator from './articleActionCreator';

const ArticlePage = ({ articleState: { articles, error, loading }, articleActions, history }) => {
  const head = () => (
    <Helmet key={`article-page-${Math.random()}`}>
      <title>React SSR Template</title>
      <meta property="og:title" content="React SSR Template" />
      <meta
        name="description"
        content="Breaking news,latest articles, popular articles from most popular news websites of the world"
      />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://react-ssr-template-app.herokuapp.com/" />
    </Helmet>
  );

  const gotoArticleDetails = article => {
    history.push({
      pathname: `/articles/${article.title}/details`,
      state: { ...article }
    });
  };

  const renderArticles = () => {
    return articles.map(article => (
      <div className="col s12 m6 l6 xl4" key={article.title}>
        <div className="card large">
          <div className="card-image">
            <LazyLoadImage alt={article.title} src={article.urlToImage} />
          </div>
          <div className="card-content">
            <span className="card-title">{article.title}</span>
          </div>
          <div className="card-action">
            <span onClick={() => gotoArticleDetails(article)}>Read More</span>
          </div>
        </div>
      </div>
    ));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    articleActions.fetchArticles();
  }, [articleActions]);

  return (
    <div>
      {head()}
      <div className="row">
        <div className="section">
          <h3>Popular Articles</h3>
        </div>
        <div className="divider" />
        <div className="section">
          <div className="row">{renderArticles()}</div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  articleState: state.article
});

const mapDispatchToProps = dispatch => ({
  articleActions: bindActionCreators(articleActionCreator, dispatch)
});

const loadData = store => {
  // For the connect tag we need Provider component but on the server at this moment app is not rendered yet
  // So we need to use store itself to load data
  const { fetchArticles } = articleActionCreator;
  return store.dispatch(fetchArticles()); // Manually dispatch a network request
};

ArticlePage.propTypes = {
  articleState: PropTypes.object,
  articleActions: PropTypes.object,
  history: PropTypes.object
};

ArticlePage.defaultProps = {
  articleState: {},
  articleActions: null,
  history: {}
};

export default {
  component: connect(mapStateToProps, mapDispatchToProps)(ArticlePage),
  loadData
};
