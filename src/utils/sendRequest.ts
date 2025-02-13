/* eslint-disable @typescript-eslint/no-explicit-any */
const BASE_URL = 'http://localhost:3000';

function wait(delay: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

type RequestMethod = 'GET' | 'POST' | 'PATCH' | 'DELETE';

async function sendRequest<T>(
  url: string,
  method: RequestMethod = 'GET',
  data: any = null
): Promise<T> {
  const options: RequestInit = { method };

  if (data) {
    options.body = JSON.stringify(data);
    options.headers = {
      'Content-Type': 'application/json; charset=UTF-8',
    };
  }

  await wait(300);
  const response = await fetch(BASE_URL + url, options);
  return await response.json();
}

export const client = {
  get: <T>(url: string) => sendRequest<T>(url),
  post: <T>(url: string, data: any) => sendRequest<T>(url, 'POST', data),
  patch: <T>(url: string, data: any) => sendRequest<T>(url, 'PATCH', data),
  delete: (url: string) => sendRequest(url, 'DELETE'),
};
