export const getInternetConnectionStatus = () => {
  let status = true;

  if (typeof window !== "undefined") {
    ["online", "offline"].forEach((ev) => {
      window.addEventListener(ev, () => {
        console.log(ev);
      });
    });
  }
};
