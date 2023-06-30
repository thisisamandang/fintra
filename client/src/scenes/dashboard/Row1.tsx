import DashboardBox from "@/components/DashboardBox";
import { useGetKpisQuery } from "@/state/api";
import React from "react";

const Row1 = () => {
  const { data } = useGetKpisQuery();
  return (
    <>
      <DashboardBox gridArea="a" />
      <DashboardBox gridArea="b" />
      <DashboardBox gridArea="c" />
    </>
  );
};

export default Row1;
