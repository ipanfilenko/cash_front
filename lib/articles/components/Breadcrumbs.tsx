import React from "react";

interface IBreadcrumbsProps {
  categories: string[];
  currentCategory: "all" | string;
  setCategory(type: "all" | string): void;
}

function Breadcrumbs({
  categories,
  currentCategory,
  setCategory,
}: IBreadcrumbsProps) {
  return <div>Breadcrumbs</div>;
}

export default Breadcrumbs;
