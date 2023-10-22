import React, { useMemo } from "react";
import EmailContainer from "./EmailContainer";
import Read from "./Read";
import Unread from "./Unread";
import Favorite from "./Favorite";
// const TapContainerHeader = React.lazy(() =>
//   import("../FBP/TapContainerHeader")
// );

export default function SelectedComponent({ title }) {
  const selected = useMemo(
    () => ({
      Read: <EmailContainer />,
      unRead: <Unread />,
      Favorites: <Favorite />,
    }),
    [title]
  );

  return selected[title] || <EmailContainer />;
}
