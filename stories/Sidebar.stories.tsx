import { useState } from "react";
import Sidebar from "@/components/Sidebar/Sidebar";
import { Meta } from "@storybook/react";

const meta: Meta<typeof Sidebar> = {
  title: "Components/Sidebar",
  component: Sidebar,
};
export default meta;

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
        <Sidebar open={isOpen} onClose={() => setIsOpen(false)} items={items} />
  );
};
