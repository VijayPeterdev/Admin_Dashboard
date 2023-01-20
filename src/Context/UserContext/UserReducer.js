const UsersReducer = (state, action) => {
  switch (action.type) {
    case "GET_ALL_USER_START":
      return {
        users: [],
        isFetching: true,
        error: false,
      };
    case "GET_ALL_USER_SUCCESS":
      return {
        users: action.payload,
        isFetching: false,
        error: false,
      };

    case "GET_ALL_USER_FAILED":
      return {
        users: [],
        isFetching: false,
        error: true,
      };
      case "UPDATE_USER_START":
        return {
           ...state,
          isFetching: true,
          error: false,
        };
      case "UPDATE_USER_SUCCESS":
        return {
          users : state.users.map(
            (user)  => user._id == action.payload._id && action.payload
          ),
          isFetching: false,
          error: false,
        };
  
      case "UPDATE_USER_FAILED":
        return {
          ...state,
          isFetching: false,
          error: true,
        };

    default:
      return {
        ...state,
      };
  }
};

export default UsersReducer;
