import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import ReputeXWidget from "./ReputeXWidget";

export default {
	title: "ReputeXWidget",
	component: ReputeXWidget,
} as Meta<typeof ReputeXWidget>;

const Template: StoryFn<typeof ReputeXWidget> = (args) => <ReputeXWidget {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	userAddress: "",
	apiAccessKey: "",
	apiSecret: "",
	visibility: true,
	mode: true,
};
