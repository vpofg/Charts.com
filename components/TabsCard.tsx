'use client';

import React from "react";
import {Tabs, Tab, Card, CardBody, CardHeader} from "@heroui/react";

export default function App() {
  return (
    <div className="flex flex-col w-full">
      <Card isFooterBlurred className="w-full h-[600px] col-span-2 flex flex-col">
        <div className="relative w-full h-[70px]"> 
          {/* bg-gradient-to-r from-[#21D761] to-[#106B30] */}
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-black/60 uppercase font-bold">Streamlined</p>
            <h4 className="text-black font-medium text-2xl">Data Visualisation</h4>
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
                <Card>
                  <CardBody>
                      Text 1
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="personal" title="Perosnal Stats">
                <Card>
                  <CardBody>
                    Text 2
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="vote" title="Vote and share!">
                <Card>
                  <CardBody>
                      Text 3
                  </CardBody>
                </Card>
              </Tab>
            </Tabs>
          </CardBody>
        </div>
      </Card>
    </div>
  );
}
