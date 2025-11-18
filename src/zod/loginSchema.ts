import * as z from "zod";

export const Schema = z.object({
    email: z.email("Ingrese un correo valido")
        .min(1, "Ingresa un correo"),
    password: z.string("Ingresa una contraseña").min(2, "Minimo 2 caracteres")
})

export type FormData = z.infer<typeof Schema>