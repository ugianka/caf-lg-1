"use strict";
const watson_developer_cloud_1 = require("watson-developer-cloud");
//declare module "watson-developer-cloud";
//var Watson = require('watson-developer-cloud')
"use strict";
class MessageUtil {
    static formatMessage(msg) {
        let conv = new watson_developer_cloud_1.ConversationV1({
            url: process.env['WATSON_CONVERSATION_URL'] || 'https://gateway.watsonplatform.net/conversation/api',
            version_date: '2016-09-20',
            version: 'v1'
        });
        msg = ".." + msg + "..";
        return msg;
    }
}
exports.MessageUtil = MessageUtil;
//# sourceMappingURL=message-service.js.map