// Code generated by protoc-gen-go-grpc. DO NOT EDIT.

package trivia

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// TriviaServiceClient is the client API for TriviaService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type TriviaServiceClient interface {
	SayHello(ctx context.Context, in *HelloRequest, opts ...grpc.CallOption) (*HelloResponse, error)
}

type triviaServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewTriviaServiceClient(cc grpc.ClientConnInterface) TriviaServiceClient {
	return &triviaServiceClient{cc}
}

func (c *triviaServiceClient) SayHello(ctx context.Context, in *HelloRequest, opts ...grpc.CallOption) (*HelloResponse, error) {
	out := new(HelloResponse)
	err := c.cc.Invoke(ctx, "/trivia.TriviaService/SayHello", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// TriviaServiceServer is the server API for TriviaService service.
// All implementations must embed UnimplementedTriviaServiceServer
// for forward compatibility
type TriviaServiceServer interface {
	SayHello(context.Context, *HelloRequest) (*HelloResponse, error)
	mustEmbedUnimplementedTriviaServiceServer()
}

// UnimplementedTriviaServiceServer must be embedded to have forward compatible implementations.
type UnimplementedTriviaServiceServer struct {
}

func (UnimplementedTriviaServiceServer) SayHello(context.Context, *HelloRequest) (*HelloResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method SayHello not implemented")
}
func (UnimplementedTriviaServiceServer) mustEmbedUnimplementedTriviaServiceServer() {}

// UnsafeTriviaServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to TriviaServiceServer will
// result in compilation errors.
type UnsafeTriviaServiceServer interface {
	mustEmbedUnimplementedTriviaServiceServer()
}

func RegisterTriviaServiceServer(s grpc.ServiceRegistrar, srv TriviaServiceServer) {
	s.RegisterService(&TriviaService_ServiceDesc, srv)
}

func _TriviaService_SayHello_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(HelloRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TriviaServiceServer).SayHello(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/trivia.TriviaService/SayHello",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TriviaServiceServer).SayHello(ctx, req.(*HelloRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// TriviaService_ServiceDesc is the grpc.ServiceDesc for TriviaService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var TriviaService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "trivia.TriviaService",
	HandlerType: (*TriviaServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "SayHello",
			Handler:    _TriviaService_SayHello_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "trivia.proto",
}