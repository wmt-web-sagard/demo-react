const redux = require("redux");
const axios = require("axios");
const thunkMiddleware = require("redux-thunk").default;

const createStore = redux.createStore;
const composeEnhancers =  redux.compose;
const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
const FETCH_USER_FAIL = "FETCH_USER_FAIL";

const intialState = { loading: false, users: [], error: "" };

const fetch_User_request = () => {
  return { type: FETCH_USER_REQUEST };
};
const fetch_User_success = (users) => {
  return { type: FETCH_USER_SUCCESS, payload: users };
};
const fetch_User_fail = (error) => {
  return { type: FETCH_USER_FAIL, payload: error };
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return { ...state, loading: true };

    case FETCH_USER_SUCCESS:
      return { loading: false, user: action.payload, error: "" };

    case FETCH_USER_FAIL:
      return { loading: false, user: [], error: action.payload };
  }
};

const fetchUser = () => {
  return function  (dispatch) {
    dispatch(fetch_User_request());
    axios
      .get("https://65697204de53105b0dd70a35.mockapi.io/DemoApi")
      .then((response) => {
        const users = response.data.map((user) => user.id);
        dispatch(fetch_User_success(users));
      })
      .catch((error) => {
        dispatch(fetch_User_fail(error.message));
      });
  };
};
const applyMiddleware = redux.applyMiddleware(thunkMiddleware);
const store = createStore(reducer, composeEnhancers(applyMiddleware));

store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(fetchUser());
