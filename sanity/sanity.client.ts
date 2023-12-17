// sanity/sanity.client.ts

import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "hci68hl6",
  dataset: "production",
  apiVersion: "2023-12-16",
  useCdn: false,
};

const client = createClient(config);

export default client; 
