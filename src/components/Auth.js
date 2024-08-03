import AuthType from "./AuthType"
import { Quote } from "./Quote"

export const Auth = ({authType, login}) => {
    console.log(authType)
    return <div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div>
                <AuthType authType={authType} login={login}/>
            </div>
            <div className="hidden lg:block">
                <Quote />
            </div>
        </div>
    </div>
}