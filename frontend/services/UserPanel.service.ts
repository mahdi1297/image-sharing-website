import Http from "utils/Http.util";

const getUserPanelService = async () => {
  return await Http.get("/somewhere");
};

export { getUserPanelService };
