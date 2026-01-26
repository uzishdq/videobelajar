import { IMG_PUBLIC, ROUTES } from "@/lib/constant";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function Nav() {
  return (
    <header className="bg-white w-full max-h-20 shadow">
      <nav className="flex items-center justify-between px-6 md:px-32 py-2">
        <Link
          href={ROUTES.PUBLIC.INDEX}
          className="relative w-38 h-10.5 md:w-59.25 md:h-14"
        >
          <Image
            src={IMG_PUBLIC.LOGO}
            alt="videobelajar"
            className="object-contain"
            fill
          />
        </Link>

        {/* <div className="flex items-center gap-2">
          <p className="hidden md:block">kategori</p>
          <Avatar className="size-9 md:size-12 rounded-lg">
            <AvatarImage src={IMG_PUBLIC.DEFAULT_PROFILE} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <CircleUser className="h-5 w-5" />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <ButtonRefreshData />
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={ROUTES.AUTH.USER.SETTING} className="w-full">
                Setting
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href={ROUTES.AUTH.USER.PROFILE} className="w-full">
                Profile
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={ROUTES.AUTH.USER.UNDUR_DIRI} className="w-full">
                Undur Diri
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <ButtonSignOut />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        </div> */}
      </nav>
    </header>
  );
}
