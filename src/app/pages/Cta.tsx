import { AppLayout } from "../layout/AppLayout"
import { Card, Search, Hr } from '../../ui/components';
import { CtaList } from "../components";

export const Cta = () => {

    return (
        <AppLayout>
            <div className="flex flex-col gap-4">
                <Card className="">
                    <div className="w-full flex justify-center">
                        <Search />
                    </div>

                    <Hr className="my-4" />

                    <CtaList />
                </Card>
            </div>
        </AppLayout>
    )
}