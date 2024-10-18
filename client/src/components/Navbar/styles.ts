const drawerWidth = 240;

export const navbarStyles = {
  drawer: {
    display: { xs: "none", sm: "block" },
    "& .MuiDrawer-paper": {
      boxSizing: "border-box",
      backgroundColor: "rgb(4, 32, 70)",
      color: "rgb(212, 221, 234)",
      width: drawerWidth,
    },
  },
  drawerMobile: {
    display: { xs: "block", sm: "none" },
    "& .MuiDrawer-paper": {
      boxSizing: "border-box",
      backgroundColor: "rgb(4, 32, 70)",
      color: "rgb(212, 221, 234)",
      width: drawerWidth,
    },
  },
  icons: {
    color: "rgb(212, 221, 234)",
    "&:hover": {
      color: "blue",
    },
  },
  text: {},
};
