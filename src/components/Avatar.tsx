import Image from 'next/image'

const Avatar = () => {
  return (
    <div className='hidden xl:flex xl:max-w-none'>
     <Image
  src="/avatar5.png"
  width={637}
  height={578}
  alt=""
  className="w-full h-full transform scale-x-[-1]"
/>

    </div>
    
  )
};

export default Avatar;
