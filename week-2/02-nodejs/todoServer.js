/**
  You need to create an express HTTP server in Node.js which will handle the logic of a todo list app.
  - Don't use any database, just store all the data in an array to store the todo list data (in-memory)
  - Hard todo: Try to save responses in files, so that even if u exit the app and run it again, the data remains (similar to databases)

  Each todo has a title and a description. The title is a string and the description is a string.
  Each todo should also get an unique autogenerated id every time it is created
  The expected API endpoints are defined below,
  1.GET /todos - Retrieve all todo items
    Description: Returns a list of all todo items.
    Response: 200 OK with an array of todo items in JSON format.
    Example: GET http://localhost:3000/todos
    
  2.GET /todos/:id - Retrieve a specific todo item by ID
    Description: Returns a specific todo item identified by its ID.
    Response: 200 OK with the todo item in JSON format if found, or 404 Not Found if not found.
    Example: GET http://localhost:3000/todos/123
    
  3. POST /todos - Create a new todo item
    Description: Creates a new todo item.
    Request Body: JSON object representing the todo item.
    Response: 201 Created with the ID of the created todo item in JSON format. eg: {id: 1}
    Example: POST http://localhost:3000/todos
    Request Body: { "title": "Buy groceries", "completed": false, description: "I should buy groceries" }
    
  4. PUT /todos/:id - Update an existing todo item by ID
    Description: Updates an existing todo item identified by its ID.
    Request Body: JSON object representing the updated todo item.
    Response: 200 OK if the todo item was found and updated, or 404 Not Found if not found.
    Example: PUT http://localhost:3000/todos/123
    Request Body: { "title": "Buy groceries", "completed": true }
    
  5. DELETE /todos/:id - Delete a todo item by ID
    Description: Deletes a todo item identified by its ID.
    Response: 200 OK if the todo item was found and deleted, or 404 Not Found if not found.
    Example: DELETE http://localhost:3000/todos/123

    - For any other route not defined in the server return 404

  Testing the server - run `npm run test-todoServer` command in terminal
 */
 /**
  You need to create an express HTTP server in Node.js which will handle the logic of a todo list app.
  - Don't use any database, just store all the data in an array to store the todo list data (in-memory)
  - Hard todo: Try to save responses in files, so that even if u exit the app and run it again, the data remains (similar to databases)

  Each todo has a title and a description. The title is a string and the description is a string.
  Each todo should also get an unique autogenerated id every time it is created
  The expected API endpoints are defined below,
  1.GET /todos - Retrieve all todo items
    Description: Returns a list of all todo items.
    Response: 200 OK with an array of todo items in JSON format.
    Example: GET http://localhost:3000/todos
    
  2.GET /todos/:id - Retrieve a specific todo item by ID
    Description: Returns a specific todo item identified by its ID.
    Response: 200 OK with the todo item in JSON format if found, or 404 Not Found if not found.
    Example: GET http://localhost:3000/todos/123
    
  3. POST /todos - Create a new todo item
    Description: Creates a new todo item.
    Request Body: JSON object representing the todo item.
    Response: 201 Created with the ID of the created todo item in JSON format. eg: {id: 1}
    Example: POST http://localhost:3000/todos
    Request Body: { "title": "Buy groceries", "completed": false, description: "I should buy groceries" }
    
  4. PUT /todos/:id - Update an existing todo item by ID
    Description: Updates an existing todo item identified by its ID.
    Request Body: JSON object representing the updated todo item.
    Response: 200 OK if the todo item was found and updated, or 404 Not Found if not found.
    Example: PUT http://localhost:3000/todos/123
    Request Body: { "title": "Buy groceries", "completed": true }
    
  5. DELETE /todos/:id - Delete a todo item by ID
    Description: Deletes a todo item identified by its ID.
    Response: 200 OK if the todo item was found and deleted, or 404 Not Found if not found.
    Example: DELETE http://localhost:3000/todos/123

    - For any other route not defined in the server return 404

  Testing the server - run `npm run test-todoServer` command in terminal
 */

  
  const express = require('express');
  
  const app = express();

  // to do list
  let todoList=[]
  let ind=0;
  
  app.use(express.json());


  // 1.
  app.get('/todos',(req,res)=>{
    res.status(200).json(todoList);
  })


  //2.
  app.get('/todos/:id',(req,res)=>{
     const id=parseInt(req.params.id);
     const index=isAvail(id);
     if(index>=0)
      res.send(todoList[index]);
    else
      res.status(404).send()
  })

  //3.
  app.post('/todos',(req,res)=>{
     const title=req.body.title;
     const completed=req.body.completed;
     const description=req.body.description
     const itemId=ind;
     ind+=1;
     
     const item={
      id:itemId,
      title:title,
      completed:completed,
      description:description,
     }

     todoList.push(item);
     
     res.status(201).json({id:itemId});
  })
  
// 4
app.put('/todos/:id', (req, res) => {
  const id = req.params.id;
  const index = isAvail(id);
  if (index >= 0) {
    const title = req.body.title;
    const completed = req.body.completed;
    todoList[index].title = title;
    todoList[index].completed = completed;
    res.status(200).json(todoList[index]); // Send the updated todo as a response
  } else {
    res.status(404).send();
  }
});

// 5
app.delete('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = isAvail(id);
  if (index >= 0) {
    const deletedTodo = todoList.splice(index, 1)[0];
    res.status(200).json(deletedTodo); // Send the deleted todo as a response
  } else {
    res.status(404).send();
  }
});


  function isAvail(id)
  {
    for(let i=0;i<todoList.length;i++)
       if(id==todoList[i].id)
        return i;
      return -1;
  }

  app.all('*',(req,res)=>{
    res.status(404).send()
  })
  // app.listen(3000)
  module.exports = app;
