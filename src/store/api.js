import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const COHORT_CODE = "2408-FTB-ET-WEB-AM";
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${COHORT_CODE}/`;

// Configure createApi to use API_URL as the base URL and add "Puppy" as a tag type
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  tagTypes: ["Puppy"],
  endpoints: () => ({}),
});

export default api;
