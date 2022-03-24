import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x34776b763e975990Ef902D9BbCf0aBB2EB4D5DaA"
);

export default instance;
