import React, { SetStateAction }from "react";
import { Article } from "./main";

interface HeaderProps {
  setArticle: React.Dispatch<SetStateAction<Article>>;
}

type Viewport = "" | "mobile" | "not mobile";

interface DropdownState {
  initialState: boolean;
  open: boolean;
}

export type { HeaderProps, Viewport, DropdownState };