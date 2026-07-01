const Loading = () => {
  return (
    <div className="
      min-h-screen
      bg-black
      flex
      items-center
      justify-center
    ">
      <div className="flex flex-col items-center">

        <div
          className="
            w-16
            h-16
            border-4
            border-zinc-700
            border-t-[#B88A2E]
            rounded-full
            animate-spin
          "
        />

        <p className="
          mt-6
          text-[#B88A2E]
          tracking-[6px]
        ">
          LOADING
        </p>

      </div>
    </div>
  );
};

export default Loading;