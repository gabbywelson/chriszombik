import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: 'acc06c74ba238fbaf30144224aa5a042a2309981', queries });
export default client;
  