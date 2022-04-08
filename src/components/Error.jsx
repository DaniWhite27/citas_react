const Error = ({ children }) => {
  return (
    <div className="bg-red-800 text-white text-center p-3 upper-case font-bold mb-3 rounded-xl">
      {children}
    </div>
  );
};

export default Error;
