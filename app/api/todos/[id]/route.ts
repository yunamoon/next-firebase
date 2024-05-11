import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const response = {
    message: "게별 데이터",
    data: { title: "test 1", content: "test ..ing" },
  };
  return NextResponse.json(response, { status: 200 });
}
