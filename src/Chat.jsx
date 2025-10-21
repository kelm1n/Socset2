import { useEffect, useState } from "react";

export default function Chat() {
    const [me, setMe] = useParams()
    const [friend, setFriend] = useState()
    const [messages, setMessages] = useState()
    const [text, SetText] = useState()

    useEffect(() => {
        async function loadMe() {
            const { data } = await supabase.auth.getSession()
            setMe(data?.session.user);
        }
        loadMe();
    }, [])

    useEffect
}