import { useHistory, useLocation } from 'react-router-dom';

const useRemoveQueryParam = () => {
  const history = useHistory();
  const location = useLocation();

  const removeAllQueryParams = () => {
    history.push({
      pathname: location.pathname,
      search: '',  // Clearing all query parameters
    });
  };

  return removeAllQueryParams;
};

export default useRemoveQueryParam;
