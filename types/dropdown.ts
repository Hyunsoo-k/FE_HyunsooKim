import React, { SetStateAction }from "react";
import { Article } from "./main";

interface DropdownProps {
  setArticle: React.Dispatch<SetStateAction<Article>>;
}

export type { DropdownProps };