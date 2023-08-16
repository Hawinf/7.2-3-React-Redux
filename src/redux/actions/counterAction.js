// below action for dispatch(export) the case to redux(redux store ready to received the action below)
export const handlePlus = (total) => dispatch => {
    
    const newTotal = total  + 1;
 
    dispatch({
     type: 'ADD',
     payload: newTotal,
    })
   }


export const handleMines = (total) => dispatch => {
    
     const newTotal = total - 1;
 
     dispatch({
       type: 'MINES',
       payload: newTotal,
     })
   }