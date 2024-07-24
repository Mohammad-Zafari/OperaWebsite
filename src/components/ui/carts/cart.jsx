
const Cart = ({ title, description, imagesrc }) => {
  return (
    <div className="bg-customBackWhite w-[380px] h-[328px] rounded-[29px] flex items-center justify-center ">
      <div className=" bg-customFrontWhite h-[305px] w-[357px] border-solid shadow-customShadow1  rounded-[29px] relative">
        <div className="relative justify-center flex ">
          <img src={imagesrc} alt={title} className="z-10 w-[284px] h-[212px] absolute  " />
          <div className="w-[246px] h-[247px]  z-20 rounded-full absolu" style={{ background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.24) 0%, rgba(7, 7, 7, 0.24) 135.63%)', }}>
          </div>
        </div>
        <div className="text-right  mt-[-30px] mr-4 ">
          <h1 className="text-customPurple font-bold text-2xl">{title}</h1>
          <p className="text-xs font-normal mt-2 ml-9">{description}</p>
        </div>
      </div>
    </div>
  );
}
export default Cart;