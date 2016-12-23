'use strict';

module.exports = function (Servicemanager) {

    var M = require('../../server/services/manager/manager')

    Servicemanager.askQuestion = function (input, cb) {
        M.Orchestrator.askQuestion(input, cb);
    }

    Servicemanager.remoteMethod(
        'askQuestion', {
            accepts: {
                arg: 'input',
                type: 'any'
            },
            returns: {
                arg: 'response',
                type: 'any'
            }
        });


};