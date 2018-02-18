
export default class Router {
    constructor(app) {
        this.app = app;
    }
    GET(uri) {
        this.app.get('/', (req, res, next) => {
            return res.status(200).json({
                msg: 'GET: nodejs-api-base v0.1'
            });
        });
    }
    POST(uri) {
        this.app.post('/', (req, res, next) => {
            return res.status(200).json({
                msg: 'POST: nodejs-api-base v0.1'
            });
        });
    }
    PUT(uri) {
        this.app.put('/', (req, res, next) => {
            return res.status(200).json({
                msg: 'PUT: nodejs-api-base v0.1'
            });
        });
    }
    DELETE(uri) {
        this.app.delete('/', (req, res, next) => {
            return res.status(200).json({
                msg: 'DELETE: nodejs-api-base v0.1'
            });
        });
    }
}