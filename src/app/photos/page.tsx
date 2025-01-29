"use client";

import { PhotoSearchForm } from "@/features/photos/components/PhotoSearch/PhotoSearchForm";
import { PhotoResults } from "@/features/photos/components/PhotoResults/PhotoResults";

const MOCK_PHOTOS = [
  { id: "1", url: "/images/sample1.jpg", userId: "1" },
  { id: "2", url: "/images/sample2.jpg", userId: "1" },
];

export default function SearchPhotos() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-16">
        <PhotoSearchForm />
        <PhotoResults photos={MOCK_PHOTOS} />
      </div>
    </div>
  );
}
