import Http from "utils/http";

const getUserPanelService = async () => {
  return await Http.get("/somewhere");
};

export { getUserPanelService };
