import React, { SetStateAction }from "react";
import { Article } from "./main";

interface HeaderProps {
  setArticle: React.Dispatch<SetStateAction<Article>>;
}

export type { HeaderProps };