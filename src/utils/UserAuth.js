class UserAuth {
  constructor(config) {
    this._url = config.BASE_URL;
    this._headers = config.headers;
  }

  _getResponse(response) {
    return response.ok ? response.json() : Promise.reject(`Ошибка: ${response.status}`);
  }

  register({ email, password, name }) {
    return fetch(`${this._url}/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ email, password, name })
    })
    .then(this._getResponse)
  }

  authorize({ email, password }) {
    return fetch(`${this._url}/signin`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({email, password})
    })
    .then(this._getResponse)
  }

  getContent(token) {
    // const token = localStorage.getItem('jwt');
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${token}`
      }
    })
    .then(this._getResponse)
  }
}

const userAuth = new UserAuth({
  // BASE_URL: 'http://localhost:3000',
  BASE_URL: 'https://api.movies.olerastova.nomoredomains.monster',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default userAuth;
