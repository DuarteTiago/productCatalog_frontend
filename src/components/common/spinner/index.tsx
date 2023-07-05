import { Spinner } from "reactstrap";

const PageSpinner = () => {
  return (
    <>
      <div className="vh-100 bg-transparent d-flex justify-content-center align-items-center">
        <Spinner animation="grow" color="light"></Spinner>
      </div>
    </>
  );
};
export default PageSpinner;
