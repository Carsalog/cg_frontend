import JwtDecode from "jwt-decode";


export const decodeUser = token => {

  try {
    return JwtDecode(token);
  } catch (e) {
    return null;
  }
};

