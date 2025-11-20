export default function ButtonComp({ text }) {
  return (
    <button
      className={` px-3.5 py-2.5 rounded bg-[#4678ec] text-white hover:border hover:text-[#4678ec] hover:bg-white `}
    >
      {text}
    </button>
  );
}
