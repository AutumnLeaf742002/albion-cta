import { useParams } from "react-router-dom"
import { Text } from "../../ui/components"
import { AppLayout } from "../layout/AppLayout"

export const GuildView = () => {

    const {id} = useParams()

    return (
        <AppLayout>
            <Text>
                {id}
            </Text>
        </AppLayout>
    )
}