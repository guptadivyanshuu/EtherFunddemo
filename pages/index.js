import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import factory from "../ethereum/factory";
import Layout from "../components/Layout";
import { Link } from "../routes";
import CampaignCard from "./CampaignCard";
import classes from './index.module.css';
import Campaign from "../ethereum/campaign";

class CampaignIndex extends Component {
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();

    return { campaigns };
  }

  renderCampaigns() {
    // const items = 
    return this.props.campaigns.map((address, index) => {
      console.log(index);
      console.log(address);
      return <CampaignCard address={address} index={index} />
      // return {
      //   header: address,
      //   description: (
      //     <Link route={`/campaigns/${address}`}>
      //       <a>View Campaign</a>
      //     </Link>
      //   ),
      //   fluid: true,
      // };
    });
  }
  render() {
    return (
      <div className={classes.test}>
        <Layout>
          <div>
            <h3>Open Campaigns</h3>
            {/* <Link route="/campaigns/new">
            <a>
              <Button
                floated="right"
                content="Create Campaign"
                icon="add circle"
                primary
              />
            </a>
          </Link> */}
            {this.renderCampaigns()}
          </div>
        </Layout>
      </div>
    );
  }
}

export default CampaignIndex;
