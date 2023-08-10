
interface Request extends RequestInit{
    url:string
}
export function request(data:Request){
    let url = data.url
    delete data.url
    return new Promise((resolve, reject)=>{
        fetch(url,data).then(response=>response.json())
            .then(data=>resolve(data))
            .catch(error=>reject(error))
    })
}