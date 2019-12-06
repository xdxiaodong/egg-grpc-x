'use strict';

const grpc = require('grpc');

module.exports = {
  /**
   * origin grpc proto, contains Service and Message
   */
  get grpcProto() {
    return this.app.grpcProto;
  },
  /**
   * Enum of status codes that gRPC can return
   */
  get grpcStatus() {
    return grpc.status;
  },
};
