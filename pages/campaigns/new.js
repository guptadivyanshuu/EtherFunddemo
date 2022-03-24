import React, { Component } from "react";
import { Form, Button, Input, Message } from "semantic-ui-react";
import Layout from "../../components/Layout";
import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";
import { Router } from "../../routes";
import { TextArea, Grid, Image } from 'semantic-ui-react';
import classes from '../index.module.css';

class CampaignNew extends Component {
  state = {
    minimumContribution: "",
    title: "",
    description: "",
    img: "",
    errorMessage: "",
    loading: false,
  };

  onSubmit = async (event) => {
    event.preventDefault();
    this.setState({ loading: true, errorMessage: "" });

    try {
      console.log(this.state.minimumContribution);
      console.log(this.state.title);
      console.log(this.state.description);
      console.log(this.state.img);
      const accounts = await web3.eth.getAccounts();
      await factory.methods
        .createCampaign(this.state.minimumContribution, this.state.title, this.state.description, this.state.img)
        .send({
          from: accounts[0],
        });

      Router.pushRoute("/");
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false });
  };

  render() {
    return (
      <Layout>
        <h3 className={classes.CreateCampaignFormHeading}>Create Campaign</h3>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                <Form.Field>
                  <div className={classes.CreateCampaignFormLabel}>Minimum Contribution</div>
                  <Input
                    label="wei"
                    labelPosition="right"
                    value={this.state.minimumContribution}
                    onChange={(event) =>
                      this.setState({ minimumContribution: event.target.value })
                    }
                    className={classes.CreateCampaignFormField}
                  />
                  <div className={classes.CreateCampaignFormLabel}>Title</div>
                  <Input
                    value={this.state.title}
                    onChange={(event) =>
                      this.setState({ title: event.target.value })
                    }
                    className={classes.CreateCampaignFormField}
                  />
                  <div className={classes.CreateCampaignFormLabel}>Description</div>
                  {/* <Input
              labelPosition="right"
              value={this.state.description}
              onChange={(event) =>
                this.setState({ description: event.target.value })
              }
            /> */}
                  <TextArea
                    rows={3}
                    value={this.state.description}
                    onChange={(event) =>
                      this.setState({ description: event.target.value })
                    }
                    placeholder='Brief description about your campaign'
                    className={classes.CreateCampaignFormField}
                  />
                  <div className={classes.CreateCampaignFormLabel}>Image URL</div>
                  <Input
                    value={this.state.img}
                    onChange={(event) =>
                      this.setState({ img: event.target.value })
                    }
                    className={classes.CreateCampaignFormField}
                  />
                </Form.Field>
                <Message error header="Oops!" content={this.state.errorMessage} />
                <div className={classes.CreateCampaignFormButton}>
                  <Button
                    style={{ backgroundColor: "teal", color: "white" }}
                    loading={this.state.loading}>
                    Create!
                  </Button>
                </div>
              </Form>
            </Grid.Column>

            <Grid.Column>
              <Image
                className={classes.CreateCampaignFormImg}
                src='https://cdn-icons-png.flaticon.com/512/1138/1138232.png'
                size="medium"
                centered />
            </Grid.Column>
          </Grid.Row>
        </Grid>

      </Layout>
    );
  }
}

export default CampaignNew;
