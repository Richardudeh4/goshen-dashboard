import { menu } from "../constant"

const Sidebar = () => {
  return (
    <div className="px-8 py-12 m-0 max-w-[250px] h-full fixed top-0  bg-[#152259]">
        <div className="py-4 ">
          <div className="relative">
        <img src="https://goshen-city.vercel.app/_next/image?url=https%3A%2F%2Fgoshencityschools.com%2Fwp-content%2Fuploads%2F2021%2F09%2FSchool-Logo-with-name.jpg&w=256&q=75"
         width={100} 
         height={100}
        alt="school logo" 
       />
        </div>
        <h1 className="font-bold text-xl text-center text-white pt-12"> Goshen City Schools</h1>
        </div>
        <div className="flex flex-col gap-10">
    {
      menu.map((item, index)=> (
        <div key={index}>
        <img src={item.icon} alt="icons" width={25} height={25}/>
        <h1 className="text-white ">{item.title}</h1>
        </div>
      ))
    }
        </div>
    </div>
  )
}

export default Sidebar