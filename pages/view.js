import React, { Component } from "react";
import { Card, Button } from "semantic-ui-react";
import factory from "../ethereum/factory";
import Layout from "../components/Layout";
import { Link } from "../routes";
import { Image } from 'semantic-ui-react';
import Campaign from "../ethereum/campaign";

class CampaignIndex extends Component {
  static async getInitialProps() {
    const campaignAddress = await factory.methods.getDeployedCampaigns().call();
  let summary=[];
  for(let i=0; i<campaignAddress.length; i++){
   const campaign = Campaign(campaignAddress[i]);
   summary.push(await campaign.methods.getRequestSummary().call());
}
console.log(summary);
const campaigns={
  campaignAddress: campaignAddress,
  summary: summary
}
    return { campaigns };
  }

  renderCampaigns() {
    const items = this.props.campaigns.campaignAddress.map((campaignAddress,i) => {

      console.log("props: ",this.props.campaigns.summary[i]['7']);
      return {
        image:`${this.props.campaigns.summary[i]['7']}`,
        header: this.props.campaigns.summary[i]['5'],
        description: (
          <div>
          {this.props.campaigns.summary[i]['6']}
          </div>
        ),
        fluid: false,
        extra: (
          <div>
          <b>Address: </b>{campaignAddress}
          <Link route={`/campaigns/${campaignAddress}`}>
            <a><Button content='View Campaign' style={{ backgroundColor: "teal", color: "white" }} fluid/></a>
            </Link>
          </div>
        )
      };
    });
    return <Card.Group items={items} itemsPerRow={2} />;
  }
  render() {
    return (
      <Layout>
        <div>
          <h3>Open Campaigns</h3>
          {this.renderCampaigns()}
        </div>
      </Layout>
    );
  }
}

export default CampaignIndex;
