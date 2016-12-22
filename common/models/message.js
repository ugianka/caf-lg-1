var Msg = require("../../server/services/message-service")

module.exports = function (Message) {





  Message.greet = function (msg, cb) {



    msg = Msg.MessageUtil.formatMessage(msg);

    process.nextTick(function () {
      msg = msg || 'hello';
      cb(null, 'Sender says ' + msg + ' to receiver');
    });
  };
};