import { ReactNode, useContext } from 'react'
import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

import { AuthContext } from '../../context/AuthContext'

function Footer() {

  let data = new Date().getFullYear()

  const { usuario } = useContext(AuthContext)

  let component: ReactNode

  if (usuario.token !== "") {

    component = (
      <div className="flex justify-center bg-gray-400 text-black">
        <div className="container flex flex-col items-center py-4">
          <p className='text-small font-thin'>
            Blog Pessoal Pedro Melo | Copyright &copy;  {data}
          </p>

        </div>
      </div>)
  }

  return (
    <>
      {component}
    </>
  )
}

export default Footer