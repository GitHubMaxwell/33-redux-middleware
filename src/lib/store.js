import { createStore, applyMiddleware, compose} from 'redux'
import { logger, budgetCheck }from '../middleware/middleware.js'
import rootReducer from '../reducer/root-reducer.js'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => createStore(rootReducer, composeEnhancers(applyMiddleware(logger,budgetCheck)));