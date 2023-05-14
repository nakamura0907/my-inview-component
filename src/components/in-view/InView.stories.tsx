import type { Meta } from "@storybook/react";
import React from "react";
import InView from "./index";

const meta: Meta<typeof InView> = {
  title: "components/in-view",
  component: InView,
  decorators: [
    (Story) => (
      <div>
        <div
          style={{ height: "150vh", backgroundColor: "rgba(0, 0, 0, 0.1)" }}
        />
        <Story />
        <div
          style={{ height: "150vh", backgroundColor: "rgba(0, 0, 0, 0.1)" }}
        />
      </div>
    ),
  ],
};

export const Default = {
  args: {
    children: (isIntersecting: boolean) => (
      <div>{isIntersecting ? "hello" : "bye"}</div>
    ),
  },
};

export default meta;
