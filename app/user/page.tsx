
import Appbar from "@/components/Appbar";
import { getServerSession } from "next-auth";
import { NEXT_AUTH } from "../lib/auth";

export default async function User(){
    const session = getServerSession(NEXT_AUTH);
    return <div>
        <Appbar/>
        USer comp
        {JSON.stringify(session)}
    </div>
}