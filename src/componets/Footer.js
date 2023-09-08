
/* eslint-disable */
import Logo from '../images/mylogo.jpeg'

export function Footer () {
    return(

<footer className="bg-zinc-800	:bg-gray-900">
   <div className="mx-auto w-full max-w-screen-xl p-2 py-1 lg:py-6">
        <div className="md:flex md:justify-between">
          <div className="mb-3 md:mb-3">
              <a href="/#" className="flex items-center">
                  <img src={Logo} className="h-8 mr-3" alt="" />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">FullStackApp</span>
              </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
         
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Contact</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="https://github.com/memodiaz44" className="hover:underline ">Github</a>
                      </li>
                      <li>
                          <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Linkedin</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="" className="hover:underline"></a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
          
          </div>
      </div>
    </div>
</footer>

    )
}