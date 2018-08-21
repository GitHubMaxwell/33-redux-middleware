export const logger = store => next => action => {
    console.log('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    return result
  }


export const budgetCheck = store => next => action => {
    if((action.type === 'CATEGORY_CREATE' || action.type === 'CATEGORY_UPDATE') && action.payload.budget <= 0) {
        alert('You have to enter a budget $1 or greater')
    } else {
        return next(action)
    }
  }

// export const priceCheck = store => next => action => {
//     if(action.type === 'EXPENSE_CREATE') {

//         // total category money store.getState().catReducer.
//         let category = store.getState().catReducer
//         category.map(() => {
            
//         })
//         console.log(store.getState().catReducer)
//         console.log('action: ',action.categoryId)
//         return next(action)
//     } else {
//         console.log('nada')
//         return next(action)
//     }
//   }

//   export default logger;

//   console.log('dispatching', action)
//     let result = next(action)
//     console.log('next state', store.getState())
//     return result