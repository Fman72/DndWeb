import Express from 'express';
import AWSSDK from 'aws-sdk';


if(process.env.DYNAMODB_ENDPOINT){
  console.log("LIVE ENV DETECTED");
  AWSSDK.config.update({region: 'ap-southeast-2', endpoint: process.env.DYNAMODB_ENDPOINT}); //, accessKeyId: process.env.AWS_ACCESS_KEY_ID, secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY});
}
else{
  console.log("LOCAL ENV DETECTED");
  AWSSDK.config.update({region: 'ap-southeast-2', endpoint: 'http://localhost:8000'});
}
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
      res.sendStatus(500);
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
    console.log(JSON.stringify(err));
    if(err){
      res.sendStatus(500);
    }
    else{
      res.send(data);
    }
  });
});

export default databaseRouter;
