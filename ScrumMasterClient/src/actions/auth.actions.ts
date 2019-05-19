import { environment } from "../environment";
import { User } from "../model/user";
import { ShopItem } from "../model/item";
import { Rarity } from "../model/rarity";
import { ItemType } from "../model/itemType";

export const authTypes = {
  INVALID_CREDENTIALS: 'INVALID_CREDENTIALS',
  FAILED_TO_LOGIN: 'FAILED_TO_LOGIN',
  LOGGED_IN: 'LOGGED_IN'
}

export const login = (username: string, password: string, history: any) => async(dispatch) => {
  try {
    const resp = await fetch('http://localhost:8080/user/login', {
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