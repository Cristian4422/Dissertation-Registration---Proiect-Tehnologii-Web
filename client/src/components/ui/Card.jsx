const Card = ({ children }) => {
  return (
    <div
      className="max-w-sm p-4 bg-green1 border border-green1hover rounded shadow-lg 
      dark:bg-green3 dark:border-gray-500 dark:text-dark text-black font-helvetica 
      transition-transform duration-100 ease-in-out transform hover:scale-105"
    >
      {children}
    </div>
  );
};

export default Card;
