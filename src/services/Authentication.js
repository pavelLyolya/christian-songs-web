import {getToken, removeToken, setToken} from "./LocalStorage";
import authenticate from "../api/authenticate";

const Authentication = {
  isAuthenticated: !!getToken(),
  authenticate: async function (username, password) {
    const [ isAuth, token ] = await authenticate(username, password);
    if (!isAuth) {
      return false;
    }
    setToken(token);
    this.isAuthenticated = true;
    return true;
  },
  signOut: function () {
    removeToken();
    this.isAuthenticated = false;
  }
};

export default Authentication;
