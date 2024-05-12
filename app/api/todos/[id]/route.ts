import { useSearchParams } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

// 개별 조회
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query test");
  const response = {
    data: {
      id: params.id,
      message: "test",
      data: "data",
      query: query,
    },
  };
  return NextResponse.json(response, { status: 200 });
}

// 개별 삭제
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query test");
  const response = {
    message: "삭제",
    data: {
      id: params.id,
      message: "test",
      data: "data",
      query: query,
    },
  };
  return NextResponse.json(response, { status: 200 });
}

// 개별 수정
export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { title, is_done } = await request.json();

  const newItem = {
    id: params.id,
    title,
    is_done,
  };

  const response = {
    message: "수정",
    data: newItem,
  };

  return NextResponse.json(response, { status: 200 });
}
