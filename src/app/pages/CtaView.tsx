import { useParams } from "react-router-dom"
import { AppLayout } from "../layout/AppLayout"
import { Text } from '../../ui/components/Text';

export const CtaView = () => {

    const {id} = useParams()

    return (
        <AppLayout>
            <Text>
                {id}
            </Text>
        </AppLayout>
    )
}