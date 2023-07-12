/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { File } from '../models/File';
import type { FileResponse } from '../models/FileResponse';
import type { UserResponse } from '../models/UserResponse';
import type { Users } from '../models/Users';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UsersService {

    /**
     * This is a method to get current user info
     * Get current user info
     * @returns UserResponse OK
     * @throws ApiError
     */
    public static getUserInfo(): CancelablePromise<UserResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/users',
            errors: {
                400: `BAD REQUEST`,
                401: `UNAUTHORIZED`,
                403: `FORBIDDEN`,
                500: `INTERNAL SERVER ERROR`,
            },
        });
    }

    /**
     * This is a method retrieving user by id
     * Get user by id
     * @param id The ID of the user to retrieve
     * @returns UserResponse OK
     * @throws ApiError
     */
    public static getUserId(
id: number,
): CancelablePromise<UserResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/users/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `BAD REQUEST`,
                401: `UNAUTHORIZED`,
                403: `FORBIDDEN`,
                404: `NOT FOUND`,
                500: `INTERNAL SERVER ERROR`,
            },
        });
    }

    /**
     * This is a method which updates user info
     * Update user info
     * @param id 
     * @param requestBody The updated user information
     * @returns UserResponse OK
     * @throws ApiError
     */
    public static updatedUserInfo(
id: number,
requestBody: Users,
): CancelablePromise<UserResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/users/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `BAD REQUEST`,
                401: `UNAUTHORIZED`,
                403: `FORBIDDEN`,
                404: `NOT FOUND`,
                500: `INTERNAL SERVER ERROR`,
            },
        });
    }

    /**
     * Upload avatar for user
     * Upload an avatar for a user with the given ID
     * @param userId The ID of the user
     * @param requestBody This is request body allows us to upload a avatar
     * @returns FileResponse OK
     * @throws ApiError
     */
    public static uploadAvatar(
userId: number,
requestBody: File,
): CancelablePromise<FileResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/users/{userId}/avatar',
            path: {
                'userId': userId,
            },
            body: requestBody,
            mediaType: 'image/png',
            errors: {
                400: `BAD REQUEST`,
                401: `UNAUTHORIZED`,
                403: `FORBIDDEN`,
                500: `INTERNAL SERVER ERROR`,
            },
        });
    }

    /**
     * This is a method retrieving user avatar
     * Retrieve the avatar for a user with the given ID
     * @param userId The ID of the user
     * @returns FileResponse OK
     * @throws ApiError
     */
    public static getUserAvatar(
userId: number,
): CancelablePromise<FileResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/users/{userId}/avatar',
            path: {
                'userId': userId,
            },
            errors: {
                400: `BAD REQUEST`,
                401: `UNAUTHORIZED`,
                403: `FORBIDDEN`,
                404: `NOT FOUND`,
                500: `INTERNAL SERVER ERROR`,
            },
        });
    }

    /**
     * Upload PID for user
     * Upload a PID for a user with the given ID
     * @param userId The ID of the user
     * @param requestBody This is request body allows us to upload pid
     * @returns FileResponse OK
     * @throws ApiError
     */
    public static uploadUserPid(
userId: number,
requestBody: File,
): CancelablePromise<FileResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/users/{userId}/pid',
            path: {
                'userId': userId,
            },
            body: requestBody,
            mediaType: 'image/png',
            errors: {
                400: `BAD REQUEST`,
                401: `UNAUTHORIZED`,
                403: `FORBIDDEN`,
                500: `INTERNAL SERVER ERROR`,
            },
        });
    }

    /**
     * Get user PID
     * Retrieve the PID for a user with the given ID
     * @param userId The ID of the user
     * @returns FileResponse OK
     * @throws ApiError
     */
    public static getUserPid(
userId: number,
): CancelablePromise<FileResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/users/{userId}/pid',
            path: {
                'userId': userId,
            },
            errors: {
                400: `BAD REQUEST`,
                401: `UNAUTHORIZED`,
                403: `FORBIDDEN`,
                404: `NOT FOUND`,
                500: `INTERNAL SERVER ERROR`,
            },
        });
    }

}
