"use client";

import { Suspense } from "react";
import NotFoundContent from "./not-found-content";

export const viewport = {
  themeColor: "#000000",
};

export default function NotFound() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NotFoundContent />
    </Suspense>
  );
}
