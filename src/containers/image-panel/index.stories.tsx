import React from "react";
import { Story, Meta } from "@storybook/react";

import { IImagePanelProps, ImagePanel } from "./";
import { dogImages } from "../../utils/mocks";

export default {
  title: "Containers/ImagePanel",
  component: ImagePanel,
} as Meta;

const Template: Story<IImagePanelProps> = (args) => <ImagePanel {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  dogImages: dogImages,
  selectedDog: "affenpinscher",
};
