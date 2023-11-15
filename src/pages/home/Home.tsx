import ListaPostagens from "../../components/postagens/listaPostagens/ListaPostagens"
import ModalPostagem from "../../components/postagens/modalPostagem/ModalPostagem"

function Home() {
    return (
        <>
            <div className="bg-gradient-to-r from-sky-700 from-70%  flex justify-center fundoHome">
                <div className='container grid grid-cols-2 text-black'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Olá!
                        </h2>
                        <p className='text-xl'>
                            Eu sou o Pedro e esse é o meu Blog Pessoal.
                        </p>

                        <div className="flex justify-around gap-4 ">
                            <ModalPostagem />
                        </div>

                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="https://media.licdn.com/dms/image/D4D03AQHJh7DYHdn7Jw/profile-displayphoto-shrink_800_800/0/1688037168694?e=1705536000&v=beta&t=2G2MlwG9Uu5tZZrUcvX8UAsZs0q7dXd1gX5LoFgsd5I"
                            alt="Imagem Página Home"
                            className='w-2/3 rounded-xl'
                        />
                    </div>
                </div>
            </div>

            <ListaPostagens />
        </>
    )
}

export default Home