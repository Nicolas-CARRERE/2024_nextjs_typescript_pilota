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
import Card from "../ui/Card";

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
      {data.map((d: data) => (
        <Card key={d.game} data={d} />
      ))}
    </div>
  );
}

export default Content;
