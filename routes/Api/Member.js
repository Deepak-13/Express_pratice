const express = require('express');
const router = express.Router();
const uuid = require('uuid');
const members = require('../../Members');

// Get all members
router.get('/', (req, res) => {
    res.json(members);
});

// Get single member
router.get('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));
    if (found) {
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({ msg: 'Member not found' });
    }
});
//Create member
router.post('/', (req, res) => {
    const newMem = {
        id: uuid.v4(),
        name:req.body.name,
        email:req.body.email,
        status:'active'
    }

    if(!newMem.name || !newMem.email)
    {
      return  res.status(400).json({msg:'Please include name and email'})
    }
    members.push(newMem);
    res.json(members);
})

//update member
router.put('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));
    if (found) {
       const updateMem=req.body;
       members.forEach(member=>{
        if(updateMem.id==parseInt(req.params.id))
        {
            member.name=updateMem.name?updateMem.name:member.name,
            member.Email=updateMem.email?updateMem.Email:member.Email

            res.json(member);
        }
       })
       
    } else {
        res.status(400).json({ msg: 'Member not found' });
    }
});

//delete member
router.get('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));
    if (found) {
        res.json(members.filter(member => member.id !== parseInt(req.params.id)));
    } else {
        res.status(400).json({ msg: 'Member not found' });
    }
});
module.exports = router;
