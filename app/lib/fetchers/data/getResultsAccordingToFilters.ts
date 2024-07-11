"use server";

import { PrismaClient, data } from "@prisma/client";

export async function getResultsAccordingToFilters(
  subdomainId: number | undefined,
  specialityId: number | undefined,
  categoryId: number | undefined,
  championshipId: number | undefined
): Promise<data[]> {
  const prisma = new PrismaClient();

  // Ajoutez des logs pour vérifier les paramètres d'entrée
  console.log("Paramètres d'entrée:", {
    subdomainId,
    specialityId,
    categoryId,
    championshipId,
  });

  if (!subdomainId || !specialityId || !categoryId || !championshipId) {
    console.log("Un ou plusieurs paramètres sont manquants.");
    return [];
  }

  let results: data[] = [];
  try {
    console.log("Avant l'appel à prisma.data.findMany");
    results = await prisma.data.findMany({
      where: {
        subdomain_id: subdomainId,
        speciality_id: specialityId,
        category_id: categoryId,
        championship_id: championshipId,
      },
    });
    console.log("Après l'appel à prisma.data.findMany");
    console.log("results", results[0]); // Cette ligne devrait maintenant être atteinte
    return results;
  } catch (error) {
    console.error("Erreur lors de la récupération des données:", error);
    return [];
  } finally {
    console.log("Déconnexion de la base de données", results as data[]);
    await prisma.$disconnect();
  }
}

export default getResultsAccordingToFilters;
