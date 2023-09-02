import Drawer from "@mui/material/Drawer";
import SidebarMenu from "../Sidebar/SidebarMenu";
import { MyPicture } from "../../assets/images/images";
import { Box } from "@mui/material";

interface IDrawerComponent {
  onClose: () => void;
}

const DrawerComponent = ({ onClose }: IDrawerComponent) => {
  return (
    <Drawer anchor="left" open={true} onClose={onClose}>
      <Box width={350} className="p-3 ">
        <Box className="flex justify-center items-center p-5">
          <img
            alt="my picture"
            src={MyPicture}
            className="shadow-sm"
            style={{ width: 80, height: 80, borderRadius: "50%" }}
          />
        </Box>
        <SidebarMenu onClose={onClose} />
      </Box>
    </Drawer>
  );
};

export default DrawerComponent;