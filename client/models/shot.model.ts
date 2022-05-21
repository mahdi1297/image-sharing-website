export type ShotModel = {
  alt: string;
  color: string;
  createdAt: Date;
  description: string;
  downloads: number;
  isBanned: boolean;
  isConfirmed: boolean;
  likes: number;
  linkes: { download_link: string; path: string };
  location: { country: string; city: string };
  reports: any;
  tags: [string];
  title: string;
  updatedAt: Date;
  user: { username: string; profile: string };
  userId: string;
  _id: string;
};
