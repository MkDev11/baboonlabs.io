const Button = ({ styleName, text, handleClick }) => {
  return (
    <button
      className={`w-full sm:w-auto text-sm md:text-base px-4 md:px-8 py-3 rounded-lg ${styleName}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
