import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Button } from "@heroui/button";
import * as React from "react";
import { ResponsiveChartContainer } from "@mui/x-charts/ResponsiveChartContainer";
import { LinePlot, MarkPlot } from "@mui/x-charts/LineChart";
import { Divider } from "@heroui/divider";
import {Link} from "@heroui/link";
import { Image } from "@heroui/image";

export default function App() {
  return (
    <div className="pt-20 mt-9">
      <div className="w-full gap-2 grid grid-cols-3 px-8 relative">
        <Card isFooterBlurred className="w-full h-[600px] col-span-2 flex flex-col">
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-black/60 uppercase font-bold">Streamlined</p>
            <h4 className="text-black font-medium text-2xl">Data Visualisation</h4>
          </CardHeader>
          <div className="flex-grow w-full h-full">
            <ResponsiveChartContainer
              series={[
                { type: "line", data: [2.8, 6, 3.5, 8.5, 3, 5], color: "#21D761" },
              ]}
              xAxis={[
                { data: [1, 2, 3, 5, 8, 10], scaleType: "linear", id: "x-axis-id"},
              ]}
            >
              <LinePlot />
              <MarkPlot />
            </ResponsiveChartContainer>
          </div>
          <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
            <div>
              <p className="text-black text-tiny">Your Music Listening Habits</p>
              <p className="text-black text-tiny">Now visualized</p>
            </div>
            <Button className="text-tiny bg-[#21D761]" radius="full" size="md">
              Get Started
            </Button>
          </CardFooter>
        </Card>

        <Card isFooterBlurred className="w-full h-[600px] col-span-1 flex">
        <CardHeader className="flex gap-3">
        <Image
          alt="Charts logo"
          height={40}
          radius="sm"
          src="/logo-no-background.svg"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">🎵 Discover, Vote, and Shape the Charts!</p>
          <p className="text-small text-default-500">charts.com</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <h1 className="text-2xl bold">Tired of generic charts that don’t reflect your taste? </h1>
        <p>
          Our app lets you decide what’s trending. Vote on your favorite tracks, albums, and artists, and watch as rankings evolve in real time. Whether you’re competing in matchups, tracking trends with friends, or exploring the hottest releases, your voice shapes the music scene.</p>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link isExternal showAnchorIcon href="https://github.com/vpofg/chooser-app" className="text-[#21D761]">
          Visit source code on GitHub.
        </Link>
      </CardFooter>
        </Card>
      </div>
    </div>
  );
}

