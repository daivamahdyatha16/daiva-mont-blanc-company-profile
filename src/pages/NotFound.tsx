import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="
      min-h-screen
      bg-[#0F1921]
      text-white
      flex
      items-center
      justify-center
      px-6
    ">
      <div className="text-center">

        <p className="
          text-[#D1C19E]
          tracking-[8px]
          mb-6
        ">
          ERROR 404
        </p>

        <h1 className="
          text-7xl
          md:text-9xl
          font-bold
          mb-6
        ">
          404
        </h1>

        <h2 className="
          text-3xl
          md:text-5xl
          font-bold
          mb-6
        ">
          Page Not Found
        </h2>

        <p className="
          text-[#A7ADB3]
          mb-10
          max-w-lg
          mx-auto
        ">
          The page you're looking for
          doesn't exist or has been moved.
        </p>

        <Link
          to="/"
          className="
            inline-block
            bg-[#D1C19E]
            text-black
            px-8
            py-4
            rounded-xl
            font-semibold
            hover:scale-105
            transition
          "
        >
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;