import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import ExecList from "./ExecList";
import MgtList from "./MgtList";

const OurExecutives = () => {
  const [activeTab, setActiveTab] = useState("board");
  return (
    <>
      <Tabs
        defaultValue="board"
        className="flex flex-col items-center justify-center"
      >
        <TabsList>
          <TabsTrigger
            value="board"
            className={`px-[15px] py-[12px] ${
              activeTab === "board" &&
              "bg-gradient-to-b from-[#D25050] from-5% to-[#900000] to-95%"
            }`}
            onClick={() => {
              setActiveTab("board");
            }}
          >
            Board of Directors
          </TabsTrigger>
          <TabsTrigger
            value="management"
            className={`px-[15px] py-[12px]  ${
              activeTab === "management" &&
              "bg-gradient-to-b from-[#D25050] from-5% to-[#900000] to-95%"
            }`}
            onClick={() => {
              setActiveTab("management");
            }}
          >
            Management Team
          </TabsTrigger>
        </TabsList>
        <TabsContent value="board">
          <ExecList />
        </TabsContent>
        <TabsContent value="management">
          <MgtList />
        </TabsContent>
      </Tabs>
    </>
  );
};

export default OurExecutives;
