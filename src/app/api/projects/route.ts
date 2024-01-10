import data from '../data.json'

export async function GET() {
  return new Response(JSON.stringify(data.projects))
  // return Response.json(data.projects)
}
