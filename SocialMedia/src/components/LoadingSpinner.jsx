const LoadingSpinner = () => {
  return (
    <div className="text-center spinner">
      <div
        className="spinner-border"
        style={{ width: "4rem", height: "4rem" }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
