const router = require('express').Router();

const { Users } = require('../db/models')

router.get('/', async (req, res) => {
  const { user_id } = req.session
  const response = await Users.findByPk(user_id)
  res.json(response)
});


router.post('/', async (req, res) => {
  try {
    const response = await Users.create(req.body, {raw: true, plain: true})
    res.json(response);
  } catch (error) {
    console.log(error)
  }
});


router.put('/', async (req, res) => {
  const { id, shared, email } = req.body
  try {
    await Users.update({shared, email}, {
      where :{
        id: Number(id)
      }
    })
    const user = await Users.findByPk(id)
    res.status(200).json(user)
  } catch (error) {
    console.error(error)
  }
});


module.exports = router;
