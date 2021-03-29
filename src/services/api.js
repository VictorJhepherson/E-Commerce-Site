
const BASE_API = 'https://commerce-e.herokuapp.com';

export default {
  checkToken: async (token, user) => {
      const req = await fetch(`${BASE_API}/auth/refresh`, {
          method: 'POST',
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              "Authorization": 'Baerer ' + token
          },
          body: JSON.stringify({token, user})
      });
      const json = await req.json();
      return json;
  },
  signIn: async (email, password) => {
    const req = await fetch(`${BASE_API}/users/login`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    });
    const json = await req.json();

    return json;
  },
  signUp: async (email, password) => {
    const req = await fetch(`${BASE_API}/users`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    });
    const json = await req.json();

    return json;
  }
};