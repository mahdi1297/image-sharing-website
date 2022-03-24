export default interface ListImage {
  userId: string;
  title: string;
  likes: number;
  downloads: number;
  alt: string;
  path: string;
  user: {
    username: string;
  };
}
