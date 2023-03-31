const express = require('express');

const router = express.Router();

let data = [
    {id:1, title: "create a news letter", order: 1, completed: true, createdOn: new Date() },
    {id:2, title: "Take a cup of coffe", order: 2, completed: true, createdOn: new Date() },
    {id:3, title: "write a new article", order: 3, completed: true, createdOn: new Date() },
    {id:4, title: "Walk home after lunce", order: 4, completed: false, createdOn: new Date() },
    {id:5, title: "Have some dinner ", order:5, completed: false, createdOn: new Date() },
]

// GET /ITEMS

router.get('/', (req, res) =>{
    res.status(200).json(data);
})

// get /items/:id

router.get('/:id', (req, res) =>{
  let found = data.find(item => item.id === parseInt(req.params.id));
  if (found){
    res.status(200).json(found);
  }
  else {
    res.status(404).json({message: 'Item not Found'});
  }  
})

//post / items

router.post('/', (req, res) => {
  let newId = data.length + 1;
  let newOrder = data.length + 1;

  let newItem = {
    id: newId,
    title: req.body.title,
    order: newOrder,
    completed: false,
    createdOn: new Date()
  };
  data.push(newitem)

  res.status(201).json(newItem);

})

//put/item/5
router.put('/:id', (req, res) =>{
    let found = data.find(item.id === parseInt(req.params.id));
    if (found) {
        let updated = {
            id: found.id,
            title: req.body.title,
            order: req.body.order,
            completed: req.body.completed,
        }
        const targetIndex = data.indexOf(found);
        data.splice(targetIndex, 1, updated);
        res.status(200).json(updated);
    }
    else{
        res.status(404).json({message: 'Item not found'});
    }
})


router.delete('./:id', (req, res) => {
    let found = data.find(item => item.id === parseInt(req.params.id));
    if (found) {
        const targetIndex = data.indexOf(found);
        data.splice(targetIndex, 1);
        res.status(204).end();
    }
    else{
        res.status(404).json({message: 'Item not found'})
    }
})

module.exports = router
