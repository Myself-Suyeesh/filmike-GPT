import { useNavigate, useRouteError } from "react-router-dom";

interface errorMessage {
  status: number;
  statusText: string;
}

const PageRouteError = () => {
  const error = useRouteError() as errorMessage;
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center my-64">
      <h1 className="text-[200px] font-bold">{error.status}</h1>
      <p className="text-xl">Page {error.statusText}</p>
      <button
        className="px-4 py-2 bg-primary mt-4 text-white rounded-md cursor-pointer"
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </button>
    </div>
  );
};

export default PageRouteError;
