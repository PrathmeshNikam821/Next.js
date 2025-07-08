
//server component by default 
//fetch data inside a server component 
//access backend resources directly
//keep sensitive info in the server side 
//not to be exposed to the client side 


//you can not 
// use hooks -> not possible 
//add event not possible 


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
     <h1 className="text-lg font-bold">Hello Next js !</h1>
     <h2>This is our home page at root route</h2>
    </div>
  );
}
