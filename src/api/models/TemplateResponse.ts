/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ErrorData } from './ErrorData';
import type { TemplateFull } from './TemplateFull';

export type TemplateResponse = {
    data?: TemplateFull;
    error?: ErrorData;
};
