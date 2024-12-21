import { supabase } from "../(supabase)/supabase";
import { Tables } from "../(supabase)/supabase-type";

export async function getMessages() {
    const data = await supabase
        .from('messages')
        .select()
    let result = data.data;

    console.log(result);
    return result;
};