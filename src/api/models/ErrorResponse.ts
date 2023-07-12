/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ErrorData } from './ErrorData';

/**
 * This is the response object in case of errors, compliant with RFC7807
 */
export type ErrorResponse = {
    error?: ErrorData;
};
