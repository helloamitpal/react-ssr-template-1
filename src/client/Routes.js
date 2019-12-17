import ArticlePage from './modules/Article/ArticlePage';
import NotFoundPage from './modules/NotFound/NotFoundPage';
import ArticleDetailsPage from './modules/Article/Details/ArticleDetailsPage';
import App from './App';

const routeConfig = [
  {
    ...App,
    routes: [
      {
        ...ArticlePage,
        path: '/',
        exact: true
      },
      {
        path: '/articles/:id',
        ...ArticlePage
      },
      {
        path: '/articles/:id/details',
        ...ArticleDetailsPage
      },
      {
        ...NotFoundPage
      }
    ]
  }
];

export default routeConfig;
