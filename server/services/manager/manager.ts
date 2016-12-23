import { ConversationV1 } from 'watson-developer-cloud';

var conversationService = new ConversationV1(
    {
        url: process.env['WATSON_CONVERSATION_URL'] || 'https://gateway.watsonplatform.net/conversation/api',
        version_date: '2016-09-20',
        version: 'v1'
    }
);


export class Orchestrator {

    public static async askQuestion(input: ConversationInput, callBack: (a: any, result: any) => void) {
        let answer: ConversationOutput;
        let error: boolean = false;
        await this.sendToConversation(input).then((out: ConversationOutput) => {
            answer = out;
        }).catch((err: any) => {
            error = true;

        });
        if (error) {
            callBack(null, error);
            return;
        } else {
            callBack(null, answer);
        }
    }


    public static async sendToConversation(input: ConversationInput): Promise<any> {
        var workspace = process.env['WORKSPACE_ID'];
        let payload = {
            workspace_id: workspace,
            context: input.conversationContext,
            input: input.question
        };
        return new Promise<any>((resolve, reject) => {
            conversationService.message(payload, function (err: any, data: any) {
                if (err) {
                    reject(err);
                } else {
                    // let out = new ConversationOutput();
                    // out.conversationContext = data.context;
                    let outMsg: ConversationOutput = data
                    resolve(outMsg);
                }

            });

        });
    }



}




export class ConversationInput {
    question: string;
    conversationContext: any;
    history: QuestionHistory;
}




export interface ConversationOutput {
    context: any;
    entities: any[];
    input: any;
    intents: any[];
    output: ConversationOutputResult;
}

export interface ConversationOutputResult {
    log_messages: any[];
    node_visited: any[];
    text: String[];
}


export class QuestionHistory {
    questions: String[];
    constructor() {
        this.questions = [];
    }
}