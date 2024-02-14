import Header from "../components/Header"
import Main from "../components/Main"
import {useState, useRef} from 'react';
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import { useSelector } from "react-redux";

const Home = () => {
  const [items, setItems] = useState([]);
  const slider = useSelector(state => state.slider);
  return (
		<div>
			{slider == 1 && <Slider />}
			{!slider && (
				<>
					<Header />
					<Main setItems={setItems} items={items} />
					<Footer />
				</>
			)}
		</div>
	);
}
export default Home