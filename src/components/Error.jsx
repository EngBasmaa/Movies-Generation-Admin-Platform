import React from "react";
import { SharedCard } from "../shared/SharedCard";

export function Error() {
  return <SharedCard className={"alert alert-danger p-4"} title="Error" />;
}
