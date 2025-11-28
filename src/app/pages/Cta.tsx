import { AppLayout } from "../layout/AppLayout"
import { Card } from '../../ui/components/Card';
import { Search } from '../../ui/components/Search';
import { IoMdSearch } from "react-icons/io"

export const Cta = () => {

    return (
        <AppLayout>
            <Card className="">
                <div className="w-full flex justify-center">
                    <Search icon={<IoMdSearch size={20} />} placeholder={"buscar cta"} buttonText={"Filtrar"} />
                </div>
            </Card>
        </AppLayout>
    )
}