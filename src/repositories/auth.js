// Auth Endpoint

export const register = async (payload) => new Promise(async (resolve, reject) => {
  const response = await fetch(process.env.API_BASE_URL + '/auth/register', {
    method: 'POST',
    body: JSON.stringify(payload),
  });

  const data = await response.json();

  if (response.status >= 400) {
    reject(data);
  }

  resolve(data);
})

export const login = async (payload) => new Promise(async (resolve, reject) => {
  const response = await fetch(process.env.API_BASE_URL + '/auth/login', {
    method: 'POST',
    body: JSON.stringify(payload),
  });

  const data = await response.json();

  if (response.status >= 400) {
    reject(data);
  }

  resolve(data);
});

export const logout = async (payload) => new Promise(async (resolve, reject) => {
  const response = await fetch(process.env.API_BASE_URL + '/auth/logout', {
    method: 'POST'
  });

  const data = await response.json();

  if (response.status >= 400) {
    reject(data);
  }

  resolve(data);
});

