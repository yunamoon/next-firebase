import { useSearchParams } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query test");
  const response = {
    id: params.id,
    message: "test",
    data: "data",
    query: query,
  };
  return NextResponse.json(response, { status: 200 });
}
