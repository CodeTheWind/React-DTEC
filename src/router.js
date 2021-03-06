import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import asyncComponent from './utils/asyncComponents';

/**
 * 异步加载路由
 */
const HomePage = asyncComponent(() => import('./pages/home-page'));
const ArticleDetails = asyncComponent(() => import('./pages/article-details'));
const UserCenter = asyncComponent(() => import('./pages/user-center'));
const PostArticle = asyncComponent(() => import('./pages/post-article'));
const EditArticle = asyncComponent(() => import('./pages/edit-article'));
const SettingCenter = asyncComponent(() => import('./pages/setting-center'));
const BackStage = asyncComponent(() => import('./pages/backstage'));
const Exception = asyncComponent(() => import('./pages/exception'));

const Router = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/article/:ids" component={ArticleDetails} />
      <Route exact path="/post/:ids" component={PostArticle} />
      <Route exact path="/edit/:ids" component={EditArticle} />
      <Route exact path="/user/:ids" component={UserCenter} />
      <Route path="/user/setting" component={SettingCenter} />
      <Route path="/admin" component={BackStage} />
      <Route exact path="/exception/:code" component={Exception} />
    </Switch>
  </HashRouter>
);

export default Router;