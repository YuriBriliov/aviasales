require('dotenv').config()
const express = require('express')
const app = express()
const morgan = require('morgan')
const router = express.Router()
const cors = require('cors');
const path = require('path')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const PORT = process.env.PORT || 3001;
const { Users } = require('./src/db/models')
// routers
const indexRouter = require('./src/routers/index.router')


const sessionConfig = {
  store: new FileStore(), // хранилище сессий
  key: 'sid', // ключ куки
  secret: 'sadfxzvvafsafe', // шифрование id сессии
  resave: false, // пересохранение сессии (когда что-то поменяли - false)
  saveUninitialized: false, // сохраняем пустую сессию (чтоб посмотреть)
  httpOnly: true, // нельзя изменить куки с фронта
  cookie: { expires: 24 * 60 * 60e3 },
}


app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.use(express.static(path.join(process.env.PWD, 'public')));

app.use(morgan())
app.use(session(sessionConfig))
app.use(cors({
  origin: true,
  credentials: true,
}));

app.use(async (req, res, next)=>{
  if (!req.session.user_id) {
    const userOptions = {
      shared: false,
    }
  try {
    const newUser = await Users.create(userOptions)
    req.session.user_id = newUser.id
    next()
  } catch (error) {
    console.error(error)
  }
  }else{
    next()
  }

})

app.use('/user', indexRouter)

app.listen(PORT, () => { console.log(`server start no ${PORT} port`) })
