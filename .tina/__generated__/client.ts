import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'https://content.tinajs.io/1.4/content/f9808892-bc50-4d65-bd5d-b4fd9b69031d/github/main', token: 'acc06c74ba238fbaf30144224aa5a042a2309981', queries });
export default client;
  