import useWindowSize from "../hooks/useWindowSize"

const Footer = () => {
  const {width} = useWindowSize();
  return (
    <footer className="absolute bottom-0 left-[50%]">
      {width}
    </footer>
  );
}
export default Footer