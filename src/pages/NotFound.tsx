import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="
      min-h-screen
      bg-black
      text-white
      flex
      items-center
      justify-center
      px-6
    ">
      <div className="text-center">

        <p className="
          text-[#B88A2E]
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
          text-zinc-400
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
            bg-[#B88A2E]
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