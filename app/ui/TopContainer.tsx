"use client";

import React, { useEffect, useState } from "react";
import Select from "./Select";
import {
  subdomain,
  speciality,
  category,
  championship,
  data,
} from "@prisma/client";
import getResultsAccordingToFilters from "../lib/fetchers/data/getResultsAccordingToFilters";

type Props = {
  items: {
    subdomains: subdomain[] | [];
    specialities: speciality[] | [];
    categories: category[] | [];
    championships: championship[] | [];
  };
  onDataUpdate?: (data: data[]) => void;
};

function TopContainer({ items, onDataUpdate }: Props) {
  // get the items from the cookies
  const getCookieValue = (name: string) => {
    const match = document.cookie.match(
      new RegExp("(^| )" + name + "=([^;]+)")
    );
    return match ? parseInt(match[2]) : undefined;
  };

  const { subdomains, specialities, categories, championships } = items;
  const [subdomainId, setSubdomainId] = useState<number | undefined>(
    getCookieValue("subdomainId")
  );
  const [specialityId, setSpecialityId] = useState<number | undefined>(
    getCookieValue("specialityId")
  );
  const [categoryId, setCategoryId] = useState<number | undefined>(
    getCookieValue("categoryId")
  );
  const [championshipId, setChampionshipId] = useState<number | undefined>(
    getCookieValue("championshipId")
  );
  const [data, setData] = useState<data[]>([]);

  useEffect(() => {
    async function fetchData() {
      // set a cookie with the filters
      document.cookie = `subdomainId=${
        subdomainId ? subdomainId : null
      }; path=/`;
      document.cookie = `specialityId=${
        specialityId ? specialityId : null
      }; path=/`;
      document.cookie = `categoryId=${categoryId ? categoryId : null}; path=/`;
      document.cookie = `championshipId=${
        championshipId ? championshipId : null
      }; path=/`;
      if (subdomainId && specialityId && categoryId && championshipId) {
        const result = await getResultsAccordingToFilters(
          subdomainId,
          specialityId,
          categoryId,
          championshipId
        );
        setData(result);
      }
    }
    fetchData();
  }, [subdomainId, specialityId, categoryId, championshipId]);

  useEffect(() => {
    if (onDataUpdate) {
      onDataUpdate(data);
    }
  }, [data, onDataUpdate]);

  const handleGetData = (e: React.FormEvent<HTMLFormElement>) => {
    // Appeler la fonction onChange passée en tant que prop, si elle existe
    if (onChange) {
      onChange(e as any);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let item = e.target.id;
    switch (item) {
      case "subdomain":
        setSubdomainId(parseInt(e.target.value));
        break;
      case "speciality":
        setSpecialityId(parseInt(e.target.value));
        break;
      case "category":
        setCategoryId(parseInt(e.target.value));
        break;
      case "championship":
        setChampionshipId(parseInt(e.target.value));
        break;
      default:
        break;
    }
  };

  return (
    <form className="w-full h-auto p-4 bg-gray-200 dark:bg-gray-800 flex flex-wrap justify-around items-center">
      <Select
        id="subdomain"
        label="a subdomain"
        items={subdomains}
        defaultValue={subdomainId ? subdomainId.toString() : undefined}
        onChange={onChange}
      />
      <Select
        id="speciality"
        label="a speciality"
        items={specialities}
        defaultValue={specialityId ? specialityId.toString() : undefined}
        onChange={onChange}
      />
      <Select
        id="category"
        label="a category"
        items={categories}
        defaultValue={categoryId ? categoryId.toString() : undefined}
        onChange={onChange}
      />
      <Select
        id="championship"
        label="a championship"
        items={championships}
        defaultValue={championshipId ? championshipId.toString() : undefined}
        onChange={onChange}
      />
    </form>
  );
}

export default TopContainer;
