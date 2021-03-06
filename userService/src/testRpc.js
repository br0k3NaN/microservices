// userService/testClient.js

const messages = require('./proto/user_pb');
const services = require('./proto/user_grpc_pb');
const grpc = require('@grpc/grpc-js');

function main() {
    const client = new services.UserSvcClient('localhost:8080', grpc.credentials.createInsecure());
    let registerReq = new messages.RegisterRequest();

    registerReq.setName("Hello");
    registerReq.setEmail("hello@world.com");
    registerReq.setPassword("Password");

    client.register(registerReq, (err, response) => {
        console.log(response);
    });
}

main();