const Loading = () => {
  return (
    <div
      className="
        fixed
        inset-0
        z-[9999]
        flex
        flex-col
        items-center
        justify-center
        bg-[#0F1921]
      "
    >
      <img
        src="/montblanc-logo.webp"
        alt="Mont Blanc"
        className="
    w-40
    animate-[pulse_2s_ease-in-out_infinite]
    drop-shadow-[0_0_25px_rgba(184,138,46,0.5)]
  "
      />

      <p
        className="
          mt-8
          text-[#D1C19E]
          tracking-[8px]
          text-sm
        "
      >
        PLEASE WAIT •••
      </p>
    </div>
  );
};

export default Loading;
