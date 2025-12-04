import { AppLayout } from "../layout/AppLayout"
import { Text } from '../../ui/components/Text';
import { useParams } from "react-router-dom";

export const BuildView = () => {

    const {id} = useParams()

    return (
        <AppLayout>
            <Text>
                {id}
            </Text>
        </AppLayout>
    )
}