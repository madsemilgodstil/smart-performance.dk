import Image from 'next/image'
import Link from 'next/link'

export default function Home () {
  return (
    <div className='flex justify-center items-center h-screen'>
      <Link href='/'>
        <Image
          src='/logo-white.png'
          alt='Logo'
          width={800}
          height={800}
          priority
        />
      </Link>
    </div>
  )
}
