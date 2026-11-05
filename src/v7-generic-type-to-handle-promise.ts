//? Generic Type to Handle Promise :

//todo Example :
interface ApiResponse<T> {
    data:T ,
    success:boolean,
    statusCode:number,
    massage:string
}

interface User  {
    name:string,
    role:string,
}


const fetchUser = async() : Promise<User | undefined> => {
    try{
    const res = await fetch('v1/api/somthing-api')
    const data = (await res.json()) as ApiResponse<User>

    if(!res.ok || !data.success){
        throw new Error (`Failed Fetch user data: ${data.massage}`)
    }

    return data.data
    }catch(error){
      if(error instanceof Error){
        console.error(error.message)
      }else{
        console.log('Something went Wrong')
      }

    }
}

const userData = await fetchUser()

if(userData){
userData.name
userData.role
}

