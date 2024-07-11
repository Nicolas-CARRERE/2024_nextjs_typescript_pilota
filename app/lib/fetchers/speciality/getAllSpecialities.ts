import { PrismaClient, speciality } from "@prisma/client";

export async function getAllSpecialities(): Promise<speciality[]> {
  const prisma = new PrismaClient();
  const specialities = await prisma.speciality.findMany();
  return specialities;
}

export default getAllSpecialities;
