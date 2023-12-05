// Layout.js
import Navbar from '../../../React-CC-1-material/src/components/Navbar';
import Sidebar from '../../../React-CC-1-material/src/components/Sidebar';
import { Box } from '@mui/material';


const Layout = ({ testing }) => (
  <Box sx={{ display: 'flex' }}>
    <Navbar />
    <Sidebar />
    <Box component="main" sx={{ flexGrow: 1, p: 3, pt: 8 }}> 
      {testing}
    </Box>
  </Box>
);
export default Layout;