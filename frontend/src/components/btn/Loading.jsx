import { CircularProgress } from "@mui/joy";

const Loading = () => {
  return (
    <button disabled className="cursor-pointer gap-2 justify-end inline-flex items-center ml-[10px] px-5 py-4 outline-none text-lg transition-all rounded-xl bg-[#ab0929]">
    Loading
      <CircularProgress variant="soft" size="sm" />
    </button>
  );
}
export default Loading