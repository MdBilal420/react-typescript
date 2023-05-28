import { useEffect, useRef } from "react";

export const Component = () => {
  const id = useRef<string | null>();

  useEffect(() => {
    id.current = "Random value!";
  }, []);

  return <div></div>;
};
