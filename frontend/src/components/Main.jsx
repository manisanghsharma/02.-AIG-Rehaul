import Loading from "./btn/Loading";
import ProgressBar from "./ProgressBar";
import { useState } from "react";
import Generate from "./btn/Generate";
import Images from "./Images";

const Main = ({setItems, items}) => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  

  return (
		<>
			<div className='flex justify-center'>
				<div className='mx-1 w-fit mt-[130px] sm:mt-[200px] max-sm:scale-95'>
					<input
						type='text'
						name=''
						id='search'
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						placeholder='Enter a Prompt...'
						className='w-[300px] p-4 rounded-xl outline-none text-black text-lg sm:w-[450px] sm:text-xl'
					/>
					{loading ? (
						<Loading />
					) : (
						<Generate setLoading={setLoading} setItems={setItems} search={search}/>
					)}

					{loading && <ProgressBar />}
				</div>
			</div>
			{!loading && <Images items={items} />}

			{/* <Slider /> */}
		</>
	);
};
export default Main;
