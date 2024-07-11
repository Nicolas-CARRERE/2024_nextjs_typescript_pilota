import React from "react";
import TopContainer from "../ui/TopContainer";
import getAllSubdomains from "../lib/fetchers/subdomain/getAllSubdomains";
import getAllSpecialities from "../lib/fetchers/speciality/getAllSpecialities";
import getAllCategories from "../lib/fetchers/category/getAllCategories";
import getAllChampionships from "../lib/fetchers/championship/getAllChampionships";
import {
  subdomain,
  speciality,
  category,
  championship,
  data,
} from "@prisma/client";
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
      <TopContainer
        items={{ subdomains, specialities, categories, championships }}
      />
      <Content />
    </div>
  );
}

export default Accueil;
