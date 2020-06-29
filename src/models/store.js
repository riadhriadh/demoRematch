import { init } from '@rematch/core'
import updatedPlugin from '@rematch/updated'
import thunk from 'redux-thunk'
import * as models from './models'
import createRematchPersist from '@rematch/persist'
import storage from 'redux-persist/es/storage';
import selectPlugin from '@rematch/select'
import {createLogger } from 'redux-logger'
let middlewares = [thunk]

  middlewares = [
    ...middlewares,
    createLogger({
      collapsed: true,
      colors: false,
    }),
  ]
const persistPlugin = createRematchPersist({
    whitelist: ['count'],
    version: 2,
    storage,
})
const updated = updatedPlugin()
const store = init({
    models,
    plugins: [updated,persistPlugin,selectPlugin()],
    middlewares,
})

export const { dispatch } = store

// state = { count: 0 }
// reducers
dispatch({ type: 'count/increment', payload: 1 }) // state = { count: 1 }
dispatch.count.increment(1) // state = { count: 2 }

// effects
dispatch({ type: 'count/incrementAsync', payload: 1 }) // state = { count: 3 } after delay
dispatch.count.incrementAsync(1) // state = { count: 4 } after delay
export default store