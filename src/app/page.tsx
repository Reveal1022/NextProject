import Btn from "@/components/Btn";
import Fact from "@/components/Fact";
import Header from "@/components/Header";
import Partner from "@/components/Partner";
import ProgramCard from "@/components/ProgramCard";
import { FaRegPlayCircle } from "react-icons/fa";
import { BiDumbbell } from "react-icons/bi";
import { GiBiceps } from "react-icons/gi";
import { FaPersonRunning } from "react-icons/fa6";
import { GrYoga } from "react-icons/gr";
import JoinUs from "@/components/JoinUs";
import Plans from "@/components/Plans";
import Messages from "@/components/Messages";
import Footer from "@/components/Footer";
import CalorieCard from "@/components/CalorieCard";
import { GiWeightLiftingUp } from "react-icons/gi";

export default function Home() {
  return (
    <div className=" h-[100vh]  mx-[8%] mb-20">
      <div className="bg-[url('/bg6.jpg')] h-[90%] min-h-[800px] relative bg-cover text-white px-[100px] text-xl pt-10">
        <img
          src="models2.png"
          className="opacity-70 absolute right-0 bottom-0 h-[80%] "
          alt=""
        />
        <Header />
        <div className="w-[550px] mt-[15%] flex flex-col gap-7 ">
          <div>
            <span className="text-5xl font-bold font-roboto">
              GET HEALTHY BODY WITH THE PERFECT EXERCISES
              <img src="image3.png" className="w-[160px]  rounded-3xl" alt="" />
            </span>
          </div>

          <p>
            We are always there to help you make a healthy body and mind through
            power of fitness
          </p>

          <div className="flex gap-5">
            <Btn
              name="Get Started"
              className="bg-[#ee3322] rounded-md text-lg px-4 py-2"
            />
            <Btn
              name="Watch Video"
              icon={<FaRegPlayCircle className="text-2xl" />}
              className=" rounded-md text-lg px-4 py-2"
            />
          </div>

          <Fact />
        </div>
      </div>
      <div className="py-10 px-[100px]">
        <Partner />
      </div>
      <div className="flex items-center gap-[300px] bg-[#333437] px-[100px] text-white">
        <div className="w-[50%] py-24 relative">
          <img src="ropeimage.webp" alt="" className="rounded-2xl" />
          <div className="absolute bottom-40 right-[-60px]">
            <CalorieCard
              title="Professional"
              sub="Trainer"
              icon={<GiWeightLiftingUp />}
            />
          </div>
        </div>
        <div className="w-[400px] h-full flex flex-col gap-8 ">
          <h1 className="capitalize text-3xl font-extrabold">
            get ready to reach your fitness goals
          </h1>
          <p className="text-xl">
            We are a gym that is committed to helping people reach their fitness
            goals. We offer variety of theirs programs and services to fit your
            needs, whether you are a experienced athelete. We believe that
            everyone should have access to the benefits of exercise make it
            happen.
          </p>

          <Btn
            name="Free Trial Today"
            className="bg-[#ee3322] rounded-md text-lg px-4 py-2 w-[50%] text-center justify-center"
          />
        </div>
      </div>
      <div className="flex flex-col px-[100px] text-white ">
        <div className="text-white">
          <div className="flex items-center justify-between gap-30 my-10 mt-20">
            <h1 className="font-extrabold text-3xl w-[30%]">
              The Best Programs We Offer For You
            </h1>
            <p className=" w-[40%] text-justify">
              We offer a wide range of comprehensive fitness programs designed
              to cater to individuals of all fitness levels. Our aim is to help
              you achieve specific goals & maximize results.
            </p>
          </div>
          <div className="flex justify-between">
            <ProgramCard
              title="strength training"
              description="Our trainers will design a progressive workout plans that help to properly achieve gain strength."
              icon={<BiDumbbell />}
            />
            <ProgramCard
              title="basic yoga"
              description="This program combines yoga with cardio & strength training to help lose weight and fitness."
              icon={<GrYoga />}
            />
            <ProgramCard
              title="body building"
              description="Our trainers will design a progressive workout plans that help to properly achieve gain strength."
              icon={<GiBiceps />}
              className="bg-orange-600"
            />
            <ProgramCard
              title="weight loss"
              description="Our trainers will design a progressive workout plans that help to properly achieve gain strength."
              icon={<FaPersonRunning />}
            />
          </div>
        </div>
      </div>
      <div className="my-32 py-20 bg-[#333437] text-white px-[100px]">
        <JoinUs />
      </div>

      <div>
        <Plans />
      </div>

      <div className="mt-32">
        <Messages />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
