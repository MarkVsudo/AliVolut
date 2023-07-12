/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { InfoHolder } from '../models/InfoHolder';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SystemService {

    /**
     * This is a healtheck method
     * This method returns a 200 respponse for healthceck purposes
     * @returns string OK
     * @throws ApiError
     */
    public static getApiSystemHealth(): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/system/health',
        });
    }

    /**
     * This is a version method
     * This method returns the current application version
     * @returns any System Version Response
     * @throws ApiError
     */
    public static getApiSystemInfo(): CancelablePromise<{
data?: InfoHolder;
}> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/system/info',
        });
    }

}
