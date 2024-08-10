import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const DropDownMenu = () => {
  return (
<DropdownMenu >
  <DropdownMenuTrigger  >
    <div className="bg-white flex items-center rounded-3xl">
    <img src="man-avatar.svg" alt="" className="size-12 w-fit bg-[#b09945] rounded-3xl m-1"/>
    <p className="text-black m-1"> محمد ظفری</p>
    </div>
  </DropdownMenuTrigger>
  <DropdownMenuContent className="bg-gray-400">
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem>Subscription</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

  );
}
 
export default DropDownMenu;