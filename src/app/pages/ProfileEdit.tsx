import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { Schema } from "../../zod/profileEditSchema"
import type { FormData } from "../../zod/profileEditSchema"

import { AppLayout } from "../layout/AppLayout"
import { Text } from "../../ui/components"
import { Input } from '../../ui/components/Input';

export const ProfileEdit = () => {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormData>({
        resolver: zodResolver(Schema),
    })

    const onSubmit = (data: FormData) => {
        console.log(data)
    }

    return (
        <AppLayout>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="mx-auto max-w-md space-y-6 mt-12"
            >

                {/* Header */}
                <div>
                    <Text className="text-2xl font-bold">
                        Editar perfil
                    </Text>
                    <Text className="text-sm text-(--color-text-muted)">
                        Solo puedes cambiar tu usuario y contraseña
                    </Text>
                </div>

                {/* Username */}
                <Input name="name" register={register} label="Nombre" error={errors.name?.message} />

                {/* Password */}
                <Input name="oldPassword" register={register} label="Contraseña actual" error={errors.oldPassword?.message} />

                <Input name="newPassword" register={register} label="Contraseña nueva" error={errors.newPassword?.message} />

                <Input name="repeatPassword" register={register} label="Repetir contraseña" error={errors.repeatPassword?.message} />

                {/* Actions */}
                <div className="flex gap-3 pt-2">
                    <button
                        type="submit"
                        className="flex-1 rounded-lg bg-(--color-primary) py-2 text-sm font-medium text-white hover:bg-(--color-primary-hover) transition"
                    >
                        Guardar cambios
                    </button>

                    <button
                        type="button"
                        className="flex-1 rounded-lg border border-(--color-border) py-2 text-sm text-(--color-text-muted) hover:bg-(--color-surface-alt) transition"
                    >
                        Cancelar
                    </button>
                </div>

            </form>
        </AppLayout>
    )
}