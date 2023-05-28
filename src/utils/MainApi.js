class MainApi {
  constructor(config) {
    this._url = config.baseUrl;
    this._headers = config._headers;
  }

  getToken() {
    return this._headers.authorization = `Bearer ${localStorage.getItem('jwt')}`;
  }
}

const mainApi = new MainApi({
  baseUrl: 'https://api.movies.olerastova.nomoredomains.monster',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default mainApi;
