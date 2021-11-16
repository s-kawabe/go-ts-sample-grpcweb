/**
 * @fileoverview gRPC-Web generated client stub for trivia
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as trivia_pb from './trivia_pb';


export class TriviaServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoSayHello = new grpcWeb.AbstractClientBase.MethodInfo(
    trivia_pb.HelloResponse,
    (request: trivia_pb.HelloRequest) => {
      return request.serializeBinary();
    },
    trivia_pb.HelloResponse.deserializeBinary
  );

  sayHello(
    request: trivia_pb.HelloRequest,
    metadata: grpcWeb.Metadata | null): Promise<trivia_pb.HelloResponse>;

  sayHello(
    request: trivia_pb.HelloRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: trivia_pb.HelloResponse) => void): grpcWeb.ClientReadableStream<trivia_pb.HelloResponse>;

  sayHello(
    request: trivia_pb.HelloRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: trivia_pb.HelloResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/trivia.TriviaService/SayHello',
        request,
        metadata || {},
        this.methodInfoSayHello,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/trivia.TriviaService/SayHello',
    request,
    metadata || {},
    this.methodInfoSayHello);
  }

}

