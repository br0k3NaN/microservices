### Description
GRPC server in NodeJS that accepts incoming RPC requests.

### Requirements
```
- NodeJS with NPM
- ProtoBuf
- GRPC
- Docker
```

### Installation
```
$ npm install -g grpc-tools
```

```
$ grpc_tools_node_protoc \           
    --js_out=import_style=commonjs,binary:userService/src/proto/ \
    --grpc_out=grpc_js:userService/src/proto \
    --proto_path=./protos/user ./protos/user/*.proto
```

### Testing
```
$ docker-compose up --build -d
$ node testClient.js 
```

### Future Micro Services
```
- GoLang;
- PHP;
- Python;
- Postgresql;
- MySQL; 
```
