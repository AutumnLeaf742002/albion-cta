import { MainLayout } from "../layout"
import { ButtonPrimary, ButtonDefault, LogoText, Text, Title, CardLanding, Footer } from "../components"
import boldIcon from "../../assets/icons/bold.svg"
import groupsIcon from "../../assets/icons/groups.svg"
import barchartIcon from "../../assets/icons/barchart.svg"
import { useNavigate } from "react-router"

export const Landing = () => {

    const navigate = useNavigate()

    const goLogin = () => {

        navigate("/auth/login")
    }

    const goRegister = () => {

        navigate("/auth/register")
    }

    return (
        <MainLayout>

            {/* header section */}
            <header className="md:mx-28 px-6 py-5 border-b border-(--color-border) flex flex-col md:flex-row gap-4 md:gap-0 items-center justify-between">
                <LogoText />

                <span className="flex gap-4">
                    <ButtonDefault callback={goLogin} text="Iniciar sesion" />
                    <ButtonPrimary callback={goRegister} text="Registrarse" />
                </span>
            </header>
            {/* header section */}

            {/* hero section */}
            <section className="px-5 mb-5 md:px-28 md:py-16 mt-5 md:mt-10 flex items-center gap-10">
                <div className="flex flex-col gap-7 w-full md:w-1/2 items-center md:items-baseline">
                    <div className="flex flex-col text-nowrap md:text-wrap text-center md:items-baseline">
                        <span className="text-4xl md:text-left md:text-5xl font-bold text-(--color-text-title)">
                            Domina el juego
                        </span>
                        <span className="text-4xl md:text-left md:text-5xl font-bold text-(--color-primary)">
                            como un profesional
                        </span>
                    </div>
                    <div>
                        <Text className="text-lg md:pr-26 text-center md:text-left">
                            La plataforma definitiva para administrar tus eventos, conectar con tu gremio y llevar tu estrategia al siguiente nivel
                        </Text>
                    </div>
                    <div>
                        <ButtonPrimary text="Comenzar ahora" callback={goRegister} />
                    </div>
                </div>

                <div className="w-1/2 hidden md:block">
                    <img src="https://c.wallhere.com/photos/5c/33/albion_Albion_Online_mmo_mmorpg-1970813.jpg!d" alt="albion hero image"
                        className="w-[90%] rounded-md border-2 border-(--color-border)"
                    />
                </div>
            </section>
            {/* hero section */}

            {/* cards section */}
            <section className="bg-(--color-surface) px-10 md:px-28 py-16 flex flex-col gap-10">
                <Title className="text-3xl font-bold text-center text-nowrap">
                    Potencia tu juego
                </Title>

                <div className="flex flex-wrap justify-center gap-3">
                    <CardLanding title="Crea tus composiciones en tiempo real" text="Monitoriza tu gremio y organizalo mas rapido que nunca." icon={boldIcon} />

                    <CardLanding title="Gestión de composiciones" text="Coordina tu gremio y mejora su rendimiento." icon={groupsIcon} />

                    <CardLanding title="Historial detallado" text="Lleva tu registro de asistencias al mejor nivel." icon={barchartIcon} />
                </div>
            </section>
            {/* cards section */}

            <Footer />
        </MainLayout>
    )
}