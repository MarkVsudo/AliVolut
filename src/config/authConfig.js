import { AuthServiceFactory, ServiceType } from 'virava';

export const authConfig = {
  clientId: process.env.REACT_APP_KEYCLOAK_CLIENT_ID,
  baseUrl: process.env.REACT_APP_KEYCLOAK_BASE_URL,
  realm: process.env.REACT_APP_KEYCLOAK_REALM
};

export const viravaDefault = AuthServiceFactory.create(ServiceType.DEFAULT);
