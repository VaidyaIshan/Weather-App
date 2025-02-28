'use client';
import Link from 'next/link';
export default function Text() {
  return (
    <div className="text-center px-4">
      <p className="text-xl md:text-7xl lg:text-8xl font-bold leading-tight font-sans text-white">
        Discover The Weather Efficiently Like Never Before
      </p><br></br><br></br>
       <Link href='/weatherdata'><button className="bg-green-500 w-64 h-12 text-xl rounded-lg hover:bg-green-600">Search Weather</button></Link>
    </div>
  );
}