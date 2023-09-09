// Books Endpoint

export const addBook = (payload) => new Promise(async (resolve, reject) => {
  const response = await fetch(process.env.API_BASE_URL + '/books', {
    method: 'POST',
    body: payload
  });

  const data = await response.json();

  if (response.status >= 400) {
    reject(data);
  }

  resolve(data);
});

export const getBooks = () => new Promise(async (resolve, reject) => {
  const response = await fetch(process.env.API_BASE_URL + `/books`, { cache: 'no-store' });

  const data = await response.json();

  if (response.status >= 400) {
    reject(data);
  }

  resolve(data);
});

export const getBook = (id) => new Promise(async (resolve, reject) => {
  const response = await fetch(process.env.API_BASE_URL + `/books/${id}`, {
    cache: 'no-store'
  });

  const data = await response.json();

  if (response.status >= 400) {
    reject(data);
  }

  resolve(data);
});

export const updateBook = (id, payload) => new Promise(async (resolve, reject) => {
  const response = await fetch(process.env.API_BASE_URL + `/books/${id}`, {
    method: 'PUT',
    body: JSON.stringify(payload)
  });

  const data = await response.json();

  if (response.status >= 400) {
    reject(data);
  }

  resolve(data);
});

export const deleteBook = (id) => new Promise(async (resolve, reject) => {
  const response = await fetch(process.env.API_BASE_URL + `/books/${id}`, {
    method: 'DELETE'
  });

  const data = await response.json(); 

  if (response.status >= 400) {
    reject(data);
  }

  resolve(data);
});
