import axios from "axios";
import { useDispatch } from "react-redux";
import { updateImages } from "../../store/slices/imagesSlice";

const Generate = ({setLoading, setItems, search}) => {
  const dispatch = useDispatch();
  const imagesData = {
		images: [
			{
				url: "https://oaidalleapiprodscus.blob.core.windows.net/private/org-1IsUANHS8HQ35AnHNHB4kejW/user-3ni81IoPZtBmnJkzOgpNqKq7/img-dpHcOIRURBTWQWSLNThw10Ee.png?st=2023-12-23T07%3A47%3A35Z&se=2023-12-23T09%3A47%3A35Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-12-22T20%3A34%3A05Z&ske=2023-12-23T20%3A34%3A05Z&sks=b&skv=2021-08-06&sig=4Jd134k6yUHJZ0igvPqkVg2L3haxffL5Br0TkFSONCs%3D",
			},
			{
				url: "https://oaidalleapiprodscus.blob.core.windows.net/private/org-1IsUANHS8HQ35AnHNHB4kejW/user-3ni81IoPZtBmnJkzOgpNqKq7/img-q5BjVMvPVsaq4zRfGQCsx1X6.png?st=2023-12-23T07%3A47%3A35Z&se=2023-12-23T09%3A47%3A35Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-12-22T20%3A34%3A05Z&ske=2023-12-23T20%3A34%3A05Z&sks=b&skv=2021-08-06&sig=pb%2BFxrTSKe%2B1ly3fOWbKzYOPfrVwMjpcdqQaGZ5GrQc%3D",
			},
			{
				url: "https://oaidalleapiprodscus.blob.core.windows.net/private/org-1IsUANHS8HQ35AnHNHB4kejW/user-3ni81IoPZtBmnJkzOgpNqKq7/img-lJE32pugw3ISwBx3lmD6vTNP.png?st=2023-12-23T07%3A47%3A35Z&se=2023-12-23T09%3A47%3A35Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-12-22T20%3A34%3A05Z&ske=2023-12-23T20%3A34%3A05Z&sks=b&skv=2021-08-06&sig=zXkfu7WA8xvsRoy8bt9DyEkxZPrCQQ4avAitl%2BPm0yM%3D",
			},
			{
				url: "https://oaidalleapiprodscus.blob.core.windows.net/private/org-1IsUANHS8HQ35AnHNHB4kejW/user-3ni81IoPZtBmnJkzOgpNqKq7/img-BDehxhXBNikBBK4euWPsfrOr.png?st=2023-12-23T07%3A47%3A35Z&se=2023-12-23T09%3A47%3A35Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-12-22T20%3A34%3A05Z&ske=2023-12-23T20%3A34%3A05Z&sks=b&skv=2021-08-06&sig=T50XvK9sTPABDzjHuOAjcYGdnPEfMDkjr/YXWJ84dp0%3D",
			},
		]
  }

  const slides = [
		"https://i.imgur.com/PEXhWHQ.jpg",
		"https://i.imgur.com/dKJE7nO.jpg",
		"https://i.imgur.com/ADoDy9y.jpg",
		"https://i.imgur.com/z8tTBsH.jpg",
	];

  // const apiUrl = "http://localhost:4444/api/generate";
    const getImages = async() => {
      setLoading(true);
      // const response = await axios.post(apiUrl, {
      //   prompt: search,
      //   n: 4
      // })
      // const imageUrls = imagesData.images.map(x => x.url);
      dispatch(updateImages(slides));
      
      // console.log(response.data);
      setLoading(false);
  }
  return (
    <button
      onClick={getImages}
      className="gap-2 items-center ml-[10px] px-5 py-4 outline-none text-lg bg-[crimson] transition-all rounded-xl hover:bg-[#ab0929] sm:text-xl"
    >
      Generate
    </button>
  );
}

export default Generate