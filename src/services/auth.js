export const isAuthenticated = () => {
    const user = localStorage.getItem('user');
    if (user) {
      return true;
    } else {
      return false;
    }
  };


  export const getUserToken = () => {
    const localUser = localStorage.getItem('user');
    if(localUser) {
      const user = JSON.parse(localUser)
      return user.token
    }
    return null
  }

  export const Logout = () => {
   localStorage.removeItem('user')
}
