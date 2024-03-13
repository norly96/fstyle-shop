"use client"
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  subtitle: string;
  className?: string;
}

const sortOptions = [
    { name: 'Most Popular', href: '#', current: true },
    { name: 'Best Rating', href: '#', current: false },
    { name: 'Newest', href: '#', current: false },
    { name: 'Price: Low to High', href: '#', current: false },
    { name: 'Price: High to Low', href: '#', current: false },
  ]

export const Title = ({ title, subtitle, className }: Props) => {
  return (
    <div className="flex w-full px-14 lg:px-15 items-baseline justify-between border-b border-gray-200 pb-6 pt-8">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">
        {title}
      </h1>
      <h2 className="text-2xl text-gray-800">
        {subtitle}
      </h2>
      <div className="relative flex flex-row group text-left items-center justify-center text-lg font-medium text-gray-700 hover:text-gray-900">
        Sort
        <ChevronDownIcon
          className="-mr-1 ml-1 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
          aria-hidden="true"
        />
      </div>
    </div>
  );
};
