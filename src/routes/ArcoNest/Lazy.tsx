import type { LazySkipperComponentType } from '@tokopedia/skipper/router';
import loadable from '@tokopedia/skipper/lazy';

const LazyRoute: LazySkipperComponentType = loadable(() => import(/* webpackChunkName: "arco-nest" */ './index'));

export default LazyRoute;
