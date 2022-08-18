


const Step = (props) => {

    const isSelected = props.selected
    const data = props.data


    return (
        <div className={`step ${isSelected ? 'selected' : ''}`} >
            <div className="step-header">
                {data.header}
            </div>
            <div className="step-body">
                {data.body}
            </div>
        </div >
    )
}

export default Step
