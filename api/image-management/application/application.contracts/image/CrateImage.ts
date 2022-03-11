interface Tag {
  detail: string;
}

export default interface CreateImage {
  phoserId: string;
  title: string;
  description: string;
  alt: string;
  color: string;
  tags: Tag[];
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
}
