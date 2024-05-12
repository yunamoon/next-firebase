import { NextRequest, NextResponse } from "next/server";
import mockData from "@/app/data/mockData.json";
export async function GET(request: NextRequest) {
  const response = {
    message: "test",
    data: mockData,
  };
  return NextResponse.json(response, { status: 200 });
}
