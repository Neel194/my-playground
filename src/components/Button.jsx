const Button = () => {
  return (
    <div>
      <button className="relative cursor-pointer rounded-full border border-neutral-700 px-4 py-2 text-white">
        <div className="via-primary absolute inset-x-0 -bottom-px h-px w-full bg-linear-to-r from-transparent to-transparent"></div>
        Click me
      </button>
    </div>
  );
};
export default Button;
