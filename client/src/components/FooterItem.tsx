import { ReactElement } from "react";
import { Link } from "react-router-dom";

const FooterItem = ({icon, url}: {icon: ReactElement, url: string}) => {
  return (
    <Link to={url} style={{ color: 'white' }} target="_blank">
      {icon}
    </Link>
  );
};
export default FooterItem;
