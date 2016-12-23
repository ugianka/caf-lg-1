
import { ConversationV1, AlchemyVisionV1 } from 'watson-developer-cloud';
//declare module "watson-developer-cloud";
//var Watson = require('watson-developer-cloud')


"use strict"

export class MessageUtil {



    public static formatMessage(msg: String): String {

        let conv = new ConversationV1({
            url: process.env['WATSON_CONVERSATION_URL'] || 'https://gateway.watsonplatform.net/conversation/api',
            version_date: '2016-09-20',
            version: 'v1'
        });



        msg = ".." + msg + "..";

        return msg;

    }
}