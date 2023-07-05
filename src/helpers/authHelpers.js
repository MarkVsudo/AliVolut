import { showErrorToastMessage } from '../components/shared/Toast/Toast';
import { ACCESS_TOKEN, TOAST_ERROR_MESSAGE } from '../utils/constants';

const getToken = () => {
  try {
    return localStorage.getItem(ACCESS_TOKEN);
  } catch (error) {
    if (error.detail) {
      showErrorToastMessage(error.detail);
    } else {
      showErrorToastMessage(TOAST_ERROR_MESSAGE);
    }
    return null;
  }
};

export const isAuthenticated = () => {
  const token = getToken();
  if (token && token !== 'undefined' && token !== 'null') {
    return true;
  }
  return false;
};
