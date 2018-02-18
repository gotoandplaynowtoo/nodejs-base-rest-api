
export default class Router {
    constructor(app) {
        this.app = app;
    }
    GET(uri) {
        this.app.get('/', function(req, res, next) {
            return res.status(200).json({
                msg: 'nodejs-api-base v0.1'
            });
        });
    }
}