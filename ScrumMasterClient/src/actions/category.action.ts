import { QuestionType } from "../model/QuestionType";
import { User } from "../model/user";


export const progressTypes = {
  HAS_PROGRESS: 'HAS_PROGRESS',
  FAILED_TO_GET_PROGRESS: 'FAILED_TO_GET_PROGRESS',
  GET_CATEGORIES: 'GET_CATEGORIES',
  SET_CATEGORY: 'SET_CATEGORY',
  UPDATE_USER: 'UPDATE_USER',
}

export const getProgress = (userID: number) => async (dispatch) => {
  try {
    const resp = await fetch('http://localhost:8081/');

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
export const getCategories = () => async (dispatch) => {
  try {
    const resp = await fetch('http://localhost:8081/questiontype', {
      credentials: 'include'
    });
    const body = await resp.json();
    dispatch({
      payload: {
        body
      },
      type: progressTypes.GET_CATEGORIES
    })
  } catch (err) {
    console.log(err);
  }
}

export const sendToQuestions = (currentCategory: QuestionType, history: any) => async (dispatch) => {
  dispatch({
    payload: {
      body: {
        currentCategory
      }
    },
    type: progressTypes.SET_CATEGORY
  })
  history.push('/quiz');
}

export const fetchArrays = (type: string, dif: number, user: User) => async (dispatch) => {
  console.log(type);
  try {
    const resp = await fetch('http://localhost:8081/question/fillarrays', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({ type, dif }),
      headers: {
        'content-type': 'application/json'
      }
    })
    if (resp.status === 200) {
      switch (type) {
        //#region Java
        case "Java":
          {
            console.log(`Hit Java`);
            const javaQuestions = await resp.json();
            user.topicLevels.javaDifficulty += 1;
            try {
              const resp2 = await fetch('http://localhost:8081/user', {
                method: 'PATCH',
                credentials: 'include',
                body: JSON.stringify(user),
                headers: {
                  'content-type': 'application/json'
                }
              })

              if (resp2.status === 202) {
                const updatedUser = await resp2.json();
                console.log(updatedUser);
                await dispatch({
                  payload: {
                    body: {
                      updatedUser
                    }
                  },
                  type: progressTypes.UPDATE_USER
                })
              }
            } finally {

            }
          }
          break;
        //#endregion
        //#region JS
        case "JavaScript":
          {
            console.log(`Hit JS`);
            user.javaScriptQuestions = await resp.json();
            user.topicLevels.jsDifficulty += 1;
            try {
              const resp2 = await fetch('http://localhost:8081/user', {
                method: 'PATCH',
                credentials: 'include',
                body: JSON.stringify(user),
                headers: {
                  'content-type': 'application/json'
                }
              })

              if (resp2.status === 202) {
                const updatedUser = await resp2.json();
                console.log(updatedUser);
                await dispatch({
                  payload: {
                    body: {
                      updatedUser
                    }
                  },
                  type: progressTypes.UPDATE_USER
                })
              }
            } finally {

            }
          }
          break;
        //#endregion
        //#region Hibernate
        case "Hibernate":
          {
            console.log(`Hit Hibernate`);
            user.hibernateQuestions = await resp.json();
            user.topicLevels.hibernateDifficulty += 1;
            try {
              const resp2 = await fetch('http://localhost:8081/user', {
                method: 'PATCH',
                credentials: 'include',
                body: JSON.stringify(user),
                headers: {
                  'content-type': 'application/json'
                }
              })

              if (resp2.status === 202) {
                const updatedUser = await resp2.json();
                console.log(updatedUser);
                await dispatch({
                  payload: {
                    body: {
                      updatedUser
                    }
                  },
                  type: progressTypes.UPDATE_USER
                })
              }
            } finally {

            }
          }
          break;
        //#endregion
        //#region Spring
        case "Spring":
          {
            console.log(`Hit Spring`);
            user.springQuestions = await resp.json();
            user.topicLevels.springDifficulty += 1;
            try {
              const resp2 = await fetch('http://localhost:8081/user', {
                method: 'PATCH',
                credentials: 'include',
                body: JSON.stringify(user),
                headers: {
                  'content-type': 'application/json'
                }
              })

              if (resp2.status === 202) {
                const updatedUser = await resp2.json();
                console.log(updatedUser);
                await dispatch({
                  payload: {
                    body: {
                      updatedUser
                    }
                  },
                  type: progressTypes.UPDATE_USER
                })
              }
            } finally {

            }
          }
          break;
        //#endregion
        //#region Node
        case "Node":
          {
            console.log(`Hit Node`);
            user.nodeQuestions = await resp.json();
            user.topicLevels.nodeDifficulty += 1;
            try {
              const resp2 = await fetch('http://localhost:8081/user', {
                method: 'PATCH',
                credentials: 'include',
                body: JSON.stringify(user),
                headers: {
                  'content-type': 'application/json'
                }
              })

              if (resp2.status === 202) {
                const updatedUser = await resp2.json();
                console.log(updatedUser);
                await dispatch({
                  payload: {
                    body: {
                      updatedUser
                    }
                  },
                  type: progressTypes.UPDATE_USER
                })
              }
            } finally {

            }
          }
          break;
        //#endregion
        //#region React
        case "React":
          {
            console.log(`Hit React`);
            user.reactQuestions = await resp.json();
            user.topicLevels.reactDifficulty += 1;
            try {
              const resp2 = await fetch('http://localhost:8081/user', {
                method: 'PATCH',
                credentials: 'include',
                body: JSON.stringify(user),
                headers: {
                  'content-type': 'application/json'
                }
              })

              if (resp2.status === 202) {
                const updatedUser = await resp2.json();
                console.log(updatedUser);
                await dispatch({
                  payload: {
                    body: {
                      updatedUser
                    }
                  },
                  type: progressTypes.UPDATE_USER
                })
              }
            } finally {

            }
          }
          break;
        //#endregion
        //#region SQL
        case "SQL":
          {
            console.log(`Hit SQL`);
            user.sqlQuestions = await resp.json();
            user.topicLevels.sqlDifficulty += 1;
            try {
              const resp2 = await fetch('http://localhost:8081/user', {
                method: 'PATCH',
                credentials: 'include',
                body: JSON.stringify(user),
                headers: {
                  'content-type': 'application/json'
                }
              })

              if (resp2.status === 202) {
                const updatedUser = await resp2.json();
                console.log(updatedUser);
                await dispatch({
                  payload: {
                    body: {
                      updatedUser
                    }
                  },
                  type: progressTypes.UPDATE_USER
                })
              }
            } finally {

            }
          }
          break;
        //#endregion
        default:
          console.log(`Hit Default`);
          break;
      }
    }
  } finally {

  }
}