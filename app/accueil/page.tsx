import React from "react";
import getAllSubdomains from "../lib/fetchers/subdomain/getAllSubdomains";
import getAllSpecialities from "../lib/fetchers/speciality/getAllSpecialities";
import getAllCategories from "../lib/fetchers/category/getAllCategories";
import getAllChampionships from "../lib/fetchers/championship/getAllChampionships";
import { subdomain, speciality, category, championship } from "@prisma/client";
import { notFound } from "next/navigation";
import Content from "./Content";

async function Accueil({}) {
  const [subdomains, specialities, categories, championships] =
    (await Promise.all([
      getAllSubdomains(),
      getAllSpecialities(),
      getAllCategories(),
      getAllChampionships(),
    ])) as [subdomain[], speciality[], category[], championship[]];

  if (!subdomains || !specialities || !categories || !championships) {
    notFound();
  }

  return (
    <div>
      <Content
        items={{ subdomains, specialities, categories, championships }}
      />
    </div>
  );
}

export default Accueil;
