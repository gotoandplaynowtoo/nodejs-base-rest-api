
import Router from '../core/Router';

import testIndex from '../app/http/controllers/test/index';

export default function apiRoutes(app) {
    const router = new Router(app);
    /**
     * Declare all your routes here.
     */
    router.GET('/', testIndex);
    router.POST('/', testIndex);
    router.PUT('/', testIndex);
    router.DELETE('/', testIndex);
};