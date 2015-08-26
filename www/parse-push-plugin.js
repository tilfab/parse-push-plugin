var serviceName = 'ParsePushPlugin';

var ParsePushPlugin = {
    getInstallationId: function(successCb, errorCb) {
        cordova.exec(successCb, errorCb, serviceName, 'getInstallationId', []);
    },

    getInstallationObjectId: function(successCb, errorCb) {
        cordova.exec(successCb, errorCb, serviceName, 'getInstallationObjectId', []);
    },

    getSubscriptions: function(successCb, errorCb) {
        cordova.exec(successCb, errorCb, serviceName, 'getSubscriptions',[]);
    },

    subscribe: function(channel, successCb, errorCb) {
        cordova.exec(successCb, errorCb, serviceName, 'subscribe', [ channel ]);
    },

    unsubscribe: function(channel, successCb, errorCb) {
        cordova.exec(successCb, errorCb, serviceName, 'unsubscribe', [ channel ]);
    },

    unsubscribeFromAll: function (successCb, errorCb) {
        cordova.exec(successCb, errorCb, serviceName, 'unsubscribeFromAll', []);
    }
};

module.exports = ParsePushPlugin;