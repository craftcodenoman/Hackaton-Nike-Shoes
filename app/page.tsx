import Image from "next/image";
function Home() {
  return(
    <div className="w-[95%] mx-auto mt-96px flex items-center  flex-col">
      <h1 className="font-bold xl-10">Hello Nike App</h1>
      <h5>Download The App to access everything Nike <u>Get Your Great </u>   </h5>
      <Image
              src="/nike shoes.png"
              alt="Nike Logo"
              width={1344}
              height={700}
              className="cursor-pointer mb-8 "
            />
      
      <h1 className="font-extrabold max-xl:h-10">NIKE AIR MAX PULSE</h1>
      

      </div>
  )
}export default Home
