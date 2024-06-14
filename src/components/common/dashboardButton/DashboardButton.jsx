import { Button } from "@mui/material";
import '../../pages/dashboard/dashboards.css'

const DashboardButton = ({data}) => {

  const {buttonText, handleClick} = data;
  return (
    <Button type="button" onClick={() => handleClick(null)}>
      {buttonText}
    </Button>
  );
}

export default DashboardButton