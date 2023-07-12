/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Template } from './Template';

/**
 * This is a TemplateChild object that extends Template
 */
export type TemplateFull = (Template & {
id?: number;
});
