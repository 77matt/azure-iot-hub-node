// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

'use strict';

const errors = require('azure-iot-common').errors;
const results = require('azure-iot-common').results;
const EventEmitter = require('events').EventEmitter;
const util = require('util');
const AmqpReceiver = require('azure-iot-amqp-base').AmqpReceiver;

function SimulatedAmqp() {
  EventEmitter.call(this);
  this._config = {
    sharedAccessSignature: 'ok'
  };
  this._receiver = new AmqpReceiver(new EventEmitter());
  this.FeedbackReceiver = AmqpReceiver;
}

util.inherits(SimulatedAmqp, EventEmitter);

SimulatedAmqp.prototype.connect = function connect(done) {
  if (done) done();
};

SimulatedAmqp.prototype.disconnect = function disconnect(done) {
  if (done) done();
};

SimulatedAmqp.prototype.send = function send(deviceId, message, done) {
  if (done) {
    if (deviceId.search(/^no-device/) !== -1) {
      done(new errors.DeviceNotFoundError());
    } else {
      done(null, new results.MessageEnqueued());
      if (message.ack === 'full') {
        this._receiver.emit('message', {
          body: [{
            originalMessageId: message.messageId,
            deviceId: deviceId
          }]
        });
      }
    }
  }
};

SimulatedAmqp.prototype.getFeedbackReceiver = function (done) {
  if (this._config.sharedAccessSignature === 'fail') {
    done(new Error('error'));
  } else {
    done(null, this._receiver);
  }
};

SimulatedAmqp.prototype.getFileNotificationReceiver = function (done) {
  if (this._config.sharedAccessSignature === 'fail') {
    done(new Error('error'));
  } else {
    done(null, this._receiver);
  }
};

module.exports = SimulatedAmqp;
