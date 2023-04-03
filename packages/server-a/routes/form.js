var express = require('express');
// var path = require('path');
var router = express.Router();

/* GET form page. */
router.get('/', function(req, res, next) {
  console.log('QUERY => ', req.query);
  const formposted = (req.query.formposted) ? 'formposted' : 'iframeloaded';
  // res.sendFile(path.join(__dirname+'/../public/form.html'));
  res.set('Content-Type', 'text/html');
  res.send(Buffer.from(`
    <html>
      <head>
        <title>Server A - Form</title>
        <link rel="stylesheet" href="/stylesheets/style.css">
      </head>

      <body>
        <h1>Server A Form</h1>
        <form method="post">
          <fieldset>

            <!-- Form Name -->
            <legend>User</legend>
            
            <!-- Text input-->
            <div class="form-group">
              <label class="col-md-4 control-label" for="textinput">Email</label>  
              <div class="col-md-5">
              <input id="textinput" name="textinput" type="text" placeholder="email" class="form-control input-md" required="">
              <span class="help-block">Please enter email id</span>  
              </div>
            </div>
            <button type="submit">Submit</button>
            </fieldset>
        </form>
        <script type="text/javascript">
          window.top.postMessage('${formposted}', 'http://localhost:3002')
        </script>
      </body>

    </html>
  `));
});
/* POST form */
router.post('/', function(req, res, next) {
  res.redirect('/myform?formposted=success')
});

module.exports = router;
