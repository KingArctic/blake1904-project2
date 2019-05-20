export const authTypes = {
  INVALID_CREDENTIALS: 'INVALID_CREDENTIALS',
  FAILED_TO_LOGIN: 'FAILED_TO_LOGIN',
  LOGGED_IN: 'LOGGED_IN'
}

export const login = (username: string, password: string, history: any) => async(dispatch) => {
  try {
    const resp = await fetch('http://localhost:8081/user/login', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({username, password}),
      headers: {
        'content-type': 'application/json'
      }
    })
    
    console.log(resp);

    if (resp.status === 401) {
      dispatch({
        type: authTypes.INVALID_CREDENTIALS
      })
    } else if (resp.status === 201) {
      const user = await resp.json();
      console.log("this is the action:" + user);
      dispatch({
        payload: {
          user
        },
        type: authTypes.LOGGED_IN
      })
      history.push('/user-page');
    } else {
      dispatch({
        type: authTypes.FAILED_TO_LOGIN
      })
    }
  } catch (err) {
    console.log(err);
  }
}
export const register = (name:string, username: string, password: string, 
  email: string, history:any) => async(dispatch) => {
  try {
    const resp = await fetch('http://localhost:8081/user', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({name, username, password, email}),
      headers: {
        'content-type': 'application/json'
      }
    })

    if (resp.status === 401) {
      dispatch({
        type: authTypes.INVALID_CREDENTIALS
      })
    } else if (resp.status === 201) {
      const user = await resp.json();
      console.log("this is the action:" + user);
      dispatch({
        payload: {
          user
        },
        type: authTypes.LOGGED_IN
      })
      history.push('/user-page');
    } else {
      dispatch({
        type: authTypes.FAILED_TO_LOGIN
      })
    }
  } catch (err) {
    console.log(err);
  }
}
