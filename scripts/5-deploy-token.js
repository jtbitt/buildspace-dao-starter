import sdk from "./1-initialize-sdk.js";

// In order to deploy the new contract we need our old friend the app module again.
const app = sdk.getAppModule("0xBA0106F22F6a552D60f0dcA98c77b090dD956f00");

(async () => {
  try {
    // Deploy a standard ERC-20 contract.
    const tokenModule = await app.deployTokenModule({
      // What's your token's name? Ex. "Ethereum"
      name: "NomadDAO Governance Token",
      // What's your token's symbol? Ex. "ETH"
      symbol: "NOMAD",
    });
    console.log(
      "✅ Successfully deployed token module, address:",
      tokenModule.address
    );
  } catch (error) {
    console.error("failed to deploy token module", error);
  }
})();
