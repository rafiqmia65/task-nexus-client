import React from "react";
import Banner from "../components/Banner/Banner";
import Testimonials from "../components/Testimonials/Testimonials";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import { useLoaderData } from "react-router";
import RecentTasks from "../components/RecentTasks/RecentTasks";
import TaskNexusActivity from "../components/TaskNexusActivity/TaskNexusActivity";

const Home = () => {
  const latestTasks = useLoaderData();

  return (
    <div className="">
      <Banner></Banner>
      <RecentTasks featuredTasks={latestTasks}></RecentTasks>
      <TaskNexusActivity></TaskNexusActivity>
      <Testimonials></Testimonials>
      <HowItWorks></HowItWorks>
    </div>
  );
};

export default Home;
