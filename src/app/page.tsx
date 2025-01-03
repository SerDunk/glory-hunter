import Hero from "~/components/Hero";
import Navbar from "~/components/Navbar";

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
    </>
  );
}
