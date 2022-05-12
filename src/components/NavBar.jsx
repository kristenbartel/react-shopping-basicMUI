import { AppBar, Stack, Typography, Button } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Cart from "./Cart";
import SideBar from "./SideBar";
import HomeIcon from "@mui/icons-material/Home";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import { borderBottom } from "@mui/system";

function NavBar() {
  return (
    <AppBar position="sticky" elevation={0} style={{ background: "white" }}>
      <Toolbar className="AppBar">
        <a href="/" style={{ textDecoration: "none" }}>
          <Typography
            fontSize={40}
            component="div"
            sx={{ flexGrow: 1 }}
            style={{ color: "black" }}
            marginLeft={6}
          >
            the CULTURALIST
          </Typography>
        </a>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
          style={{ color: "black" }}
        />
        <Stack direction="row" spacing={2}>
          <a
            href="/about"
            className="navMenu"
            style={{ textDecoration: "none" }}
          >
            <Button className="navMenu" style={{ color: "black" }}>
              <CodeOutlinedIcon sx={{ fontSize: 45 }} />
            </Button>
          </a>
          <a
            href="/login"
            className="navMenu"
            style={{ textDecoration: "none" }}
          >
            <Button className="navMenu" style={{ color: "black" }}>
              <PermIdentityOutlinedIcon
                sx={{ fontSize: 45 }}
              ></PermIdentityOutlinedIcon>
            </Button>
          </a>
          <Cart />
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
