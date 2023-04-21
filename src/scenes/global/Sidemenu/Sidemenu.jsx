import { useState } from "react";
import { Sidebar, Menu, MenuItem} from "react-pro-sidebar";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../../theme";
import {Box, IconButton, Typography, useTheme} from '@mui/material';
import {Link} from "react-router-dom";
import { useProSidebar } from "react-pro-sidebar";
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import InsertChartOutlinedRoundedIcon from '@mui/icons-material/InsertChartOutlinedRounded';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import SocialDistanceOutlinedIcon from '@mui/icons-material/SocialDistanceOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';


const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};


    
    const Sidemenu = () => {
      const theme = useTheme();
      const colors = tokens(theme.palette.mode);
      const [isCollapsed] = useState(false);
      const [selected, setSelected] = useState("Dashboard");
      const colorMode = useContext(ColorModeContext);
      const { collapseSidebar, toggleSidebar, collapsed, broken } = useProSidebar();
      
      return (
        <Box
          sx={{
            position: "sticky",
            display: "flex",
            height: "100vh",
            top: 0,
            bottom: 0,
            zIndex: 10000,
            "& .sidebar": {
              border: "none",
            },
            "& .menu-icon": {
              backgroundColor: "transparent !important",
            },
            "& .menu-item": {
              // padding: "5px 35px 5px 20px !important",
              backgroundColor: "transparent !important",
            },
            
            "& .menu-item : hover": {
              color: `${colors.blueAccent[500]} !important`,
              backgroundColor: "transparent !important",
            },
            "& .menu-item. active": {
              color: `${colors.greenAccent[500]} !important`,
              backgroundColor: "transparent !important",
            },
          }}
        >
          <Sidebar
          
           className="sidebar"
          breakPoint="md"
            backgroundColor={colors.primary[400]}
            
            
          >
            <Menu iconshape="square" 
            className="menu-item " >
              <MenuItem 
                 
                 style={{
                   margin: "10px 0 20px 0",
                   color: colors.grey[100],
                 }}
                
              >
                {!isCollapsed && (
                  <Box
                    display="flex"
                    
                  >
                    
                  <IconButton onClick={
                    broken? () =>toggleSidebar():() => collapseSidebar()}>
                    <KeyboardArrowLeftOutlinedIcon />
                  </IconButton>   
                    
                  </Box>
                )}
              </MenuItem>
              
              <Box paddingLeft={collapsed ? undefined : "10%"} 
              
               
               >
                
                  <Item className ="menu-icon"
                  title="Dashboard"
                  to="/"
                  icon={<GridViewOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
    
                
                <Item className ="menu-icon"
                  title="Product Categories"
                  to="/team"
                  icon={<CategoryOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item className ="menu-icon"
                  title="Lead Management"
                  to="/contacts"
                  icon={<InsertChartOutlinedRoundedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item  className ="menu-icon"
                  title="Campaigns"
                  to="/invoices"
                  icon={<MailOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
    
                <Item className ="menu-icon"
                  title="Application"
                  to="/form"
                  icon={<DriveFileRenameOutlineOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item   className ="menu-icon"
                  title="My Contracts"
                  to="/calendar"
                  icon={<SocialDistanceOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item  className ="menu-icon"
                  title="Claims"
                  to="/faq"
                  icon={<ArticleOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
    
                <Item  className ="menu-icon"
                  title="twitter"
                  to="/bar"
                  icon={<TwitterIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item  className ="menu-icon"
                  title="Settings"
                  to="/pie"
                  icon={<SettingsOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                
                  <Item  className ="menu-icon"
                  title="Dark Mode"
                  to="/pie"
                  icon={<IconButton onClick={colorMode.toggleColorMode}>
                  {theme.palette.mode === "dark" ? (
                  <DarkModeOutlinedIcon />
                  ) : (
                  <LightModeOutlinedIcon />
                  )}
                  </IconButton>}
                  selected={selected}
                  setSelected={setSelected}
                  />


                  <Item  className ="menu-icon"
                  title="Logout"
                  to="/pie"
                  icon={< LogoutOutlinedIcon/>}
                  selected={selected}
                  setSelected={setSelected}
                />


                
                
                 
                
                
              </Box>
              
            </Menu>
          </Sidebar>
        </Box>
      );
    };
export default Sidemenu;