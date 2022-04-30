import { Country } from "../types";

const BASE_API_URL = "https://restcountries.com/v3.1";

const request = async (
  path: string,
  method: Method = "GET"
): Promise<IResponse> => {
  try {
    const response = await fetch(`${BASE_API_URL}/${path}`, {
      method,
      headers: { "Content-Type": "application/json" },
    });
    const responseBody = await response.json();
    return { response: responseBody, error: null };
  } catch (error) {
    return { response: null, error };
  }
};

const get = (path: string) => {
  return request(path);
};

const api = { get };

type Method = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

type IResponse =
  | { response: Country[] | Country; error: null }
  | { response: null; error: Error };

export { api };
