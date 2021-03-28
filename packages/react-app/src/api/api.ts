import axiosBackendClient, { axiosBaseUrl } from "../axios/axios-client";
import { TasksApi } from "./generated";

export const tasksApi = new TasksApi(
  {
    basePath: axiosBaseUrl,
    isJsonMime: () => false,
  },
  undefined,
  axiosBackendClient
);
