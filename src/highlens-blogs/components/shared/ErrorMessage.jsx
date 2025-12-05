const ErrorMessage = ({ message }) => {
  return (
    <div className="bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded-lg my-4">
      <p className="font-medium">Error:</p>
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;
