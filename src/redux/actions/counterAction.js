// below action for dispatch(export) the case to redux(redux store ready to received the action below)
export const handlePlus = (counterReducer) => dispatch => {
  const newTotal = counterReducer.total  + 1;

  dispatch({
   type: 'ADD',
   payload: newTotal,
  })
 }

 export const handleMines = (counterReducer) => dispatch => {
   const newTotal = counterReducer.total - 1;

   dispatch({
     type: 'MINES',
     payload: newTotal,
   })
 }