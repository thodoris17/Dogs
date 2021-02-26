import React from "react";
import { Story, Meta } from "@storybook/react";

import { Dropdown, IDropdownProps } from "./";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
} as Meta;

const Template: Story<IDropdownProps> = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  values: ["Option 1", "Option 2", "Option 3"],
};
