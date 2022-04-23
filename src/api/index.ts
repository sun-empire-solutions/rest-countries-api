const BASE_API_URL = "https://restcountries.com/v3.1";

const request = async (path: string, method: Method = "GET") => {
  try {
    const response = await fetch(`${BASE_API_URL}/${path}`, {
      method,
      headers: { "Content-Type": "application/json" },
    });
    const responseBody = await response.json();
    return responseBody;
  } catch (error) {
    throw error;
  }
};

const get = (path: string) => {
  return request(path);
};

const api = { get };

type Method = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export { api };
