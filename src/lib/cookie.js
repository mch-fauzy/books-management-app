const getNextCookieStore = () => {
  const { cookies } = require('next/headers');

  return cookies();
};

export const getCookie = (key) => {
  if (typeof window === 'undefined') {
    const cookieStore = getNextCookieStore();
    return cookieStore.get(key);  
  };

  const cookies = document.cookie.split(';');
  const cookie = cookies.find((_cookie) => _cookie.trim().startsWith(`${key}=`));

  if (!cookie) {
    return undefined;
  }

  return cookie.split('=')[1];
};

export const deleteCookie = (key) => {
  if (typeof window === 'undefined') {
    const cookieStore = getNextCookieStore();
    cookieStore.delete(key);
    
    return;
  }

  document.cookie = `${key}=; max-age=0;`;
};
