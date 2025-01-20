const Container = ({ children }) => {
  return (
    <>
      <div
        className="card container"
        style={{ width: "40%", height: "300px", borderRadius: "20px" }}
      >
        <div className="card-body">{children}</div>
      </div>
    </>
  );
};

export default Container;
