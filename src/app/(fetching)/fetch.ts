import { supabase } from "../(supabase)/supabase";

export async function getMessages() {
    const data = await supabase
        .from('messages')
        .select()
    let result = data.data;

    return result;
};