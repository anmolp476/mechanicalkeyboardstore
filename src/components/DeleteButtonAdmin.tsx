"use client";

import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const DeleteButtonAdmin = ({ id }: { id: string }) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status == "loading") {
    return <p>Loading...</p>;
  }

  if (status == "unauthenticated" || !session?.user.isAdmin) {
    return null;
  }

  const handleDelete = () => {
    
  }

  return (
    <button className="bg-black p-2 text-white rounded-full absolute top-4 right-4" onClick={handleDelete}>
      Delete
    </button>
  );
};

export default DeleteButtonAdmin;
