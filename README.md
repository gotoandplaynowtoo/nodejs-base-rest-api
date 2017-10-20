# nodejs-base-api
Simple API base code for Node.js using Express.js. 
Similar to Express.js generator but adding some additional
folder and changing some routes initialization.

## Folder and Files
**routes/index.js** - Entry point for all your routes in 
routes/app folder.
##### Example:
```javascript
module.exports = function(app) {
    require('./app/my-route')(app);
};
```

**routes/app/*** - Your organized routes goes here. 
##### Example:
```javascript
module.exports = function(app) {
    app.get('/', function(req, res, next) {
        return res.status(200).json({
            msg: 'nodejs-api-base v0.1'
        });
    });
};
```
**.env** - Config file for your environment.
#### Example
```javascript
var env = process.env.NODE_ENV; // for getting NODE_ENV intialize in the .env file 
```





