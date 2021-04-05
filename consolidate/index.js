const cons = require('consolidate');

cons.ejs('views/ejs.html', { user: 'Chris Paul' }, function(err, html) {
  if (err) {
    throw err;
  }

  console.log('ejs');
  console.log(html);
{/* 
  <div>
    <h1>template engine: ejs</h1>
  </div>
  <div>
    <p>
      User: Chris Paul
    </p>
  </div>
*/}
});

cons.jazz('views/jazz.html', { user: 'Joe Ingles' }, function(err, html) {
  if (err) {
    throw err;
  }

  console.log('jazz');
  console.log(html);
{/* 
  <div>
    <h1>template engine: jazz</h1>
  </div>
  <div>
    <p>

      Hello, Joe Ingles

    </p>
  </div>
*/}
});

let engine = 'ejs';
cons[engine]('views/ejs.html', { user: 'Devin Booker' }, function(err, html) {
  if (err) {
    throw err;
  }

  console.log('ejs2');
  console.log(html);
{/* 
  <div>
    <h1>template engine: ejs</h1>
  </div>
  <div>
    <p>
      User: Devin Booker
    </p>
  </div>
*/}
});

engine = 'jazz';
cons[engine]('views/jazz.html', { user: 'Donovan Mitchell' })
  .then(function (html) {
    console.log('jazz2');
    console.log(html);
{/* 
  <div>
    <h1>template engine: jazz</h1>
  </div>
  <div>
    <p>

      Hello, Donovan Mitchell

    </p>
  </div>
*/}
  })
  .catch(function (err) {
    throw err;
  });
