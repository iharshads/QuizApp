const ErrorMssg = ({ children }) => {
    return (
      <div
        style={{
          width: "100%",
          padding: 10,
          marginBottom: 15,
          borderRadius: 4,
          backgroundColor: "orangered",
          textAlign: "center",
          color: "white",
          textTransform: "capitalize",
        }}
      >
        {children}
      </div>
    );
  };
  
  export default ErrorMssg;