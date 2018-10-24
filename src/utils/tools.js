import JwtDecode from "jwt-decode";


export const decodeUser = token => {
  /**
   * Try to decode user, return user object or null
   * @param token: String
   * @return Object|null:
   */

  try {
    return JwtDecode(token);
  } catch (e) {
    return null;
  }
};

