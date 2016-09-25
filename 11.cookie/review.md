## cookie
```
req.headers['cookie']
res.setHeader('Set-Cookie',['name=123; max-age=4']);
npm install cookie-parser;
var cookieParser = require('cookie-parser');
app.use(cookieParser('jw'));
res.cookie(key,value,options+signed:true)
req.cookies/req.signedCookies.key
res.clearCookie(key)
domain path maxAge httpOnly expires 
```
## session
```
var session = require('express-session');
app.use(session({
    secret:"jw",
    resave:true,
    saveUninitialized:true
}));
req.session
```
## crypto
```
var crypto = require('crypto');
crypto.createHmac('sha256','').update('sdfsdf').digest('base64');
```