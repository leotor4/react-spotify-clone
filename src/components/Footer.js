import "../css/Footer.css"
import React, { useState, useEffect } from 'react';

function Footer() {
    const [dataAtual, setDataAtual] = useState(0);

    useEffect(() => {
        let dataCorrente = new Date();

        let dataFormatada = dataCorrente.getDate() + "/" + (dataCorrente.getMonth()+1) + "/" + dataCorrente.getFullYear()
        console.log(dataFormatada)
        document.getElementById("dataAtual").innerText = dataFormatada

    });
  return (
    <div className="Footer">
         <footer>
        
        <table>
            <tr>
                <th><img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" id="logo"/></th>
                <th>EMPRESA</th>
                <th>COMUNIDADES</th>
                <th>LINKS ÚTEIS</th>
            </tr>
            <tr>
                <td></td>
                <td>Sobre</td>
                <td>Para Artistas</td>
                <td>Suporte</td>
            </tr>
            <tr>
                <td></td>
                <td>Empregos</td>
                <td>Desenvolvedores</td>
                <td>Player da Web</td>
            </tr>
            <tr>
                <td></td>
                <td>For the Record</td>
                <td>Publicidade</td>
                <td>Aplicativo móvel grátis</td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td>Investidores</td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td>Fornecedores</td>
                <td></td>
            </tr>
        </table>
    </footer>
    <div id="dataAtual">
    </div>
    </div>
  );
}

export default Footer;
