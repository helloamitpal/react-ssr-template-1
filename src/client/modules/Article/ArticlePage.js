import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

import * as articleActionCreator from './articleActionCreator';
import Card from '../../components/atoms/Card';

const ArticlePage = ({
  articleState: { articles, error, loading },
  articleActions,
  history,
  match,
  location: { pathname }
}) => {
  const category = articles[0] && articles[0].source.name;
  const head = () => (
    <Helmet key={`article-page-${Math.random()}`}>
      <title>React SSR Template</title>
      <meta property="og:title" content="React SSR Template" />
      <meta
        name="description"
        content="Breaking news,latest articles, popular articles from most popular news websites of the world"
      />
      <meta name="robots" content="index, follow" />
      <link
        rel="canonical"
        href={`https://react-ssr-template-app.herokuapp.com${pathname || ''}`}
      />
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
      <Card
        key={article.title}
        readMore={() => gotoArticleDetails(article)}
        details={{
          title: article.title,
          image: article.urlToImage
        }}
      />
    ));
  };

  useEffect(() => {
    const id = (match.params && match.params.id) || '';
    window.scrollTo(0, 0);
    articleActions.fetchArticles(id);
  }, [match.params]);

  return (
    <div className="article-page-container">
      {head()}
      <div className="row">
        <div className="section">
          <h3>{category || 'Popular Articles'}</h3>
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
  console.log('Article Page SSR: Loading data before connecting the data');
  return store.dispatch(fetchArticles()); // Manually dispatch a network request
};

ArticlePage.propTypes = {
  articleState: PropTypes.object,
  articleActions: PropTypes.object,
  history: PropTypes.object,
  match: PropTypes.object,
  location: PropTypes.object
};

ArticlePage.defaultProps = {
  articleState: {},
  articleActions: {},
  history: {},
  match: {},
  location: {}
};

export default {
  component: connect(mapStateToProps, mapDispatchToProps)(ArticlePage),
  loadData
};
