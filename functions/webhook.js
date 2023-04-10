const VERIFY_TOKEN =
  "EAAQaSpDyExYBACTzHibCukmdK69ZCXHZAbzCeTMPXZCATZBDTadQzqsiufFPqcH4ZByC867mgJZCyieZBB1eXSK4M4Oq83ZAwiN3E1VdNHZC88EIjU5CpcpDjx6CrrfAYd1yzb9njCSZBckHRufzCeymMRQKZCMzuSgSvCj17YhydnnESkBClWG79Sq";

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
