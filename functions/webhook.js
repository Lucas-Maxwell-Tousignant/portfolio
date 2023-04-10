const VERIFY_TOKEN = process.env.VERIFY_TOKEN;

exports.handler = async (event, context) => {
  if (event.httpMethod === "GET") {
    const mode = event.queryStringParameters["hub.mode"];
    const token = event.queryStringParameters["hub.verify_token"];
    const challenge = event.queryStringParameters["hub.challenge"];

    if (mode && token) {
      if (mode === "subscribe" && token === VERIFY_TOKEN) {
        console.log("WEBHOOK_VERIFIED");
        return {
          statusCode: 200,
          body: challenge,
        };
      } else {
        return {
          statusCode: 403,
        };
      }
    }
  }

  // Handle other HTTP methods if needed
  return {
    statusCode: 400,
  };
};
