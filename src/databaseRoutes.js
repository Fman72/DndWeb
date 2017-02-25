import Express from 'express';
import AWSSDK from 'aws-sdk';

AWSSDK.config.update({region: 'ap-southeast-2', endpoint: 'http://localhost:8000'});
let documentClient = new AWSSDK.DynamoDB.DocumentClient();
//documentClient.setEndpoint('http://127.0.0.1:8000');
let databaseRouter = Express.Router();

databaseRouter.post('/storeSpellBook', (req, res) => {
  console.log(JSON.stringify(req.body));
  let params = {
    TableName: "SpellBook",
    Item: {
      user: req.body.user,
      spellBook: req.body.spellBook
    }
  };
  documentClient.put(params, (err, data) => {
    if(err){
      console.log(err);
    }
    else{
      console.log('DynamoDB response data: ' + data);
    }
  });
});

databaseRouter.post('/retrieveSpellBook', (req, res) => {
  let params = {
    TableName: "SpellBook",
    Key: {
      user: req.body.user
    }
  };
  documentClient.get(params, (err, data) => {
    if(err){
      console.log(err);
    }
    else{
      console.log(data);
    }
  });
});

export default databaseRouter;
