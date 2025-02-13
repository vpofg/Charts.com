'use client';

import React from "react";
import {Tabs, Tab, Card, CardBody, CardHeader} from "@heroui/react";

export default function App() {
  return (
    <div className="flex flex-col w-full">
      <Card isFooterBlurred className="w-full h-[600px] col-span-2 flex flex-col">
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-black/60 uppercase font-bold">Streamlined</p>
            <h4 className="text-black font-medium text-2xl">Data Visualisation</h4>
        </CardHeader>
        <div className="flex-grow w-full h-full">
        <CardBody className="overflow-hidden">
          <Tabs
            fullWidth
            aria-label="Tabs form"
            size="md"
          >
            <Tab key="login" title="Login">
            <Card>
            <CardBody>
                Text 1
            </CardBody>
          </Card>
            </Tab>
            <Tab key="sign-up" title="Sign up">
            <Card>
            <CardBody>
              Text 2
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
