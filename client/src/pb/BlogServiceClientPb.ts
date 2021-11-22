/**
 * @fileoverview gRPC-Web generated client stub for Blog
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!

/* eslint-disable */
// @ts-nocheck

import * as grpcWeb from '@improbable-eng/grpc-web'

import * as blog_pb from './blog_pb'

export class BlogServiceClient {
  client_: grpcWeb.AbstractClientBase
  hostname_: string
  credentials_: null | { [index: string]: string }
  options_: null | { [index: string]: any }

  constructor(
    hostname: string,
    credentials?: null | { [index: string]: string },
    options?: null | { [index: string]: any }
  ) {
    if (!options) options = {}
    if (!credentials) credentials = {}
    options['format'] = 'text'

    this.client_ = new grpcWeb.GrpcWebClientBase(options)
    this.hostname_ = hostname
    this.credentials_ = credentials
    this.options_ = options
  }

  methodInfoSayHello = new grpcWeb.AbstractClientBase.MethodInfo(
    blog_pb.HelloResponse,
    (request: blog_pb.HelloRequest) => {
      return request.serializeBinary()
    },
    blog_pb.HelloResponse.deserializeBinary
  )

  sayHello(request: blog_pb.HelloRequest, metadata: grpcWeb.Metadata | null): Promise<blog_pb.HelloResponse>

  sayHello(
    request: blog_pb.HelloRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error, response: blog_pb.HelloResponse) => void
  ): grpcWeb.ClientReadableStream<blog_pb.HelloResponse>

  sayHello(
    request: blog_pb.HelloRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error, response: blog_pb.HelloResponse) => void
  ) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ + '/Blog.BlogService/SayHello',
        request,
        metadata || {},
        this.methodInfoSayHello,
        callback
      )
    }
    return this.client_.unaryCall(
      this.hostname_ + '/Blog.BlogService/SayHello',
      request,
      metadata || {},
      this.methodInfoSayHello
    )
  }
}
