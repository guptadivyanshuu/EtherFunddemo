import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x67A39C53F98ae7296921D7c40326dC01e8eEe472"
);

export default instance;
