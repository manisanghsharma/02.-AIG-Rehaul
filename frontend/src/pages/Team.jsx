import Header from "../components/Header";
import BackBtn from "../components/btn/BackBtn";
import TeamCard from "../components/TeamCard";

const Team = () => {
  return (
    <>
      <Header />
      <BackBtn />
      <p className="text-center mt-10 text-xl">Team</p>
      <TeamCard />
    </>
  );
};
export default Team;
