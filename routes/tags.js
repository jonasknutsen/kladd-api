const Router = require('express-promise-router')
const db = require('../db')
const router = new Router()

module.exports = router

router.get('/:slug', async (req, res) => {
  const { id } = req.params
  const { rows } = await db.query('SELECT * FROM posts WHERE slug = $1', [slug])
  res.send(rows[0])
})
