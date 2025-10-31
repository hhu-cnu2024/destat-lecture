import { supabase } from "~/postgres/supaclient"

export async function loader(){
    const {data} = await supabase().from("destat-test").select("*");
    console.log(data);
}
export default function Home() {
    return <div>
        hellow destat-world
    </div>
}