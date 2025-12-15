import { AppLayout } from "../layout/AppLayout"
import { Hr, Title } from "../../ui/components"
import { BuildGrid } from '../components';

export const Builds = () => {
    return (
        <AppLayout>
            <section className="space-y-6">
                <header className="space-y-2">
                    <Title>Builds del Gremio</Title>
                </header>

                <Hr />

                <BuildGrid />

            </section>
        </AppLayout>
    );
};
