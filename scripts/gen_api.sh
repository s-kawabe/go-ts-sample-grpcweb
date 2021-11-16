protoc \
  --experimental_allow_proto3_optional \
  --go_out=api/pb --go_opt=paths=source_relative \
  --go-grpc_out=api/pb --go-grpc_opt=paths=source_relative \
  proto/trivia.proto