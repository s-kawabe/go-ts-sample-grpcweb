#!/bin/bash

protoc \
  --grpc-web_out=import_style=typescript,mode=grpcwebtext:client/src/pb \
  --js_out=import_style=commonjs:client/src/pb \
  -I=proto proto/blog.proto