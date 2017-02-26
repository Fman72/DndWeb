import Express from 'express';
import AWSSDK from 'aws-sdk';

AWSSDK.config.update({region: 'ap-southeast-2', endpoint: 'http://localhost:8000'});
let documentClient = new AWSSDK.DynamoDB.DocumentClient();
//documentClient.setEndpoint('http://127.0.0.1:8000');
let databaseRouter = Express.Router();

databaseRouter.post('/storeSpellList', (req, res) => {
  let params = {
    TableName: "SpellList",
    Item: {
      user: req.body.user,
      spellList: req.body.spellList
    }
  };
  documentClient.put(params, (err, data) => {
    if(err){
      console.log(err);
    }
    else{
      res.send("Saved your spells g");
    }
  });
});

databaseRouter.post('/retrieveSpellList', (req, res) => {
  let params = {
    TableName: "SpellList",
    Key: {
      user: req.body.user
    }
  };
  documentClient.get(params, (err, data) => {
    if(err){
      console.log(err);
    }
    else{
      res.send(data);
    }
  });
});

export default databaseRouter;
