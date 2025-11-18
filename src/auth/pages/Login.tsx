import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { Schema, type FormData } from "../../zod/loginSchema"

import { MainLayout } from "../../ui/layout"
import { AuthLayout } from "../layout"
import { ButtonPrimary, Input } from "../../ui/components"
import { AuthRedirect } from "../components"

export const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(Schema)
    })

    const onSubmit = (data: FormData) => {
        console.log(data)
    }

    return (
        <MainLayout>
            <AuthLayout title="Iniciar sesión">
                <span className=" flex flex-col gap-5 h-full">
                    <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-4 h-full">

                        <div className="flex-1 flex gap-5 flex-col">
                            <Input name="email" register={register} label="Correo electrónico" type="mail" error={errors.email?.message} />

                            <Input label="Contraseña" type="password" register={register} name="password" error={errors.password?.message} />
                        </div>

                        <div className="flex flex-col gap-2">
                            <ButtonPrimary type="submit" text="Iniciar" />

                            <AuthRedirect text="¿No tienes cuenta?" link="Crear cuenta" path="/auth/register" />
                        </div>

                    </form>
                </span>
            </AuthLayout>
        </MainLayout>
    )
}