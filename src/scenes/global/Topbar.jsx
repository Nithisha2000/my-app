import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";

import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";

import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  

  return (
    <Box display="flex" justifyContent="space-between" p={3}>
      {/* SEARCH BAR */}
      <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h1" color={colors.blueAccent[100]}>
                  .Ins.  
                </Typography>
                
                <Typography variant="h3" color={colors.blueAccent[100]}>
                  Agent's Portal
                </Typography>
                
              </Box>
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
        <InputBase sx={{flex: 2, ml:2}} placeholder="Search" />
        
      </Box>

      {/* ICONS */}
      <Box display="flex">
        
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;