import { Box, Button } from "@mui/material";

const CounterButton = ({data}) => {

    const{counter, suma, resta}=data

  return (
    <Box
      sx={{
        width: "auto",
        display: "flex",
      }}
    >
      <Button className="counter-button" variant="outlined" onClick={resta}>
        -
      </Button>
      <div className="counter-display">{counter}</div>
      <Button className="counter-button" variant="outlined" onClick={suma}>
        +
      </Button>
    </Box>
  );
}

export default CounterButton