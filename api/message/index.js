module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = name
        ? `{ "text": "Hello, ${name}. This HTTP triggered function executed successfully." }`
        : `{ "text": "Hello World. This HTTP triggered function executed successfully." }`;

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}