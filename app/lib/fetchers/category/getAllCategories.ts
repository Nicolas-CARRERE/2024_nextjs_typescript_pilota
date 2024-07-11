import { PrismaClient, category } from "@prisma/client";

export async function getAllCategories(): Promise<category[]> {
  const prisma = new PrismaClient();
  const categories = await prisma.category.findMany();
  return categories;
}

export default getAllCategories;
