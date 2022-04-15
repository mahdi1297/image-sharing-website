import { httpGet } from "utils/http";

const getUserPanelService = async () => {
  return await httpGet("/somewhere", false);
};

export { getUserPanelService };
