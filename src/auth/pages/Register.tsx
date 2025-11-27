import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { Schema, type FormData } from "../../zod/registerSchema"

import { MainLayout } from "../../ui/layout"
import { AuthLayout } from "../layout"
import { ButtonPrimary, Input, Select } from "../../ui/components"
import { AuthRedirect } from "../components"

export const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(Schema)
    })

    const onSubmit = (data: FormData) => {

        console.log(data)
    }

    return (
        <MainLayout>
            <AuthLayout title="Crear cuenta">
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 h-full">

                    <div className="flex flex-col gap-5 flex-1">

                        <Input label="Nombre de usuario" name="user" register={register} error={errors.user?.message} />

                        <Input label="Correo electrónico" type="email" name="email" register={register} error={errors.email?.message} />

                        <Input label="Contraseña" type="password" name="password" register={register} error={errors.password?.message} />

                        <Select label="Rol general" opts={[
                            { value: "", text: "Seleccionar" },
                            { value: 1, text: "Tanque" },
                            { value: 2, text: "Healer" },
                            { value: 3, text: "Dps", default: true },
                            { value: 4, text: "Soporte" },
                            { value: 5, text: "Montura de batalla" }
                        ]} name="rol" register={register} error={errors.rol?.message} />

                    </div>

                    <div className="h-20 flex flex-col gap-2">
                        <ButtonPrimary type="submit" text="Registrarse" />

                        <AuthRedirect text="¿Ya tienes cuenta?" link="Iniciar sesión" path="/auth/login" />
                    </div>

                </form>
            </AuthLayout>
        </MainLayout>
    )
}