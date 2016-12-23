"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const watson_developer_cloud_1 = require("watson-developer-cloud");
var conversationService = new watson_developer_cloud_1.ConversationV1({
    url: process.env['WATSON_CONVERSATION_URL'] || 'https://gateway.watsonplatform.net/conversation/api',
    version_date: '2016-09-20',
    version: 'v1'
});
class Orchestrator {
    static askQuestion(input, callBack) {
        return __awaiter(this, void 0, void 0, function* () {
            let answer;
            let error = false;
            yield this.sendToConversation(input).then((out) => {
                answer = out;
            }).catch((err) => {
                error = true;
            });
            if (error) {
                callBack(null, error);
                return;
            }
            else {
                callBack(null, answer);
            }
        });
    }
    static sendToConversation(input) {
        return __awaiter(this, void 0, void 0, function* () {
            var workspace = process.env['WORKSPACE_ID'];
            let payload = {
                workspace_id: workspace,
                context: input.conversationContext,
                input: input.question
            };
            return new Promise((resolve, reject) => {
                conversationService.message(payload, function (err, data) {
                    if (err) {
                        reject(err);
                    }
                    else {
                        // let out = new ConversationOutput();
                        // out.conversationContext = data.context;
                        let outMsg = data;
                        resolve(outMsg);
                    }
                });
            });
        });
    }
}
exports.Orchestrator = Orchestrator;
class ConversationInput {
}
exports.ConversationInput = ConversationInput;
class QuestionHistory {
    constructor() {
        this.questions = [];
    }
}
exports.QuestionHistory = QuestionHistory;
//# sourceMappingURL=manager.js.map