import { useRouteError } from 'react-router-dom';

const ErrorElement = () => {
  const error = useRouteError();
  console.log(error);
  return <h4>There was an error... Please reload the page.</h4>;
};
export default ErrorElement;
