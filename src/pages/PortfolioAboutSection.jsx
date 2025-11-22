import { Link } from "react-router-dom";

const PortfolioAboutSection = () => {
  return (
    <div className="mx-auto min-h-screen w-full">
      <div className="flex justify-center gap-6 px-6 py-6">
        <Link to="/portfolio" className="text-neutral-600">
          Portfolio
        </Link>
        <Link to="/blog" className="text-neutral-600">
          Blog
        </Link>
        <Link to="/about" className="relative text-black">
          About
          <span className="absolute inset-x-0 -bottom-px h-px w-full rounded-full bg-neutral-700"></span>
        </Link>
      </div>
      <div className="mt-16 flex flex-row">
        <img
          src="https://medistock.id/img/new-images/welcome.png"
          alt="welcome"
          className="size-128"
        />
        <div className="flex flex-col gap-12 pt-12 pl-40">
          <h1 className="text-8xl font-bold">Say Hello!</h1>
          <p className="w-72 tracking-tight text-neutral-700">
            I'd love to hear from you and always welcome any feedback - please
            don't hesitate to get in touch!
          </p>
          <button className="w-36 rounded-full border px-4 py-1">
            Say Hey!
          </button>
        </div>
      </div>
    </div>
  );
};
export default PortfolioAboutSection;
