class Auth {
  constructor(options) {
    this._baseUrl = options.baseUrl;
  }

  _getResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error(res.status));
  }
  registration(data) {
    return fetch(`${this._baseUrl}signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        data
      )
    }).then(res => {
      return this._getResponse(res);
    })
  }

  login(data) {
    return fetch(`${this._baseUrl}signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        data
      )
    }).then(res => {
      return this._getResponse(res);
    })
  }

  checkToken(token) {
    return fetch(`${this._baseUrl}users/me`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    }).then(res => {
      return this._getResponse(res);
    })
  }

}


const options = {
  baseUrl: 'https://auth.nomoreparties.co/'
}
const auth = new Auth(options);
export default auth;
