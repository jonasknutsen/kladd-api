const Router = require('express-promise-router')
const db = require('../db')
const router = new Router()

module.exports = router

router.get('/:slug', async (req, res) => {
  const { id } = req.params
  const { rows } = await db.query('SELECT * FROM posts WHERE slug = $1', [slug])
  res.send(rows[0])
})

router.get('/', async (req, res) => {
  const { offset, limit } = req.params
  const queryLimit = limit ? limit : 10
  const queryOffset = offset ? offset : 0
  const { rows } = await db.query('SELECT * FROM posts LIMIT $1 OFFSET $2', [queryLimit, queryOffset])
  res.send(rows)
})
