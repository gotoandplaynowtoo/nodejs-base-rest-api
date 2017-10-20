
module.exports = function(app) {
    app.get('/', function(req, res, next) {
        return res.status(200).json({
            msg: 'nodejs-api-base v0.1'
        });
    });
};
