interface Tag {
  detail: string;
}

export default interface Image {
  phoserId: string;
  downloads: number;
  likes: number;
  title: string;
  alt: string;
  description: string;
  color: string;
  tags: Tag[];
  reports: Tag[];
  user: {
    username: string;
    profile: string;
  };
  linkes: {
    download_link: string;
    path: string;
  };
  location: {
    country: string;
    city: string;
  };
  updatedAt: string;
  isConfirmed: string;
  isBanned: string;
}
