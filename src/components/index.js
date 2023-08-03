import "./fixers.scss"

import AppContainer from "./app-container/main.vue"
import TopSearcher from "./top-searcher/main.vue"
import PullableList from "./pullable-list/main.vue"
import CommonForm from "./form/main.vue"

const plugin = {
  install(app) {
    app.component("rtm-app-container", AppContainer)
    app.component("rtm-top-searcher", TopSearcher)
    app.component("rtm-list", PullableList)
    app.component("rtm-form", CommonForm)
  }
}

export default plugin