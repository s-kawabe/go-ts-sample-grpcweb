package main

import (
	"context"
	"fmt"
	"log"
	"net"

	pb "github.com/s-kawabe/engineers-trivia/api/pb"

	"google.golang.org/grpc"
)

const (
	port = ":8080"
)

type server struct {
	pb.UnimplementedBlogServiceServer
}

// Helloメソッドを実装することでprotoファイルで定義した内容と連携できる。
func (*server) MockApi(ctx context.Context, in *pb.HelloRequest) (*pb.HelloResponse, error) {
	// Getxxxメソッドも自動に作成されています。
	text := in.GetText()
	log.Printf("geted text: %v", text)
	result := fmt.Sprintf("geted text: %v", text)

	// 受け取ったメッセージを連結したレスポンスを返します。
	return &pb.HelloResponse{
		Message: result,
	}, nil
}

func main() {
	// リッスンするportをを設定します
	lis, err := net.Listen("tcp", port)
	if err != nil {
		log.Fatalf("Failed to listen: %v", err)
	}
	log.Println(lis)
	var opts []grpc.ServerOption

	// サーバをインスタンス化します。
	s := grpc.NewServer(opts...)

	// RegisterXXXXメソッドも自動的に作成されています。
	pb.RegisterBlogServiceServer(s, &server{})

	// 起動確認様にログ出力をさせてみます
	log.Println("Waiting for gRPC request ....")
	log.Println("--------------")

	// サービスの起動を行います。
	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
