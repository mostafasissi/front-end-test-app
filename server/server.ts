const jsonServer = require('json-server');

const server = jsonServer.create();

const router = jsonServer.router('server/db.json');

const middlewares = jsonServer.defaults();

const db = require('./db.json');

const fs = require('fs');


server.use(middlewares);

server.use(jsonServer.bodyParser);

server.post('/login', (req: any, res: any, next: any) => {
  const users = db.users;
    console.log(users);

  const user = users.filter(
    (u: any) => {
        console.log("in filter ")
        console.log(u.login , req.body.login );
        console.log( u.password, req.body.password);

        return u.login === req.body.login && u.password === req.body.password })[0];

  console.log(user)

  if (user) {
    res.send({ ...formatUser(user), token: 'user-token'} );
  } else {
    res.status(401).send('Incorrect login or password');
  }
});

server.post('/register', (req: any, res: any) => {
  const users = db.users;

  console.log(req.body)
  console.log(db.users)

  const user = users.filter((u: any) => u.login === req.body.login)[0];
  console.log(users)
  if (user === undefined || user === null) {
    db.users.push(req.body);
    // console.log("=================== after push")
    // console.log(db.users)
    // console.log("add user successfful");
    res.send({
      ...formatUser(req.body),
    });
  } else {
    res.status(500).send('User already exists');
  }
});

server.use(router);

server.listen(3000, () => {
  console.log('JSON Server is running');
});



function formatUser(user : any) {
    return user;
  }



// =================================== 

// Product CRUD operations

// Get all products
server.get('/products', (req : any, res : any) => {
  const products = db.products;
  res.json(products);
});

// Get a specific product by ID
server.get('/products/:id', (req : any, res : any ) => {
  const productId = parseInt(req.params.id);
  const product = db.products.find((p : any) => p.id === productId);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
});

// Create a new product
server.post('/products', (req : any, res : any) => {
  const newProduct = req.body;
  newProduct.id = generateProductId();
  db.products.push(newProduct);
  saveDb();
  res.json(newProduct);
});

// Update a product by ID
server.put('/products/:id', (req : any, res : any) => {
  const productId = parseInt(req.params.id);
  const updatedProduct = req.body;
  const index = db.products.findIndex((p : any) => p.id === productId);

  if (index !== -1) {
    db.products[index] = { ...db.products[index], ...updatedProduct };
    saveDb();
    res.json(db.products[index]);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
});

// Delete a product by ID
server.delete('/products/:id', (req : any, res : any) => {
  const productId = parseInt(req.params.id);
  const index = db.products.findIndex((p : any) => p.id === productId);

  if (index !== -1) {
    const deletedProduct = db.products.splice(index, 1)[0];
    saveDb();
    res.json(deletedProduct);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
});

// Helper function to generate a unique product ID
function generateProductId() {
  return Math.max(...db.products.map((p : any) => p.id), 0) + 1;
}

// Helper function to save changes to the database
function saveDb() {
  fs.writeFileSync('./server/db.json', JSON.stringify(db, null, 2));
}