import Link from 'next/link'
import style from '../styles/login.module.css'

export default function login() {
    let link = '/';
    return (
        <div className={style.body}>
            <div className={style.container}>
                <div className={style.right}>
                    <img src="assets/ccedf03d22d9afe4af3b7ef9a12730f5 1.png" alt="" />

                </div>
                <div className={style.left}>

                    <img src="assets/logo.png" alt="" />
                    <div>
                        E-mail:
                        <input type="text" placeholder='e-mail' />
                    </div> <div>
                        Senha:
                        <input type="text" placeholder='Senha' />
                    </div>

                    <button className={style.btn}>
                        <Link href={link} className={style.entrar}>Entrar</Link>
                    </button>
                </div>
            </div>

        </div>
    );

}