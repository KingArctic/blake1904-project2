

export const progressTypes = {
  HAS_PROGRESS: 'HAS_PROGRESS',
  FAILED_TO_GET_PROGRESS: 'FAILED_TO_GET_PROGRESS',
  GET_CATEGORIES: 'GET_CATEGORIES'
  
}

export const getProgress = (userID: number) => async(dispatch) => {
  try {
    const resp = await fetch('http://localhost:8080/');
    
    console.log(resp);

if (resp.status === 201) {
      const body = await resp.json();
      console.log("this is the action:" + body);
      dispatch({
        payload: {
          body
        },
        type: progressTypes.HAS_PROGRESS
      })
    } else {
      dispatch({
        type: progressTypes.FAILED_TO_GET_PROGRESS
      })
    }
  } catch (err) {
    console.log(err);
  }
}
export const getCategories = () => async(dispatch) => {
  try {
    const resp = await fetch('http://localhost:8081/questiontype', {
      credentials: 'include'});
      const body = await resp.json();
      dispatch({
        payload: {
          body
        },
        type: progressTypes.GET_CATEGORIES
      })
    }  catch (err) {
    console.log(err);
  }
}