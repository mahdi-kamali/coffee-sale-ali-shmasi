
import { ReactComponent as SuggestSvg } from "../../../svgs/10.svg"


const Suggestion = () => {
    return (
        <section className="suggestion">
            <div className="left">
                <div className="danger">
                    <p>لیست علاقه مندی های شما لیستی است که شما محصولی را در آن ذخیره میکنید و تا زمانی که نیاز دارید میتوانید آن را مشاهده کنید اگر لیست شما محصولی داشته باشد ما بر اساس علاقه مندی های شما محصولاتی را پیشنهاد میدهیم که شاید با صلیقه شما همخوانی داشته باشد.</p>
                </div>
            </div>
            <div className="right">
                <SuggestSvg />

            </div>

        </section>
    )
}

export default Suggestion
