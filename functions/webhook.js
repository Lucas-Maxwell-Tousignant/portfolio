const VERIFY_TOKEN =
  "EAAQaSpDyExYBAHi1Fkhkrb9A4HpQOIEDKqObQg3YRyZCFr9JzgZBl5CWfrZCdqDaml3BtNaGLDCZBd9aXH5W5hiYplhOUNHtOVQ3vEmbY954iUYIAbySIqGay9b0B6BvYEiXblxR3MEG1WZAZBQem9QA0q0psJNjYSCS0V0q7n8QoC968qZAKDU";

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
