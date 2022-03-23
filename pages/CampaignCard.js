import React from "react";
import { Link } from "../routes";
import { Card, Button, Image } from "semantic-ui-react";

export default function CampaignCard(props) {
    return (
        <Card fluid="false" className="two wide column">
            <Card.Content>
                <Image
                    floated='right'
                    size='mini'
                    src='https://cdn-icons-png.flaticon.com/512/7112/7112131.png'
                />
                <Card.Header>Campaign ID: {props.index+1}</Card.Header>
                <Card.Meta>{props.address}</Card.Meta>
            </Card.Content>
            <Card.Content extra>
                <Link route={`/campaigns/${props.address}`}>
                    <div className='ui two buttons'>
                        <Button inverted color='blue'>
                            View Campaign
                        </Button>
                    </div>
                </Link>
            </Card.Content>
        </Card>

    )
}