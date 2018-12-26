

const dialogflow = require('dialogflow');
const structjson = require('./Structjson');
const config = require('../config/keys');

const projectId = config.googleProjectID;
const sessionId = config.dialogflowSessionID;
const languageCode = config.dialogflowSessionLanguageCode;

const credentials = {
    client_email: config.googleClientEmail,
    private_key: config.googlePrivateKey
}

//initialize session(instantiate a dialogflow client)
const sessionClient = new dialogflow.SessionsClient(projectId, credentials);
//Define session path
const sessionPath = sessionClient.sessionPath(config.googleProjectID,config.dialogflowSessionID);

module.exports = {
     // The text query request.
     textQuery: async function(text, userID, parameters = {}) {
        let sessionPath = sessionClient.sessionPath(projectId, sessionId + userID)
        let self = module.exports;
        const request = {
            session: sessionPath,
            queryInput: {
                text: {
                    text: text,
                    languageCode: languageCode,
                }
            },
            queryParams: {
                payload: {
                    data: parameters
                }
            }
        };

        let responses = await sessionClient.detectIntent(request);
        responses = await self.handleAction(responses);
        return responses;

    },

    eventQuery: async function(event, userID, parameters = {}) {
        let self = module.exports;
        let sessionPath = sessionClient.sessionPath(projectId, sessionId + userID)
        const request = {
            session: sessionPath,
            queryInput: {
                text: {
                    text: event,
                    parameters: structjson.jsonToStructProto(parameters),
                    languageCode: languageCode,
                }
            }
        };

        let responses = await sessionClient.detectIntent(request);
        responses = await self.handleAction(responses);
        return responses;

    },

    handleAction: function(responses){
        return responses;
    }
}