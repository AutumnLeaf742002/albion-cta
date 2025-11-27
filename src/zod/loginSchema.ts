import * as z from "zod";

export const Schema = z.object({
    email: z.email("Ingrese un correo valido"),
    password: z.string().nonempty("Ingresa una contraseña")
})

export type FormData = z.infer<typeof Schema>