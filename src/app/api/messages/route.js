import { supabase } from "@/app/(supabase)/supabase";

export async function GET(request) {
  const res = await supabase
    .from('messages')
    .select()
  const data = res.data;

  return Response.json({ data });
}

export async function POST(request) {
  const req = await request.json();
  const { error } = await supabase.from('messages').insert(req);
  console.log(error);
  return Response.json({"test":error});
}