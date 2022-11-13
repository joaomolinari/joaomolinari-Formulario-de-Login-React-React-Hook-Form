import React from 'react'
import bgImg from '../assets/img1.jpg';
import { useForm } from 'react-hook-form';

export default function Form() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);

    console.log(watch('nomeUsuario'));

    return (
        <section>
            <div className='register'>
                <div className='col-1'>
                    <h2>Registrar</h2>
                    <span>Registre-se e conheça nossos serviços</span>

                    <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" {...register("nomeUsuario")} placeholder='Nome de usuário' />
                        <input type="password" {...register("senha")} placeholder='Senha' />
                        <input type="password" {...register("confirmeSenha")} placeholder='Confirme sua senha' />
                        <input type="text" {...register("numeroTelefone", { required: true, maxLength:11 })} placeholder='Número de telefone' />
                        {errors.numeroTelefone?.type === "required" && "O número de telefone é obrigatório"}
                        {errors.numeroTelefone?.type === "maxLength" && "Limite de caracteres atingidos"}

                        <button className='btn'>Entrar</button>
                    </form>
                </div>
                <div className='col-2'>
                    <div className='col-2'>
                        <img src={bgImg} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}