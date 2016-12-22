"use strict";
//import { conversation } from 'watson-developer-cloud/conversation/v1';
//declare module "watson-developer-cloud";
var Watson = require('watson-developer-cloud');
"use strict";
class MessageUtil {
    constructor() {
        this.conversation = new Watson({});
    }


    static formatMessage(msg) {
        msg = "__" + msg + "__";
        return msg;
    }
}
exports.MessageUtil = MessageUtil;
//# sourceMappingURL=message-service.js.map