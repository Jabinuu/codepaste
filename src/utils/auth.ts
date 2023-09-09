const TOKEN_NAME = 'token'
export function getToken() {
  // return Cookies.get(TOKEN_NAME)
  return localStorage.getItem('token')
}

export function setToken(token: string) {
  // Cookies.set(TOKEN_NAME, token)
  localStorage.setItem(TOKEN_NAME, token)
}

export function deleteToken() {
  // Cookies.remove(TOKEN_NAME)
  localStorage.removeItem(TOKEN_NAME)
}
