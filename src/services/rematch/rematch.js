import { init } from '@rematch/core'
import createLoadingPlugin from '@rematch/loading'
import selectPlugin from '@rematch/select'

import * as models from './models'

const loadingPlugin = createLoadingPlugin()

const store = init({
  models,
  plugins: [loadingPlugin, selectPlugin()],
})

export default store
