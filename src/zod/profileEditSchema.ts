import * as z from "zod";

export const Schema = z.object({
    name: z.string().nonempty("Campo obligatorio").max(32, "Maximo 32 caracteres"),
    oldPassword: z.string().nonempty("Campo obligatorio").max(16, "Maximo 16 caracteres"),
    newPassword: z.string().nonempty("Campo obligatorio").max(16, "Maximo 16 caracteres"),
    repeatPassword: z.string().nonempty("Campo obligatorio").max(16, "Maximo 16 caracteres")
})
    .refine(
        (data) => data.newPassword === data.repeatPassword,
        {
            message: "Las contraseñas no coinciden",
            path: ["repeatPassword"],
        }
    )

export type FormData = z.infer<typeof Schema>