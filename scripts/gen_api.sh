protoc \
  --experimental_allow_proto3_optional \
  --go_out=api/pb --go_opt=paths=source_relative \
  --go-grpc_out=api/pb --go-grpc_opt=paths=source_relative \
  -I=proto proto/trivia.proto
  # -Iコマンドを使うとapi/pb直下に成果物が生成されてくれた