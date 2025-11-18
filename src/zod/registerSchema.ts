import * as z from "zod";

export const Schema = z.object({
    user: z.string()
        .min(3, "Minimo 3 caracteres")
        .max(16, "Maximo 16 caracteres"),

    email: z.email("Ingrese un correo valido")
        .min(1, "Ingresa un correo"),

    password: z.string("Ingresa una contraseña").
        min(2, "Minimo 2 caracteres"),

    rol: z.string()
        .nonempty("Seleccione un rol")
})

export type FormData = z.infer<typeof Schema>