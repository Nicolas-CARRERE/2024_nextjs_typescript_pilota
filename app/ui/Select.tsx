"use client";
import { category, championship, speciality, subdomain } from "@prisma/client";
import React from "react";

type Props = {
  id: string | undefined;
  label: string;
  items: subdomain[] | speciality[] | category[] | championship[];
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

function Select({ id, label, items, onChange }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // Appeler la fonction onChange passée en tant que prop, si elle existe
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div>
      <form className="max-w-sm mx-auto">
        <label
          htmlFor={id}
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          {`Select ${label}`}
        </label>
        <select
          id={id}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={(e) => handleChange(e)}>
          <option>{`Select ${label}`}</option>
          {items.map((item) => (
            <option key={item.id} value={item.id}>
              {item.label}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
}

export default Select;
