import { serve } from "https://deno.land/std@0.119.0/http/server.ts";
function handler(_req: Request): Response {
  return new Response("Aooow Mundo véio sem portera!!");
}
console.log("Listening on http://localhost:8000");
serve(handler);
