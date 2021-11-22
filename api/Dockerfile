FROM golang:1.17.1-alpine

# /go/srcにて作業をする
WORKDIR /go/src

# go.mod と go.sum をWORKDIRにCOPY
COPY go.mod go.sum ./
# go.mod と go.sum に従って正確にパッケージをダウンロードしてくれる
RUN go mod download

# main.goをイメージ内のWORKDIRにCOPY
COPY ./main.go  ./

ARG CGO_ENABLED=0
ARG GOOS=linux
ARG GOARCH=amd64
# アプリケーションのビルドを行う
RUN go build \
    -o /go/bin/main \
    -ldflags '-s -w'


# マルチステージビルドを使用し、こちらを本番環境のベースイメージとする
FROM scratch as runner

COPY --from=builder /go/bin/main /app/main

# このdockerイメージを起動したときのエントリーポイントを指定
ENTRYPOINT ["/app/main"]
