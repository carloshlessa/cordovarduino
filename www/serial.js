var serial = {
    requestPermission: function(opts, successCallback, errorCallback) {
        if (typeof opts === 'function') {  //user did not pass opts
          errorCallback = successCallback;
          successCallback = opts;
          opts = {};
        }
        cordovarduino.prototype.requestPermission = function(opts, successCallback, errorCallback) {
    alert('Entering the request Permission action!');
    cordova.exec( successCallback,
        errorCallback,
        'Serial',
        'requestPermission',
        [{'opts': opts}]
    );
    alert('After the request Permission action!');
}

cordovarduino.install = function() {
    if (!window.plugins) {
        window.plugins = {};
    }
    window.plugins.cordovarduino = new cordovarduino();
    return window.plugins.cordovarduino;
};

cordova.addConstructor(cordovarduino.install);
    },
    open: function(opts, successCallback, errorCallback) {
        cordova.exec(
            successCallback,
            errorCallback,
            'Serial',
            'openSerial',
            [{'opts': opts}]
        );
    },
    write: function(data, successCallback, errorCallback) {
        cordova.exec(
            successCallback,
            errorCallback,
            'Serial',
            'writeSerial',
            [{'data': data}]
        );
    },
    writeHex: function(hexString, successCallback, errorCallback) {
        cordova.exec(
            successCallback,
            errorCallback,
            'Serial',
            'writeSerialHex',
            [{'data': hexString}]
        );
    },
    read: function(successCallback, errorCallback) {
        cordova.exec(
            successCallback,
            errorCallback,
            'Serial',
            'readSerial',
            []
        );
    },
    close: function(successCallback, errorCallback) {
        cordova.exec(
            successCallback,
            errorCallback,
            'Serial',
            'closeSerial',
            []
        );
    },
    registerReadCallback: function(successCallback, errorCallback) {
        cordova.exec(
            successCallback,
            errorCallback,
            'Serial',
            'registerReadCallback',
            []
        );
    }

};
module.exports = serial;
