pragma solidity ^0.4.17;

//contract to deploy multiple campaigns. 
contract CampaignFactory {
    address[] public deployedCampaigns;

    function createCampaign(uint minimum,string title,string description,string img) public {
        address newCampaign = new Campaign(minimum, msg.sender,title,description,img);
        deployedCampaigns.push(newCampaign);
    }

    function getDeployedCampaigns() public view returns (address[]) {
        return deployedCampaigns;
    }
}

//campaign contract 
contract Campaign {
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals;
    }
    //valiables for campaign
    string public title;
    string public description;
    string public img;
    //valiables for requests 
    Request[] public requests;
    address public manager;
    uint public minimumContribution;
    mapping(address => bool) public approvers;
    uint public approversCount;

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }

    function Campaign(uint minimum, address creator,string temptitle,string tempdescription,string tempimg) public {
        manager = creator;
        minimumContribution = minimum;
            title= temptitle;
            description= tempdescription;
            img= tempimg;
    }


    function contribute() public payable {
        require(msg.value == minimumContribution);

        approvers[msg.sender] = true;
        approversCount++;
    }

    function createRequest(string tempdescription, uint value, address recipient) public restricted {
        Request memory newRequest = Request({
           description: tempdescription,
           value: value,
           recipient: recipient,
           complete: false,
           approvalCount: 0
        });

        requests.push(newRequest);
    }

    function approveRequest(uint index) public {
        Request storage request = requests[index];

        require(approvers[msg.sender]);
        require(!request.approvals[msg.sender]);

        request.approvals[msg.sender] = true;
        request.approvalCount++;
    }

    function finalizeRequest(uint index) public restricted {
        Request storage request = requests[index];

        require(request.approvalCount > (approversCount / 2));
        require(!request.complete);

        request.recipient.transfer(request.value);
        request.complete = true;
    }
    
    function getRequestSummary() public view returns (
      uint, uint, uint, uint, address, string, string, string
      ) {
        return (
          minimumContribution,
          this.balance,
          requests.length,
          approversCount,
          manager,
          title,
          description,
          img
        );
    }
    
    function getRequestsCount() public view returns (uint) {
        return requests.length;
    }
}