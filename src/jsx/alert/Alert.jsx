
import { Icon } from '@iconify/react';
import { useSelector } from 'react-redux';


const Alert = () => {

    const alertState = useSelector(state => state.windows.value.alert)


    const parentHideStyle = {
        transform: "translateY(150%)"
    }

    const parentShowStyle = {
        transform: "translateY(0%)"
    }


    return (
        <div className="alert-page" style={alertState.state === 'show' ? parentShowStyle : parentHideStyle} >
            <div className={`container 
            ${alertState.state === 'show' ? 'show' : 'hide'} ${alertState.color} `}>
                <h1>{alertState.text}</h1>
                <Icon icon="eos-icons:three-dots-loading" color="white" />
            </div>
        </div>
    )

}

export default Alert
