import { PrismaClient, subdomain } from "@prisma/client";

export async function getAllSubdomains(): Promise<subdomain[]> {
  const prisma = new PrismaClient();
  const subdomains = await prisma.subdomain.findMany();
  return subdomains;
}

export default getAllSubdomains;
