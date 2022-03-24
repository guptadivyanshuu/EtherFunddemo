import React, { Component } from "react";
import { Card, Grid, Button } from "semantic-ui-react";
import Layout from "../../components/Layout";
import Campaign from "../../ethereum/campaign";
import web3 from "../../ethereum/web3";
import ContributeForm from "../../components/ContributeForm";
import { Link } from "../../routes";
import CampaignDetailsCard from '../CampaignDetailsCard';

class CampaignShow extends Component {
  static async getInitialProps(props) {

    const campaign = Campaign(props.query.address);
    // const data = await campaign.methods.getCampaignSummary().call();
    // console.log(data);
    console.log(props.query);
    const summary = await campaign.methods.getRequestSummary().call();
    console.log("summary: " + summary);
    console.log(summary[0]);
    console.log(summary[1]);
    console.log(summary[2]);
    console.log(summary[3]);
    console.log(summary[4]);
    console.log(summary[5]);
    console.log(summary[6]);
    console.log(summary[7]);
    return {
      address: props.query.address,
      minimumContribution: summary[0],
      balance: summary[1],
      requestsCount: summary[2],
      approversCount: summary[3],
      manager: summary[4],
      title: summary[5],
      description: summary[6],
      img: summary[7]
    };
  }

  renderCards() {
    const {
      balance,
      manager,
      minimumContribution,
      requestsCount,
      approversCount,
      title,
      description,
      img
    } = this.props;

    const items = [
      {
        header: manager,
        meta: "Address of Manager",
        description:
          "The manager created this campaign and can create requests to withdraw money",
        style: { overflowWrap: "break-word" },
      },
      {
        header: minimumContribution,
        meta: "Contribution (wei)",
        description:
          "You must contribute at least this much wei to become an approver",
      },
      {
        header: requestsCount,
        meta: "Number of Requests",
        description:
          "A request tries to withdraw money from the contract. Requests must be approved by approvers",
      },
      {
        header: approversCount,
        meta: "Number of Approvers",
        description:
          "Number of people who have already donated to this campaign",
      },
      {
        header: web3.utils.fromWei(balance, "ether"),
        meta: "Campaign Balance (ether)",
        description:
          "The balance is how much money this campaign has left to spend.",
      },
    ];
    return <CampaignDetailsCard address={this.props.address} manager={manager} minimumContribution={minimumContribution} requestsCount={requestsCount} approversCount={approversCount} balance={web3.utils.fromWei(balance, "ether")} title={title} description={description} img={img}></CampaignDetailsCard>
    // return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <h3>Campaign Details</h3>
        <Grid>
          <Grid.Row>
            <Grid.Column width={10}>{this.renderCards()}</Grid.Column>
            <Grid.Column width={6}>
              <ContributeForm address={this.props.address} />
            </Grid.Column>
          </Grid.Row>
{/* 
          <Grid.Row>
            <Grid.Column>
              <Link route={`/campaigns/${this.props.address}/requests`}>
                <a>
                  <Button style={{backgroundColor: "teal", color: "white"}}>View Requests</Button>
                </a>
              </Link>
            </Grid.Column>
          </Grid.Row> */}
        </Grid>
      </Layout>
    );
  }
}

export default CampaignShow;
