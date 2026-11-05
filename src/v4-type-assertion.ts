//? Type Assertion


//* as Syantax

type Status = 'pending' | 'approved' | 'rejected';

const someStatus :string = 'pending'

const currentStatus = (status : Status) =>{
  console.log('Your current status is ' + '' + status)
}

currentStatus(someStatus as Status)



//* Non - Null assertion (!)

interface Config {
    port?: number
}

const config :Config = {
    port : 5000
}

const currentPort : number = config.port!
// const currentPort: number = config.port as number


//* Constant assertion (as const)
const configuration = {
    port:5001,
    prefix: 'api/v1'
} as const

// configuration.port = 5000 ;