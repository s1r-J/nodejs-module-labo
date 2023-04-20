const AWS = require('aws-sdk');

exports.handler = async (event) => {
    const lambda = new AWS.Lambda({
        region: 'ap-northeast-1',
    });

    const params = {};
    lambda.listFunctions(params, function (err, data) {
        if (err) {
            console.log(err);
            return;
        }
        console.log(data);
    });
};
