import NotFound from "@/app/not-found";
import { Organizational, Personal } from "@/types/user";
import { BACKEND_URL, sendRequest } from "@/utils/api";
import { notFound } from "next/navigation";

const REQUEST_URL = BACKEND_URL + "/api/v1/users";

export const fetchProfile = async (_id: string) => {
  const res = await sendRequest<IBackendRes<Personal | Organizational>>({
    method: "GET",
    url: `${REQUEST_URL}/${_id}`,
  });

  if (res.statusCode === 400) notFound();

  return res.data;
};
