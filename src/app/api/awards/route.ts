import data from '../data.json'

export async function GET() {
  return new Response(JSON.stringify(data.awards))
  // return Response.json(data.awards)
}
