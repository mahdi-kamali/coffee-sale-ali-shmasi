import { Line } from 'rc-progress';
import { Icon } from '@iconify/react';


const LinePr = ({ data }) => {
    return (
        <div className='line-pr'>
            <span>
                <div className="title">
                    <Icon icon={data.svg} color='black' />
                    {data.title}
                </div>
                <small>{data.summary}</small>
            </span>
            <Line percent={data.percent}
                strokeWidth={2.5}
                strokeColor={` hsl(${data.percent + 20}, 100%, 50%)`}
                trailColor='rgba(0,0,0,0.00)' />
        </div >
    )
}

export default LinePr
