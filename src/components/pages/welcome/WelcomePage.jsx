import Page from "../../basic/Page"
import { Link } from "react-router-dom"

const WelcomePage = () => {
    return (
        <Page title={"Willkommen"}>
            <p className="pb-5">
                This platform will help you learn German articles easier and
                faster. It’s simple. Select a topic of words and take the quiz.
                Don’t worry if you won’t know the article at first time. Do
                mistakes! Then you learn the articles better. You always can try
                again to check your memory.
            </p>
            <p className="pb-5">
                Repeat the process couple times, and you’ll be surprised how
                good you will know the articles after that.
            </p>
            <p className="pb-5">
                Press{" "}
                <Link className="text-cllink underline decoration-solid" to="/topics">
                    Here
                </Link>{" "}
                to select the topics
            </p>
        </Page>
    )
}

export default WelcomePage
