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
    return { countries: responseBody, error: null };
  } catch (error) {
    return { countries: null, error };
  }
};

const get = (path: string) => {
  return request(path);
};

const api = { get };

type Method = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

type IResponse =
  | { countries: Country[]; error: null }
  | { countries: null; error: Error };

export { api };
