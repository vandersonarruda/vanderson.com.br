import data from '../data.json'

export async function GET() {
  return new Response(JSON.stringify(data.stacks))
  // return Response.json(data.stacks)
}
