"use client";
import { Verify } from "@/components/auth";

const VerifyPage = ({ params }: { params: { id: string } }) => {
  return <Verify id={params.id} />;
};

export default VerifyPage;
