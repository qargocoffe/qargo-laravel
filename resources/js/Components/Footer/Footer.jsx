
export const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center py-6 text-beige md:flex-row md:justify-between md:px-10 bg-whiteBackground slide-in-left">
      <div className="flex flex-col justify-start">
        <span className="mb-4 font-black text-center md:text-xl">Follow us</span>
        <nav className="flex items-center justify-center gap-5 px-12 list-none">
        
          <li>
            <a href="instagram.com">
              <img src={'/footer/social/facebook.png'} alt="Coffe" width={20} height={35} />
            </a>
          </li>
          <li>
            <a href="instagram.com">
              <img src={'/footer/social/ig.png'} alt="Coffe" width={35} height={35} />
            </a>
          </li>
          <li>
            <a href="instagram.com">
              <img src={'/footer/social/youtube.png'} alt="Coffe" width={35} height={35} />
            </a>
          </li>
          <li>
            <a href="instagram.com">
              <img src={'/footer/social/spotify.png'} alt="Coffe" width={35} height={35} />
            </a>
          </li>
          <li>
            <a href="instagram.com">
              <img src={'/footer/social/in.png'} alt="Coffe" width={35} height={35} />
            </a>
          </li>
          <li>
            <a href="instagram.com">
              <img src={'/footer/social/tiktok.png'} alt="Coffe" width={30} height={35} />
            </a>
          </li>
          
          <li>
            <a href="instagram.com">
              <img src={'/footer/social/pinterest.png'} alt="Coffe" width={30} height={35} />
            </a>
          </li>
        </nav>
      </div>
      <div className="flex gap-5 mt-8 text-sm text-lavazzaBlue">
        <a href="/" className="underline md:text-lg">Terms of Use </a>
        <a href="/" className="underline md:text-lg">Privacy Policy </a>
      </div>

      <div className="mt-8 text-sm font-light md:text-lg">
        <p className="text-center">© 2024 Qargo Coffee. All rights reserved.</p>      
      </div>
    </footer>
  )
}
