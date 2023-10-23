import React from "react";
import './Home.css';

function Home() {
    return (
        <>
            <div>
                <ul id="menu">
                    <li><a href="https://google.com.br">Dúvida? Pesquise aqui</a></li>
                    <li><a href="https://generationbrasil.online/#/login">Generation Brasil</a></li>
                </ul>
            </div>

            <hr />

            <div>
                <h1 className="titulo">PINGUINS 🐧</h1>
                <img src="https://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png" alt="Penguins" className="img" />
            </div>
        </>
    );
}

export default Home;