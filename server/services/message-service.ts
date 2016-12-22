
//import { conversation } from 'watson-developer-cloud/conversation/v1';
//declare module "watson-developer-cloud";
var Watson = require('watson-developer-cloud')


"use strict"

export class MessageUtil {

    public conversation = new Watson({

    });

    public static formatMessage(msg: String): String {




        msg = ".." + msg + "..";
        return msg;

    }
}