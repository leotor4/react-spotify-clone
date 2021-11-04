import React, {useState} from 'react';

import styles from './styles.module.scss';
import axios from 'axios';
import { useHistory } from 'react-router';
import { Cadastro } from '../Cadastro';

export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [erros, setErros] = useState({dadosInvalidos:''});
    const history = useHistory();

    async function handleLogin (e){
        e.preventDefault();

        if (!email) return;
        if (!password) return;

        await axios.get(`http://localhost:4000/users?email=${email}`)
            .then( (res) => {
                const user = res.data[0];
                
                if(user.password !== password){
                    setErros({dadosInvalidos: 'Dados invalidos'})
                    return
                }

                localStorage.setItem('@db/nickname', JSON.stringify(user))
                history.push('/home')
            })

    
    }
    function handleDirectCadastro(){
        history.push("/Cadastro")
    }


    return (
        <div className={styles.container} >
            <form onSubmit={handleLogin} className={styles.formContainer} >
            

                <section>
                    <input
                        type="email" 
                        required
                        placeholder="escreva seu e-mail"
                        onChange={(v) => setEmail(v.target.value)}
                    />
                </section>

                <section>
                    <input
                        type="password" 
                        required
                        placeholder="escreva sua senha:"
                        onChange={(v) => setPassword(v.target.value)}
                    />
                </section>
            </form>

            <section className={styles.submitBtn}>
                <button onClick={handleLogin} >Fazer login</button>
                <button onClick={handleDirectCadastro} >Cadastre-se</button>
            </section>
        </div>
    );
}