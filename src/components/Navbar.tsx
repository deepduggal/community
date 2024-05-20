'use client';
import { useAuth } from "@/app/auth";
import { sign } from "crypto";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const { authUser, isLoading, signOut } = useAuth();
  const router = useRouter();

  const logout = async () => {
    signOut();
    router.push('/');
  };

  return (
    <nav className='flex p-4 justify-between border-b-zinc-500 border-b-4'>
      <div className="flex">
        <Link href='/'><Image src="/DLogo.svg" alt="Logo" width={36} height={36} className="mr-4" /></Link>
        <span className='text-4xl font-light text-slate-700'>Deep&apos;s Blog</span>
      </div>
      {authUser && <button className='font-bold transition' onClick={logout}>Logout</button>}
    </nav>
  );
};

export default Navbar;