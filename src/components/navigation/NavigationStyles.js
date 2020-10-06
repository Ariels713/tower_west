import { makeStyles } from "@material-ui/styles";
import { colors } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "none",
    background: "#FFF",
    borderBottom: `1px solid ${colors.grey[200]}`,
  },
  flexGrow: {
    flexGrow: 1,
  },
  navigationContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  toolbar: {
    maxWidth: 1100,
    width: "100%",
    margin: "0 auto",
    padding: theme.spacing(0, 2),
  },
  navLink: {
    fontWeight: 300,
    "&:hover": {
      color: theme.palette.primary.dark,
    },
  },
  listItem: {
    cursor: "pointer",
    "&:hover > .menu-item, &:hover svg": {
      color: theme.palette.primary.dark,
    },
  },
  listItemActive: {
    "&> .menu-item": {
      color: theme.palette.primary.dark,
    },
  },
  listItemText: {
    flex: "0 0 auto",
    marginRight: theme.spacing(2),
    whiteSpace: "nowrap",
    fontSize: "1rem",
    textDecoration: "none",
    // color: theme.palette.primary.main,
    margin: "0 35px",
  },
  listItemIcon: {
    minWidth: "auto",
  },
  popover: {
    padding: theme.spacing(4),
    border: theme.spacing(2),
    boxShadow: "0 0.5rem 2rem 2px rgba(116, 123, 144, 0.09)",
    minWidth: 350,
    marginTop: theme.spacing(2),
  },
  iconButton: {
    padding: 0,
    "&:hover": {
      background: "transparent",
    },
  },
  expandOpen: {
    transform: "rotate(180deg)",
    color: theme.palette.primary.dark,
  },
  logoContainer: {
    width: 100,
    height: 28,
    [theme.breakpoints.up("md")]: {
      width: 120,
      height: 32,
    },
  },
  logoImage: {
    width: "100%",
    height: "100%",
  },
  menu: {
    display: "flex",
    justifyContent: "space-between",
  },
  menuItem: {
    marginRight: theme.spacing(5),
    "&:last-child": {
      marginRight: 0,
    },
  },
  menuGroupItem: {
    paddingTop: 0,
  },
  menuGroupTitle: {
    textTransform: "uppercase",
  },
}));
