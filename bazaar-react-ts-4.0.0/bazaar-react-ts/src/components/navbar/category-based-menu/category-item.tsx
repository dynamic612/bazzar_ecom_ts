import { FC } from "react";
import Link from "next/link";
import Avatar from "@mui/material/Avatar";
// STYLED COMPONENT
import { SubCategoryListItem } from "./styles";
// DATA TYPES
import { NavLink } from "./types";

// ==============================================================
type Props = { item: NavLink };
// ==============================================================

const CategoryItem: FC<Props> = ({ item }) => {
  const { title, url = "/", Icon, img } = item || {};

  return (
    <Link href={url}>
      <SubCategoryListItem>
        {img ? (
          <Avatar
            alt={title}
            src={img}
            sx={{ backgroundColor: "grey.100", borderRadius: 1 }}
          />
        ) : null}

        {Icon ? <Icon sx={{ fontSize: 16 }} /> : null}
        {title}
      </SubCategoryListItem>
    </Link>
  );
};

export default CategoryItem;
