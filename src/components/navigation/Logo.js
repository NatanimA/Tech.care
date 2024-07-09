import Image from "next/image";


const Logo = () => {
    return (
        
        <div className="mx-3 relative p-2 borde flex-shrink">
            <Image
            src="/TestLogo.png"
            alt="Test Logo"
            width={190}
            height={48}
          />

        </div>
     
          
      
  
    )
}

export default Logo;