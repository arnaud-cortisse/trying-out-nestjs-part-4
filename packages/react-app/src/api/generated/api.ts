/* tslint:disable */
/* eslint-disable */
/**
 * Tasks
 * The tasks API description
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface CreateTaskDto
 */
export interface CreateTaskDto {
    /**
     * The title of the task
     * @type {string}
     * @memberof CreateTaskDto
     */
    title: string;
    /**
     * The description of the task
     * @type {string}
     * @memberof CreateTaskDto
     */
    description: string;
}
/**
 * 
 * @export
 * @interface TaskDto
 */
export interface TaskDto {
    /**
     * The ID of the task
     * @type {number}
     * @memberof TaskDto
     */
    id: number;
    /**
     * The title of the task
     * @type {string}
     * @memberof TaskDto
     */
    title: string;
    /**
     * The description of the task
     * @type {string}
     * @memberof TaskDto
     */
    description: string;
}
/**
 * 
 * @export
 * @interface UpdateTaskDto
 */
export interface UpdateTaskDto {
    /**
     * The title of the task
     * @type {string}
     * @memberof UpdateTaskDto
     */
    title: string;
    /**
     * The description of the task
     * @type {string}
     * @memberof UpdateTaskDto
     */
    description: string;
}

/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        appControllerGetHello: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async appControllerGetHello(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await DefaultApiAxiosParamCreator(configuration).appControllerGetHello(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        appControllerGetHello(options?: any): AxiosPromise<void> {
            return DefaultApiFp(configuration).appControllerGetHello(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public appControllerGetHello(options?: any) {
        return DefaultApiFp(this.configuration).appControllerGetHello(options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * TasksApi - axios parameter creator
 * @export
 */
export const TasksApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {CreateTaskDto} createTaskDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tasksControllerCreate: async (createTaskDto: CreateTaskDto, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'createTaskDto' is not null or undefined
            if (createTaskDto === null || createTaskDto === undefined) {
                throw new RequiredError('createTaskDto','Required parameter createTaskDto was null or undefined when calling tasksControllerCreate.');
            }
            const localVarPath = `/tasks`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const nonString = typeof createTaskDto !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(createTaskDto !== undefined ? createTaskDto : {})
                : (createTaskDto || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tasksControllerFindAll: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/tasks`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tasksControllerFindOne: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling tasksControllerFindOne.');
            }
            const localVarPath = `/tasks/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tasksControllerRemove: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling tasksControllerRemove.');
            }
            const localVarPath = `/tasks/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} id 
         * @param {UpdateTaskDto} updateTaskDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tasksControllerUpdate: async (id: string, updateTaskDto: UpdateTaskDto, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling tasksControllerUpdate.');
            }
            // verify required parameter 'updateTaskDto' is not null or undefined
            if (updateTaskDto === null || updateTaskDto === undefined) {
                throw new RequiredError('updateTaskDto','Required parameter updateTaskDto was null or undefined when calling tasksControllerUpdate.');
            }
            const localVarPath = `/tasks/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const nonString = typeof updateTaskDto !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(updateTaskDto !== undefined ? updateTaskDto : {})
                : (updateTaskDto || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TasksApi - functional programming interface
 * @export
 */
export const TasksApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @param {CreateTaskDto} createTaskDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tasksControllerCreate(createTaskDto: CreateTaskDto, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await TasksApiAxiosParamCreator(configuration).tasksControllerCreate(createTaskDto, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tasksControllerFindAll(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await TasksApiAxiosParamCreator(configuration).tasksControllerFindAll(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tasksControllerFindOne(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TaskDto>> {
            const localVarAxiosArgs = await TasksApiAxiosParamCreator(configuration).tasksControllerFindOne(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tasksControllerRemove(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await TasksApiAxiosParamCreator(configuration).tasksControllerRemove(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {string} id 
         * @param {UpdateTaskDto} updateTaskDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tasksControllerUpdate(id: string, updateTaskDto: UpdateTaskDto, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await TasksApiAxiosParamCreator(configuration).tasksControllerUpdate(id, updateTaskDto, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * TasksApi - factory interface
 * @export
 */
export const TasksApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @param {CreateTaskDto} createTaskDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tasksControllerCreate(createTaskDto: CreateTaskDto, options?: any): AxiosPromise<void> {
            return TasksApiFp(configuration).tasksControllerCreate(createTaskDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tasksControllerFindAll(options?: any): AxiosPromise<void> {
            return TasksApiFp(configuration).tasksControllerFindAll(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tasksControllerFindOne(id: string, options?: any): AxiosPromise<TaskDto> {
            return TasksApiFp(configuration).tasksControllerFindOne(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tasksControllerRemove(id: string, options?: any): AxiosPromise<void> {
            return TasksApiFp(configuration).tasksControllerRemove(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} id 
         * @param {UpdateTaskDto} updateTaskDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tasksControllerUpdate(id: string, updateTaskDto: UpdateTaskDto, options?: any): AxiosPromise<void> {
            return TasksApiFp(configuration).tasksControllerUpdate(id, updateTaskDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for tasksControllerCreate operation in TasksApi.
 * @export
 * @interface TasksApiTasksControllerCreateRequest
 */
export interface TasksApiTasksControllerCreateRequest {
    /**
     * 
     * @type {CreateTaskDto}
     * @memberof TasksApiTasksControllerCreate
     */
    readonly createTaskDto: CreateTaskDto
}

/**
 * Request parameters for tasksControllerFindOne operation in TasksApi.
 * @export
 * @interface TasksApiTasksControllerFindOneRequest
 */
export interface TasksApiTasksControllerFindOneRequest {
    /**
     * 
     * @type {string}
     * @memberof TasksApiTasksControllerFindOne
     */
    readonly id: string
}

/**
 * Request parameters for tasksControllerRemove operation in TasksApi.
 * @export
 * @interface TasksApiTasksControllerRemoveRequest
 */
export interface TasksApiTasksControllerRemoveRequest {
    /**
     * 
     * @type {string}
     * @memberof TasksApiTasksControllerRemove
     */
    readonly id: string
}

/**
 * Request parameters for tasksControllerUpdate operation in TasksApi.
 * @export
 * @interface TasksApiTasksControllerUpdateRequest
 */
export interface TasksApiTasksControllerUpdateRequest {
    /**
     * 
     * @type {string}
     * @memberof TasksApiTasksControllerUpdate
     */
    readonly id: string

    /**
     * 
     * @type {UpdateTaskDto}
     * @memberof TasksApiTasksControllerUpdate
     */
    readonly updateTaskDto: UpdateTaskDto
}

/**
 * TasksApi - object-oriented interface
 * @export
 * @class TasksApi
 * @extends {BaseAPI}
 */
export class TasksApi extends BaseAPI {
    /**
     * 
     * @param {TasksApiTasksControllerCreateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TasksApi
     */
    public tasksControllerCreate(requestParameters: TasksApiTasksControllerCreateRequest, options?: any) {
        return TasksApiFp(this.configuration).tasksControllerCreate(requestParameters.createTaskDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TasksApi
     */
    public tasksControllerFindAll(options?: any) {
        return TasksApiFp(this.configuration).tasksControllerFindAll(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {TasksApiTasksControllerFindOneRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TasksApi
     */
    public tasksControllerFindOne(requestParameters: TasksApiTasksControllerFindOneRequest, options?: any) {
        return TasksApiFp(this.configuration).tasksControllerFindOne(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {TasksApiTasksControllerRemoveRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TasksApi
     */
    public tasksControllerRemove(requestParameters: TasksApiTasksControllerRemoveRequest, options?: any) {
        return TasksApiFp(this.configuration).tasksControllerRemove(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {TasksApiTasksControllerUpdateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TasksApi
     */
    public tasksControllerUpdate(requestParameters: TasksApiTasksControllerUpdateRequest, options?: any) {
        return TasksApiFp(this.configuration).tasksControllerUpdate(requestParameters.id, requestParameters.updateTaskDto, options).then((request) => request(this.axios, this.basePath));
    }
}


