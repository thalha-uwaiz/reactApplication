const tableData = [
  ["1", "why?", "what category?", "Published"],
  ["2", "how?", "what category?", "Published"],
  ["3", "what?", "what category?", "Draft"],
  ["4", "wife?", "what category?", "Draft"],
  ["5", "when?", "what category?", "Draft"],
  ["6", "why?", "what category?", "Published"],
  ["7", "why?", "what category?", "Published"],
];

export async function GET(request: Request) {
  return await new Response(JSON.stringify(tableData), {
    status: 200,
    headers: {
      "Content-type": "application/json",
    },
  });
}
