import { PrismaClient, championship } from "@prisma/client";

export async function getAllChampionships(): Promise<championship[]> {
  const prisma = new PrismaClient();
  const championships = await prisma.championship.findMany();
  return championships;
}

export default getAllChampionships;
