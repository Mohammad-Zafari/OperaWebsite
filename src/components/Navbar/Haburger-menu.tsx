import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { DialogClose, DialogContent } from "@radix-ui/react-dialog";

export function SheetDemo() {
  return (
    <Sheet >
      <SheetTrigger asChild className="">
        <Button className="shadow-none">
          <img src="hamburger-menu.svg" alt="" />
        </Button>
      </SheetTrigger>

      <SheetContent className="bg-purple-100 bg-opacity-100 border-none w-[50%]">
        <SheetHeader className="flex items-end text-white">
          <SheetTitle> <img src="logo (1).svg" alt="" /></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4 justify-items-end text-black">
          <div className=" bg-yellow-400 cursor-pointer">ارتباط با ما</div>
          <div className=" items-center cursor-pointer">درباره ما</div>
          <div className=" items-center cursor-pointer">مشتریان</div>
          <div className=" items-center cursor-pointer">وبلاگ</div>
          <div className=" items-center cursor-pointer">طرح ها</div>
          <div className=" items-center cursor-pointer">خانه</div>
        </div>
        <SheetFooter>
          <SheetClose asChild className=""></SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
