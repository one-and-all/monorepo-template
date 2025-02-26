import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroup, RadioGroupItem } from ".";
import { Label } from "../label";
const meta: Meta<typeof RadioGroup> = {
  title: "Elements/RadioGroup",
  component: RadioGroup,
  parameters: {
    docs: {
      description: {
        component: `
- [Docs](https://ui.shadcn.com/docs/components/radio-group)
- [API Reference](https://www.radix-ui.com/primitives/docs/components/radio-group#api-reference)
`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="comfortable">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="comfortable" id="r2" />
        <Label htmlFor="r2">Comfortable</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="compact" id="r3" />
        <Label htmlFor="r3">Compact</Label>
      </div>
    </RadioGroup>
  ),
};
