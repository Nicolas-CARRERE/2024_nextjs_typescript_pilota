"use client";

import React, { use, useState } from "react";
import TopContainer from "../ui/TopContainer";
import {
  subdomain,
  speciality,
  category,
  championship,
  data,
} from "@prisma/client";

type Props = {
  items: {
    subdomains: subdomain[] | [];
    specialities: speciality[] | [];
    categories: category[] | [];
    championships: championship[] | [];
  };
};

function Content({ items }: Props) {
  const { subdomains, specialities, categories, championships } = items;
  const [data, setData] = useState<data[]>([]);

  const handleDataUpdate = (updatedData: data[]) => {
    setData(updatedData);
  };

  React.useEffect(() => {
    console.log("Data updated", data);
  }, [data]);

  return (
    <div>
      <TopContainer
        items={{ subdomains, specialities, categories, championships }}
        onDataUpdate={handleDataUpdate}
      />
      {/* Vous pouvez utiliser les données mises à jour ici */}
      <div>Data: {JSON.stringify(data)}</div>
    </div>
  );
}

export default Content;
