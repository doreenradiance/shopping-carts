import React from 'react'


const items = [ {
        name:'Cat Tee Black T-Shirt',
        image:'rayul-_M6gy9oHgII-unsplash.jpg',
        price:10.90,
        discount:'9 x $ 1.21',    
   },
   {
    name:'Sphynx Tie Dye Wine T-shirt',
    image:'seth-doyle-R5tHd-aYmPs-unsplash.jpg',
    price:10.90,
    discount:'9 x $ 1.21',    
   },
   {
    name:'On The Streets T-shirt',
    image:'yannic-laderach-nwR9BCNgZJc-unsplash.jpg',
    price:10.90,
    discount:'9 x $ 1.21',    
   },
   {
    name:'White DKG Script Tee',
    image:'tyler-nix-ZGa9d1a_4tA-unsplash.jpg',
    price:10.90,
    discount:'9 x $ 1.21',    
   },
   {
    name:'White DKG Script Tee',
    image:'elijah-hiett-umfpFoKxIVg-unsplash.jpg',
    price:10.90,
    discount:'9 x $ 1.21',    
   },
   {
    name:'On The Streets T-shirt',
    image:'fabio-scaletta-cYSRncVxE44-unsplash.jpg',
    price:10.90,
    discount:'9 x $ 1.21',    
   },
   {
    name:'Skuul',
    image:'himanshu-dewangan-3vy8JquXGsA-unsplash.jpg',
    price:10.90,
    discount:'9 x $ 1.21',    
   },
   {
    name:'Cat Tee Black T-Shirt',
    image:'hust-wilson-WyDr1KFS23Y-unsplash.jpg',
    price:10.90,
    discount:'9 x $ 1.21',    
   },
   {
    name:'On The Streets T-shirt',
    image:'ilya-gorborukov-syx5GyrkeZ8-unsplash.jpg',
    price:10.90,
    discount:'9 x $ 1.21',    
   },
   {
    name:'Cat Tee Black T-Shirt',
    image:'jakob-owens-lkMJcGDZLVs-unsplash.jpg',
    price:10.90,
    discount:'9 x $ 1.21',    
   },
   {
    name:'Crazy Monkey T-shirt',
    image:'jonathon-dorofy-KZ0uH23koWQ-unsplash.jpg',
    price:10.90,
    discount:'9 x $ 1.21',    
   },
   {
    name:'Danger Knife Grey',
    image:'mihai-stefan-2WdMD67hLZ4-unsplash.jpg',
    price: 10.90,
    discount:' or 9 x $ 1.21',    
   },

]  

function Products() {
  return (
    <div className="col-md-10">
      <div className="row"> 
      {
        items.map((item) => <Item{...item} />)
      }
      </div> 
    </div>
  )
}

function Item({name , image, price, discount}) {
  return (
      <div className="col-sm-6 col-md-3">
        <div className="thumbnail">
          <img src={'image/' + image}  alt={image} />
          <p className="text">Free Shipping</p>
          <div className="caption">
           <h3 className="p1">{name}</h3>
            <div className="bar"></div>
            <p className="p2">{price}</p>
            <p className="p2">{discount}</p>
            <p className="p">Add to cart</p>
          </div>
        </div>
      </div>
  )
}  

export default Products;
