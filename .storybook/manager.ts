import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming";

const theme = create({
  base: "light",
  brandImage: `${process.env.VITE_ASSETS_PATH}/images/logo.png`,
  brandTitle: "유역하수도 통합 정보플랫폼 UI 컴포넌트",
});

addons.setConfig({ theme });
