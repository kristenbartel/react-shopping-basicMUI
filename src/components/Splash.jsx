import { Box } from "@mui/system";

const Splash = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "& > *": {
            m: 1,
          },
        }}
      >
        <img
          src="https://valentino-cdn.thron.com/delivery/public/image/valentino/06230f0c-e949-490d-a56a-14414b04e560/VA14I6D/std/1600x0/rtw-viewall_promenade_valentino.jpg?quality=80"
          alt="Splash"
          width={1400}
        />
      </Box>
    </>
  );
};

export default Splash;
