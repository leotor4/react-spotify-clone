import logo from '../assets/logo.svg';
import "../css/Header.css"

function Header() {
  return (
    <div className="Header">
      <header className="Menu-header">
      <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" id="logo"/>
        <ul id="menu">
            <li id="premiun"><a href="https://www.spotify.com/br/premium/" class="link" >Premium</a></li>
            <li id="suporte"><a href="https://support.spotify.com/br/?_gl=1*10sod5d*_gcl_aw*R0NMLjE2MjkxMzQ5NzAuQ2p3S0NBandtZWlJQmhBNkVpd0EtdWFlRmNkY2pJY2dhZ0xzeWtyakVUcnA5cnBNa3lESnF3N25SZld5Z3RHeW1RamYweGNGYWdkbnlCb0NPYWtRQXZEX0J3RQ..*_gcl_dc*R0NMLjE2MjkxMzQ5NzAuQ2p3S0NBandtZWlJQmhBNkVpd0EtdWFlRmNkY2pJY2dhZ0xzeWtyakVUcnA5cnBNa3lESnF3N25SZld5Z3RHeW1RamYweGNGYWdkbnlCb0NPYWtRQXZEX0J3RQ..&_ga=2.131199757.32950660.1629133013-1977054084.1629133013&_gac=1.195833566.1629134973.CjwKCAjwmeiIBhA6EiwA-uaeFcdcjIcgagLsykrjETrp9rpMkyDJqw7nRfWygtGymQjf0xcFagdnyBoCOakQAvD_BwE" class="link" >Suporte</a></li>
            <li id="baixar"><a href="https://www.spotify.com/br/download/windows/" class="link" >Baixar</a></li>
            <li id="espaco"><a>|</a></li>
            <li id="inscreva-se"><a href="https://www.spotify.com/br/signup/" class="link" >Inscreva-se</a></li>
            <li id="entrar"><a href="https://accounts.spotify.com/pt-BR/login/?continue=https:%2F%2Fopen.spotify.com%2F%3Fl2l%3D1&_gl=1*19s7wpc*_gcl_aw*R0NMLjE2MjkxMzQ5NzAuQ2p3S0NBandtZWlJQmhBNkVpd0EtdWFlRmNkY2pJY2dhZ0xzeWtyakVUcnA5cnBNa3lESnF3N25SZld5Z3RHeW1RamYweGNGYWdkbnlCb0NPYWtRQXZEX0J3RQ..*_gcl_dc*R0NMLjE2MjkxMzQ5NzAuQ2p3S0NBandtZWlJQmhBNkVpd0EtdWFlRmNkY2pJY2dhZ0xzeWtyakVUcnA5cnBNa3lESnF3N25SZld5Z3RHeW1RamYweGNGYWdkbnlCb0NPYWtRQXZEX0J3RQ..&_ga=2.98702108.32950660.1629133013-1977054084.1629133013&_gac=1.93605487.1629134973.CjwKCAjwmeiIBhA6EiwA-uaeFcdcjIcgagLsykrjETrp9rpMkyDJqw7nRfWygtGymQjf0xcFagdnyBoCOakQAvD_BwE" class="link" >Entrar</a></li>
        </ul>
      </header>
    </div>
  );
}

export default Header;
