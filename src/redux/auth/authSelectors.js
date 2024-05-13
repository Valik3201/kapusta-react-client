export const getUser = state => state.auth.user;
export const getLoadingStatus = state => state.auth.isLoading;
export const getLogStatus = state => state.auth.isLoggedIn;
export const getToken = state => state.auth.token;
export const getSuccessToken = state => state.auth.accessToken;