import { NextRequest, NextResponse } from "next/server";
import mockData from "@/app/data/mockData.json";
import { fetchTodos } from "@/app/data/firebase";

// getAll
export async function GET(request: NextRequest) {
  const fetch = await fetchTodos();
  const response = {
    message: "전체 데이터",
    data: fetch,
  };
  return NextResponse.json(response, { status: 200 });
}

// post
export async function POST(request: NextRequest) {
  const { title } = await request.json();

  const newItem = {
    id: "10",
    title: title,
    is_done: false,
  };
  const response = {
    message: "데이터 추가",
    data: newItem,
  };

  return NextResponse.json(response, { status: 201 });
}
