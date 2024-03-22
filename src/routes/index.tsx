import type { SkipperRouteEntry } from '@tokopedia/skipper/router';

import MainLayout from '@/layouts/MainLayout';
import DefaultLayout from '@/layouts/DefaultLayout';

import Home from './Home/Lazy';
import About from './About/Lazy';
import Blog from './Blog/Lazy';
import ArcoNest from './ArcoNest/Lazy';

import VerifyParamsLayout from './About/layout/VerifyParams/Lazy';

const ROUTES: SkipperRouteEntry[] = [
  {
    type: 'layout-route',
    layout: MainLayout,
    routes: [
      {
        type: 'nested-route',
        name: 'about',
        path: '/about',
        routes: [
          {
            type: 'route',
            name: 'about-us',
            path: ':slug',
            layout: [VerifyParamsLayout, DefaultLayout],
            component: About,
          },
        ],
      },
      {
        type: 'route',
        name: 'home',
        path: '/',
        layout: [DefaultLayout],
        component: Home,
      },
    ],
  },
  {
    type: 'route',
    name: 'blog',
    path: '/blog',
    component: Blog,
  },
  {
    type: 'route',
    name: 'arco-nest',
    path: '/arco-nest',
    component: ArcoNest,
  },
];

export default ROUTES;
