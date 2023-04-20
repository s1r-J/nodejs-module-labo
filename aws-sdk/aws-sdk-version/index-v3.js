const { LambdaClient, ListFunctionsCommand } = require("@aws-sdk/client-lambda");

exports.handler = async (event) => {
    const client = new LambdaClient({ region: 'ap-northeast-1', });

    const params = {};
    const command = new ListFunctionsCommand(params);

    const data = await client.send(command);
    console.log(data);

    return;
};
