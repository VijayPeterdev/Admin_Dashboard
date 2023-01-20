export const getAllUsersStart = () => ({
  type: "GET_ALL_USER_START",
});

export const getAllUsersSuccess = (users) => ({
  type: "GET_ALL_USER_SUCCESS",
  payload: users,
});

export const getAllUsersFailed = () => ({
  type: "GET_ALL_USER_FAILED",
});

export const createNewUserStart = () => ({
  type: "CREATE_NEWUSER_START",
});

export const createNewUserSuccess = (user) => ({
  type: "CREATE_NEWUSER_SUCCESS",
  payload :user,
});

export const createNewUserFailed = () => ({
  type: "CREATE_NEWUSER_FAILED",
});


// Update User

export const updateUserStart = () => ({
  type: "UPDATE_USER_START",
});

export const updateUserSuccess = (user) => ({
  type: "UPDATE_USER_SUCCESS",
  payload :user,
});

export const updateUserFailed = () => ({
  type: "UPDATE_USER_FAILED",
});


