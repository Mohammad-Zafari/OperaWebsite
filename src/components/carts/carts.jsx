import Cart from "./cart"

const cartData=[
  {
  
    "title": "امکان بازرسی تمام تماس ها",
    "description": "با کمک اپرا میتوانید تمام تماس های ورودی و خروجی را بازرسی کنید این امر موجب میشود که...",
    "imagesrc": "/bazrasi-item.svg"
  },
  {

    "title": "امکان جستجو در تماس ها",
    "description": "پرا این امکان را به شما میدهد که در تمامی تماس های ورودی و خروجی جستجو و تماس مدنظر را پیدا کنید.",
    "imagesrc": "/call-search-item.svg"
  }
]

const Carts = () => {
  return (
    <div>
       {cartData.map((cart, index) => (
        <Cart 
          key={index} // Use index as key, but try to use unique IDs if possible
          title={cart.title} 
          description={cart.description}
          imagesrc={cart.imagesrc} 
        />
      ))}
    </div>
  );
}

export default Carts;