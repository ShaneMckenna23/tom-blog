import { CancelToken } from 'axios';
import apiHelper from 'globals/apiHelper';

const INCREMENT = '[counter] Increment!';
const DECREMENT = '[counter] Decrement!';

const initialState = {
  count: 0,
};

export default function reducer(state = initialState, action = {}) {
  const { count } = state;
  switch (action.type) {
    case INCREMENT:
      return {
        count: count + 1,
      };
    case DECREMENT:
      return {
        count: count - 1,
      };
    default:
      return state;
  }
}

let usersAxiosCancel;

export function getUsersData() {
  return dispatch => {
    dispatch(isFetchingUsers());

    if (usersAxiosCancel) {
      usersAxiosCancel();
    }

    apiHelper()
      .get(`${routes.api.getUserData}`, {
        cancelToken: new CancelToken(function executor(cancel) {
            usersAxiosCancel = cancel;
        }),
      })
      .then(response => {
        usersAxiosCancel = undefined;

        dispatch(fetchUsersSuccess(response.data.stateInfo));
      })
      .catch(error => {
        usersAxiosCancel = undefined;
        dispatch(fetchUsersFailure(error));
      });
  };
}