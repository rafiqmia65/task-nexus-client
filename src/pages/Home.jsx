import React from "react";
import Banner from "../components/Banner/Banner";
import Testimonials from "../components/Testimonials/Testimonials";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import { useLoaderData } from "react-router";
import RecentTasks from "../components/RecentTasks/RecentTasks";
import { useEffect } from "react";
import { useState } from "react";

const Home = () => {
  const [featuredTasks, setFeaturedTasks] = useState([]);
  const allTasks = useLoaderData();

  useEffect(() => {
    const sortedTasks = [...allTasks].sort(
      (a, b) => Number(a.deadline) - Number(b.deadline)
    );

    const recentSix = sortedTasks.slice(0, 6);
    setFeaturedTasks(recentSix);
  }, [allTasks]);

  return (
    <div className="">
      <Banner></Banner>
      <RecentTasks featuredTasks={featuredTasks}></RecentTasks>
      <Testimonials></Testimonials>
      <HowItWorks></HowItWorks>
    </div>
  );
};

export default Home;
