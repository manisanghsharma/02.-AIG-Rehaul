export const handleClick = async() => {
    setLoading(true);
    setTimeout(async() => {
        try{
            const response = await axios.get("http://localhost:3500/data")
            console.log(response.data)
    }
    catch(err) {
        console.log(err.message);
    }
    finally{
        setLoading(false);
    }
    },2000)
}
