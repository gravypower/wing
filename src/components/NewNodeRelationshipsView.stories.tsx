import { CubeIcon } from "@heroicons/react/24/outline";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { NewNodeRelationshipsView } from "./NewNodeRelationshipsView.js";

export default {
  title: "Components/NewNodeRelationshipsView",
  component: NewNodeRelationshipsView,
} as ComponentMeta<typeof NewNodeRelationshipsView>;

const Template: ComponentStory<typeof NewNodeRelationshipsView> = (args) => (
  <div className="max-w-4xl">
    <NewNodeRelationshipsView {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  node: {
    icon: <CubeIcon className="w-4 h-4 text-violet-500" aria-hidden="true" />,
    id: "endpoint",
    path: "endpoint",
  },
  inbound: [
    {
      icon: <CubeIcon className="w-4 h-4 text-sky-500" aria-hidden="true" />,
      id: "function-1",
      path: "function-1",
      relationshipName: "invoke",
    },
  ],
  outbound: [
    {
      icon: <CubeIcon className="w-4 h-4 text-sky-500" aria-hidden="true" />,
      id: "function-2",
      path: "function-2",
      relationshipName: "invoke",
    },
  ],
};

export const ManyRelationships = Template.bind({});
ManyRelationships.args = {
  node: {
    icon: <CubeIcon className="w-4 h-4 text-violet-500" aria-hidden="true" />,
    id: "endpoint",
    path: "endpoint",
  },
  inbound: [
    {
      icon: <CubeIcon className="w-4 h-4 text-sky-500" aria-hidden="true" />,
      id: "hideous-chewy",
      path: "hideous-chewy",
    },
    {
      icon: <CubeIcon className="w-4 h-4 text-sky-500" aria-hidden="true" />,
      id: "quiet-ample",
      path: "quiet-ample",
    },
    {
      icon: <CubeIcon className="w-4 h-4 text-sky-500" aria-hidden="true" />,
      id: "full-wet",
      path: "full-wet",
    },
    {
      icon: <CubeIcon className="w-4 h-4 text-sky-500" aria-hidden="true" />,
      id: "impressive-tanitansy",
      path: "impressive-tanitansy",
    },
  ],
  outbound: [
    {
      icon: <CubeIcon className="w-4 h-4 text-sky-500" aria-hidden="true" />,
      id: "stunning-crazy",
      path: "stunning-crazy",
    },
    {
      icon: <CubeIcon className="w-4 h-4 text-sky-500" aria-hidden="true" />,
      id: "dirty-jonis",
      path: "dirty-jonis",
    },
    {
      icon: <CubeIcon className="w-4 h-4 text-sky-500" aria-hidden="true" />,
      id: "planned-courtney",
      path: "planned-courtney",
    },
    {
      icon: <CubeIcon className="w-4 h-4 text-sky-500" aria-hidden="true" />,
      id: "victorious-nolana",
      path: "victorious-nolana",
    },
  ],
};
