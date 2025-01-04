import Hero from "~/components/Hero";
import Navbar from "~/components/Navbar";
import WorldCup from "../../public/world-cup.png";
import Official from "../../public/official.png";
import Section from "~/components/Section";
export default function Homepage() {
  return (
    <>
      <Navbar />
      <Hero
        title={"Experience Glory"}
        description={
          "The ultimate test of managerial prowess in Football Manager"
        }
        buttonText={"Build Your Legacy"}
      />
      <div className="flex flex-col gap-6">
        <Section
          image={WorldCup}
          heading={"Why Take the Challenge?"}
          description={
            "The Glory Hunter Challenge isn’t just a game; it’s a journey that demands long-term planning, tactical expertise, and a deep understanding of the game. It’s your chance to showcase your managerial brilliance, adapt to different styles of football, and etch your name in the hall of fame."
          }
        />
        <Section
          image={Official}
          heading={"A challenge like no other"}
          description={
            "Unlike any other career mode, the Glory Hunter Challenge demands total mastery of Football Manager. From squad building to tactical ingenuity, your decisions will shape the future of clubs and nations. Can you handle the responsibility and rise to the top?"
          }
        />
      </div>
    </>
  );
}
