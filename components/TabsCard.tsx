'use client';

import React from "react";
import {Tabs, Tab, Card, CardBody, CardHeader} from "@heroui/react";
// import { ResponsiveChartContainer } from "@mui/x-charts/ResponsiveChartContainer";
// import { LinePlot, MarkPlot } from "@mui/x-charts/LineChart";
// import { BarPlot } from "@mui/x-charts";



export default function App() {
  return (
    <div className="flex flex-col w-full ">
      <Card isFooterBlurred className="w-full h-full col-span-2 flex flex-col">
        <div className="relative w-full h-[65px] "> 
          {/* bg-gradient-to-r from-[#21D761] to-[#3BFF7A] */}
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <h4 className="text-black font-medium text-2xl">Explore</h4>
            <p className="text-tiny text-black/60 uppercase font-bold">placeholder</p>
          </CardHeader>
        </div>
        <div className="flex-grow w-full h-full overflow-hidden">
          <CardBody className="overflow-hidden">
            <Tabs
              fullWidth
              aria-label="Tabs form"
              size="md"
              variant="underlined"
            >
              <Tab key="global" title="Global Charts">
                <Card isFooterBlurred className="w-full h-[600px] col-span-2 flex flex-col">
                <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <h4 className="text-black font-medium text-2xl">Global Charts</h4>
                  <p className="text-tiny text-black/60 font-bold">See what people around the world are listening to!</p>
                </CardHeader> 
                  <div className="w-full h-[50%]">
                      {/* <ResponsiveChartContainer
                        series={[
                          { type: "bar", data: [5, 4, 7, 4, 6.6, 3], color: "#21D761"},
                        ]}
                        xAxis={[
                          { data: [1, 2, 3, 5, 8, 10], scaleType: "band", id: "x-axis-id" },
                        ]}
                        
                      >
                        <BarPlot/>
                      </ResponsiveChartContainer> */}
                  </div>
                </Card>
              </Tab>
              <Tab key="personal" title="Perosnal Stats">
              <Card isFooterBlurred className="w-full h-[600px] col-span-2 flex flex-col">
                <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <h4 className="text-black font-medium text-2xl">Personal Stats</h4>
                  <p className="text-tiny text-black/60 font-bold">Explore your own taste and listening habits!</p>
                </CardHeader> 
                </Card>
              </Tab>
              <Tab key="vote" title="Vote and share!">
                <Card isFooterBlurred className="w-full h-[600px] col-span-2 flex flex-col">
                  <CardHeader className="absolute z-10 top-1 flex-col items-start">
                  <h4 className="text-black font-medium text-2xl">Vote and share!</h4>
                  <p className="text-tiny text-black/60 font-bold">Show your favourite artists some love in weekly rankings</p>
                </CardHeader> 
                </Card>
              </Tab>
            </Tabs>
          </CardBody>
        </div>
      </Card>
    </div>
  );
}
