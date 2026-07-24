import { NextResponse } from "next/server";
import products from "@/data/products.json";

export async function GET(request) {
  const { searchParams } = new URL(request.url);

  const page = Number(searchParams.get("page")) || 1;
  const limit = Number(searchParams.get("limit")) || 3;

  // Calculate indexes
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  // Get paginated products
  const paginatedProducts = products.slice(startIndex, endIndex);

  // Pagination metadata
  const totalProducts = products.length;
  const totalPages = Math.ceil(totalProducts / limit);

  return NextResponse.json({
    success: true,

    pagination: {
      page,
      limit,
      totalProducts,
      totalPages,
      hasPreviousPage: page > 1,
      hasNextPage: page < totalPages,
    },

    data: paginatedProducts,
  });
}