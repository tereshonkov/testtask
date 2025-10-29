import { useState } from "react";
import Sidebar from "@/components/Sidebar/Sidebar";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Sidebar> = {
  title: "Components/Sidebar",
  component: Sidebar,
};
export default meta;

type Story = StoryObj<typeof Sidebar>;

export const InteractiveSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const items = [
    { label: "Dashboard" },
    {
      label: "Settings",
      subItems: [{ label: "Profile" }, { label: "Account" }],
    },
    { label: "Messages" },
    {
      label: "Help",
      subItems: [{ label: "FAQ" }, { label: "Contact Support" }],
    },
  ];

  return (
    <>
      {!isOpen && (
        <button
          className="m-4 p-2 bg-blue-500 text-white rounded"
          onClick={() => setIsOpen(true)}
        >
          {!isOpen && "Open Sidebar"}
        </button>
      )}
      {isOpen && (
        <Sidebar open={isOpen} onClose={() => setIsOpen(false)} items={items} />
      )}
    </>
  );
};
