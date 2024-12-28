import Image from 'next/image'

export default function Home () {
  return (
    <div className='flex justify-center items-center h-screen'>
      <Image
        src='/logo-white.png'
        alt='Logo'
        width={800}
        height={800}
        priority
      />
    </div>
  )
}
