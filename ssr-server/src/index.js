import hypernova from 'hypernova/server'
import { Vue, renderVue } from 'hypernova-vue'
import express from 'express'
import path from 'path'

// import from our rails/javascript folder with the webpack resolve alias for ease of use.
import App from 'Javascript/App.vue'
import TodoItem from 'Components/TodoItem.vue'

hypernova({
  devMode: true,
  port: 3030,
  getComponent (name, context) {
    console.log('name->', name)
    console.log('context->', context)

    if (name === 'App') {
      return renderVue(name, Vue.extend(App))
    } else if (name === 'TodoItem') {
      return renderVue(name, Vue.extend(TodoItem))
    }
  },
  createApplication: function () {
    const app = express()

    app.use(express.static(path.join(process.cwd(), 'dist')))

    app.get('/health', function (req, res) {
      return res.status(200).send('OK')
    })

    return app
  }
})
