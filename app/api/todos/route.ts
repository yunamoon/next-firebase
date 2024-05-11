import { NextRequest, NextResponse } from "next/server";
import mockData from "@/app/data/mockData.json";
export async function GET(request: NextRequest) {
  const response = {
    message: "전체 데이터",
    data: mockData,
  };
  return NextResponse.json(response, { status: 200 });
}
