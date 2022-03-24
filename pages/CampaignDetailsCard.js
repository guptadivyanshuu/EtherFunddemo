import React from "react";
import { Link } from "../routes";
import { Card, Button, Image } from "semantic-ui-react";
import classes from './index.module.css';

export default function CampaignDetailsCard(props) {
    return (
        <Card fluid="true">
            <Card.Content>
                <Image style={{ marginLeft: '260px', paddingBottom: '10px' }}
                    size='small'
                    circular
                    src={props.img}
                />
                {/* <Card.Header>Address of Manager: {props.address}</Card.Header> */}
                {/* <Card.Meta>Open Campaign</Card.Meta> */}
                <Card.Description>
                    <div className={classes.CampaignDetailsCardDiv}>
                        <div className={classes.CampaignDetailsCardHeading}>Title:</div>
                        <div className={classes.CampaignDetailsCardSubHeading}><em>{props.title}</em></div>
                        <p className={classes.CampaignDetailsCardParagraph}>Name of the campaign</p>
                    </div>
                    <div className={classes.CampaignDetailsCardDiv}>
                        <div className={classes.CampaignDetailsCardHeading}>Description:</div>
                        <div className={classes.CampaignDetailsCardSubHeading}><em>{props.description}</em></div>
                        <p className={classes.CampaignDetailsCardParagraph}>Information about the campaign</p>
                    </div>
                    <div className={classes.CampaignDetailsCardDiv}>
                        <div className={classes.CampaignDetailsCardHeading}>Address of Manager:</div>
                        <div className={classes.CampaignDetailsCardSubHeading}><em>{props.manager}</em></div>
                        <p className={classes.CampaignDetailsCardParagraph}>The manager created this campaign and can create requests to withdraw money</p>
                    </div>
                    <div className={classes.CampaignDetailsCardDiv}>
                        <div className={classes.CampaignDetailsCardHeading}>Contribution Amount (wei):</div>
                        <div className={classes.CampaignDetailsCardSubHeading}><em>{props.minimumContribution}</em></div>
                        <p className={classes.CampaignDetailsCardParagraph}>You must contribute only this much wei to become an approver</p>
                    </div>
                    <div className={classes.CampaignDetailsCardDiv}>
                        <div className={classes.CampaignDetailsCardHeading}>Number of Requests:</div>
                        <div className={classes.CampaignDetailsCardSubHeading}><em>{props.requestsCount}</em></div>
                        <p className={classes.CampaignDetailsCardParagraph}>A request tries to withdraw money from the contract. Requests must be approved by approvers</p>
                    </div>
                    <div className={classes.CampaignDetailsCardDiv}>
                        <div className={classes.CampaignDetailsCardHeading}>Number of Approvers:</div>
                        <div className={classes.CampaignDetailsCardSubHeading}><em>{props.approversCount}</em></div>
                        <p className={classes.CampaignDetailsCardParagraph}>Number of people who have already donated to this campaign</p>
                    </div>
                    <div className={classes.CampaignDetailsCardDiv}>
                        <div className={classes.CampaignDetailsCardHeading}>Balance:</div>
                        <div className={classes.CampaignDetailsCardSubHeading}><em>{props.balance}</em></div>
                        <p className={classes.CampaignDetailsCardParagraph}>The balance is how much money this campaign has left to spend.</p>
                    </div>

                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <div className='ui two buttons'>
                    <Link route={`/campaigns/${props.address}/requests`}>
                        <Button style={{ backgroundColor: "teal", color: "white" }}>View Requests</Button>
                    </Link>
                    {/* View Requests
                </Button> */}
                </div>
            </Card.Content>
        </Card>
    )
}