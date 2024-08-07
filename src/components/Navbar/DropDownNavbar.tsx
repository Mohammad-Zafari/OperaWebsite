import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { RsetLoggedIn } from "@/slices/NavbarSlices";
import { useDispatch, UseDispatch } from "react-redux";


const DropDownMenu = () => {
  const dispatch= useDispatch()
  const handleLoginChange =()=> {
    {
      dispatch(RsetLoggedIn(false)); // Make sure to use 'setLoggedIn' instead of 'RsetLoggedIn'
    }
  };
  return (
<div className="items-start">
<DropdownMenu>
  <DropdownMenuTrigger className="outline-none" >
    <div className="flex items-center rounded-3xl border-white border-2 mt-1 outline-none" >
    <img src="man-avatar.svg" alt="" className="size-10 w-fit bg-[#b09945] rounded-3xl m-1"/>
    <p className="text-white m-1 px-2"> محمد ظفری</p>
    
    </div>
  </DropdownMenuTrigger>
  <DropdownMenuContent className="bg-gray-400">
    <DropdownMenuLabel>حساب من</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem className="cursor-pointer">پروفایل
    
    </DropdownMenuItem>
    <DropdownMenuItem className="cursor-pointer" onClick={handleLoginChange}>خروج از حساب</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
</div>
  );
}
 
export default DropDownMenu;