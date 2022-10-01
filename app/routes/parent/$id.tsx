import { useParams } from "@remix-run/react";

export default function () {
  const { id } = useParams();

  return <div>{id}</div>;
}
