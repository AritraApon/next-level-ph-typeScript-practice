//? Generic Type to Handle Promise :
const fetchUser = async () => {
    try {
        const res = await fetch('v1/api/somthing-api');
        const data = (await res.json());
        if (!res.ok || !data.success) {
            throw new Error(`Failed Fetch user data: ${data.massage}`);
        }
        return data.data;
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        }
        else {
            console.log('Something went Wrong');
        }
    }
};
const userData = await fetchUser();
if (userData) {
    userData.name;
    userData.role;
}
export {};
