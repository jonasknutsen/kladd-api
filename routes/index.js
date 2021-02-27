const posts = require('./posts')
const photos = require('./tags')
module.exports = app => {
  app.use('/posts', posts)
  app.use('/tags', tags)
}
