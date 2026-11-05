//? Type Assertion
const someStatus = 'pending';
const currentStatus = (status) => {
    console.log('Your current status is ' + '' + status);
};
currentStatus(someStatus);
const config = {
    port: 5000
};
const currentPort = config.port;
// const currentPort: number = config.port as number
//* Constant assertion (as const)
const configuration = {
    port: 5001,
    prefix: 'api/v1'
};
export {};
// configuration.port = 5000 ;
