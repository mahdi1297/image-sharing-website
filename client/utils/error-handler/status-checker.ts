export function checkStatus(status: number, returnIfFail: boolean = false) {
  if (typeof window !== undefined) {
    switch (status) {
      case 400:
        if (returnIfFail) {
          window.location.href = "/400";
        }
        break;
      case 404:
        if (returnIfFail) {
          window.location.href = "/404";
        }
        break;
      case 500:
        window.location.href = "/500";
        break;
      case 503:
        window.location.href = "/503";
        break;
      case 502:
        window.location.href = "/502";
        break;
      default:
        break;
    }
  }
}
