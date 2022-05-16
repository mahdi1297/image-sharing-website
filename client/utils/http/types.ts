export type Props = {
  url: string;
  dataObject?: any;
  showSuccess?: boolean;
};

export interface Response {
  result: any;
  message: string | null;
  status: number;
  count: number | null;
  error: any;
}
