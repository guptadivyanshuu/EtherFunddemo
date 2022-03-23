import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x90e5b1D6e3286A7dD2e50876Afb39ef5BeEe1d19"
);

export default instance;
