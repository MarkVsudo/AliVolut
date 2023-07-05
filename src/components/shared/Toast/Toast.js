import { toast } from 'react-toastify';
import { TOAST_ERROR_MESSAGE } from '../../../utils/constants';

export const showErrorToastMessage = (errorMessage) => {
  let error;

  if (errorMessage) {
    error = errorMessage.body.error.detail;
  } else if (errorMessage?.length) {
    error = errorMessage;
  } else {
    error = TOAST_ERROR_MESSAGE;
  }

  toast.error(`${error}`, {
    position: toast.POSITION.TOP_RIGHT
  });
};

export const showSuccessToastMessage = (successMessage) => {
  toast.success(`${successMessage}`, {
    position: toast.POSITION.TOP_RIGHT
  });
};
