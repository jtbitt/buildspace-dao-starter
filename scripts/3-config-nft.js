import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x62677C8e748440ff7D9C5719d7C7F68866f90ED5"
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Mexico",
        description: "This NFT will give you access to NomadDAO!",
        image: readFileSync("scripts/assets/mexico.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.log("failed to create the new NFT", error);
  }
})();
