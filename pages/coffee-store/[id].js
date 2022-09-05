import { useRouter } from "next/router"

const CoffeeStore = ()=>{
    const {query} = useRouter()
    return <div>Coffee store id: {query.id}</div>
}

export default CoffeeStore