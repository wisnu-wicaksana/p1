import Image from "next/image";

const List = ({ title, image }) => {
  return (
   
      <div className="">
        <Image src={image} alt="gambar" width={350} height={350} className="" />
        <h3 className="font-bold text-md p-2 md:text-xl ">{title}</h3> 
      </div> 
  
  );
};

export default List;
