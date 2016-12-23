export declare class Orchestrator {
    static askQuestion(input: ConversationInput, callBack: (a: any, result: any) => void): Promise<void>;
    static sendToConversation(input: ConversationInput): Promise<any>;
}
export declare class ConversationInput {
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
export declare class QuestionHistory {
    questions: String[];
    constructor();
}
