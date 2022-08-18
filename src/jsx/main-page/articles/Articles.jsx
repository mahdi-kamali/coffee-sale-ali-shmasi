
import React, { useState } from "react";


import ImageArticles from "./components/ImageArticles";
import VideoArticles from './components/VideoArticles'

const Articles = () => {


    const [imageSamples, setImageSamples] = useState([



        {
            id: '#5',
            header: 'تفاله قهوه چیست و چه کاربردی دارد؟',
            image: require('../../../images/articles/5.jpg'),
            description: 'اگر شما ازجمله افرادی هستید که به نوشیدنی قهوه علاقه زیادی دارید، آیا تابه‌حال به این موضوع فکر کرده‌اید که قهوه چگونه به دست می‌آید؟ دانه‌های قهوه بعد از رسیدن و سبز شدن، باید برشته شوند تا رنگ قهوه معمولی که در تمام دنیا پرطرفدار است، به دست بیاید. ‌اما بعد از عصاره‌کشی قهوه، تفاله قهوه باقی می‌ماند. شاید این ذهنیت برای همه وجود داشته باشد که این ماده بی‌فایده بوده و باید آن را دور بریزیم؛ اما جالب است بدانید خواص و کاربرد‌های زیادی برای تفاله قهوه ذکر شده است. تا انتهای این مقاله با فروشگاه به کافی همراه باشید تا در مورد فواید استفاده از تفاله قهوه بیشتر بدانید. اگر سوالی داشتید می‌توانید در بخش نظرات مطرح کتید.',
            author: { name: 'علی', family: 'سیاهی', image: require('../../../images/avatar/1.jpg') },
            date: '9 ماه پیش',
            link: 'http://example.com'
        },
        {
            id: '#1',
            header: 'باریستا یا کافه من کیست؟',
            image: require('../../../images/articles/1.jpg'),
            description: 'آشنایی با اصطلاحات کافه نه تنها برای کسانی که می‌خواهند یک کافی شاپ راه‌اندازی کنند ضروری است بلکه مشتریان نیز باید یک آگاهی کلی نسبت به این موضوع داشته باشند. برای مثال فرض کنیم که شما به کافی شاپ می‌روید و اکنون باریستا به سراغ شما می‌آید تا در مورد نوع قهوه‌ای که میل در شما سؤال بپرسد. زمانی که شما می‌خواهید از کافی شاپ خارج شوید، کافی من از شما در مورد خدمات باریستا سؤال خواهد پرسید....',
            author: { name: 'مهدی', family: 'کمالی', image: require('../../../images/avatar/1.jpg') },
            date: '9 ماه پیش',
            link: 'http://example.com'
        },
        {
            id: '#2',
            header: 'قهوه سیاه چیست و چگونه تهیه می شود؟',
            image: require('../../../images/articles/2.jpg'),
            description: 'قهوه یکی از نوشیدنی‌های پرطرفدار در تمام جهان است که به دلیل تنوع رنگ قهوه، طعم و عطر، این نوشیدنی توانسته است توجه عمده مردم را به خود جلب کرده و با سلیقه مردم زیادی هماهنگ باشد. قهوه سیاه یکی از محبوب‌ترین انواع قهوه است که به دلیل خواص و ویژگی‌هایی که دارد، مردم علاقه زیادی به نوشیدن این نوع قهوه داشته و حتی دوست دارند در صورت امکان، شخصا در منزل یا محل کار نیز قهوه سیاه را آماده کنند. برای اینکه با نحوه آماده سازی قهوه سیاه، خواص و ویژگی‌های آن آشنا شوید پیشنهاد می‌کنیم حتماً این مقاله را به طور کامل مطالعه نمایید.',
            author: { name: 'حسین', family: 'زاهدی', image: require('../../../images/avatar/1.jpg') },
            date: '9 ماه پیش',
            link: 'http://example.com'
        },
        {
            id: '#3',
            header: 'رست کردن قهوه یعنی چه؟',
            image: require('../../../images/articles/3.jpg'),
            description: 'اگر علاقه زیادی به نوشیدنی قهوه دارید، آیا تا به حال به فرآیند آماده شدن قهوه فکر کرده‌اید؟ اغلب مردم این تصور را دارند که دانه‌های قهوه‌، از همان ابتدا به رنگ قهوه‌ای هستند اما جالب است بدانید که دانه قهوه به رنگ سبز خام است و رست کردن قهوه باعث تغییر رنگ آن‌ها خواهد شد. حتما این سؤال برای شما به وجود آمد هاست که منظور از رست کردن قهوه چیست؟',
            author: { name: 'حمید', family: 'خراسانی', image: require('../../../images/avatar/1.jpg') },
            date: '9 ماه پیش',
            link: 'http://example.com'
        },
        {
            id: '#4',
            header: 'نکات مهم که در ترکیب کردن قهوه باید بدانید!',
            image: require('../../../images/articles/4.jpg'),
            description: 'قهوه به عنوان یکی از محبوب‌ترین نوشیدنی‌ها در تمام دنیا شناخته شده است که به دلیل تنوعی که در میان انواع قهوه وجود دارد، توانسته است توجه جمع زیادی از مردم را به خود جلب کرده و با سلیقه و ذائقه بسیاری از مردم جهان همراه گردد. ترکیب کردن قهوه یکی از موضوعاتی است که در بین مردم بسیار رواج پیدا کرده است. اغلب مردم به جای اینکه از یک قهوه برای تهیه نوشیدنی خود استفاده کنند، ترجیح می‌دهند چند نوع قهوه را با یکدیگر مخلوط کرده و به طعم دلخواه خود برسند. اما اینکه برای ترکیب کردن قهوه باید چگونه عمل کرد! موضوعی است که در این مقاله پیرامون آن صحبت می‌کنیم.',
            author: { name: 'جمشید', family: 'نوری', image: require('../../../images/avatar/1.jpg') },
            date: '9 ماه پیش',
            link: 'http://example.com'
        },
    ]);

    const [videSamples, setVideoSamples] = useState([
        {
            id: '#1',
            header: 'تیزر قهوه موکا - کافی شاپ',
            videoLink: 'https://aspb26.asset.aparat.com/aparat-video/06c318008f3ec6ffa3b65fbf0d981fd926940362-480p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjFmNmQ2MjM1ZTdiMmFmY2E2ZGZhZTFmYTNlMDNmODY2IiwiZXhwIjoxNjU5MTEyNjEwLCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.LCnj1hPWvUHyC0VSQB7BhmbEODP2Xl204Vg9nDFnao8',
            description: 'آشنایی با اصطلاحات کافه نه تنها برای کسانی که می‌خواهند یک کافی شاپ راه‌اندازی کنند ضروری است بلکه مشتریان نیز باید یک آگاهی کلی نسبت به این موضوع داشته باشند. برای مثال فرض کنیم که شما به کافی شاپ می‌روید و اکنون باریستا به سراغ شما می‌آید تا در مورد نوع قهوه‌ای که میل در شما سؤال بپرسد. زمانی که شما می‌خواهید از کافی شاپ خارج شوید، کافی من از شما در مورد خدمات باریستا سؤال خواهد پرسید....',
            author: { name: 'مهدی', family: 'کمالی', image: require('../../../images/avatar/1.jpg') },
            date: '9 ماه پیش',
            poster: require('../../../images/articles/3.jpg'),
            link: 'http://example.com',

        },
        {
            id: '#2',
            header: 'تیزر قهوه آندریا',
            videoLink: 'https://persian3.asset.aparat.com/aparat-video/18d345673f758b2b8f2af7d5dfdb82dd44981896-480p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjY5NTkzOWQyY2NiZDQ2ZjU0MDIwNTdiOWY5NjYzNjE4IiwiZXhwIjoxNjU5MTEzMzkxLCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.AIAMwFyjI0c0jF4rJ29oZ4JkQy8c9ik14lxMQg5YcVg',
            description: 'آشنایی با اصطلاحات کافه نه تنها برای کسانی که می‌خواهند یک کافی شاپ راه‌اندازی کنند ضروری است بلکه مشتریان نیز باید یک آگاهی کلی نسبت به این موضوع داشته باشند. برای مثال فرض کنیم که شما به کافی شاپ می‌روید و اکنون باریستا به سراغ شما می‌آید تا در مورد نوع قهوه‌ای که میل در شما سؤال بپرسد. زمانی که شما می‌خواهید از کافی شاپ خارج شوید، کافی من از شما در مورد خدمات باریستا سؤال خواهد پرسید....',
            author: { name: 'مهدی', family: 'کمالی', image: require('../../../images/avatar/1.jpg') },
            date: '9 ماه پیش',
            poster: require('../../../images/articles/4.jpg'),
            link: 'http://example.com'
        },
        {
            id: '#3',
            header: 'کاپریو، خدمتی از قهوه ریو',
            videoLink: 'https://persian1.asset.aparat.com/aparat-video/b838cf1a87d198cfd584f7cea71ff6a143367350-720p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjI4OTg5YmE5M2Y2NTg0YjEwNTg0OGQ3MDExZjIyMzYwIiwiZXhwIjoxNjU5MTE5NDYyLCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.9MznkabYQq6oboRCqzUOUFOZuvqUDUrH7vl6o3PONjk',
            description: 'آشنایی با اصطلاحات کافه نه تنها برای کسانی که می‌خواهند یک کافی شاپ راه‌اندازی کنند ضروری است بلکه مشتریان نیز باید یک آگاهی کلی نسبت به این موضوع داشته باشند. برای مثال فرض کنیم که شما به کافی شاپ می‌روید و اکنون باریستا به سراغ شما می‌آید تا در مورد نوع قهوه‌ای که میل در شما سؤال بپرسد. زمانی که شما می‌خواهید از کافی شاپ خارج شوید، کافی من از شما در مورد خدمات باریستا سؤال خواهد پرسید....',
            author: { name: 'مهدی', family: 'کمالی', image: require('../../../images/avatar/1.jpg') },
            date: '9 ماه پیش',
            poster: require('../../../images/articles/5.jpg'),
            link: 'http://example.com'
        },
        {
            id: '#4',
            header: 'قهوه سه در یک مولتی کافه گلد MULTICAFE GOLD 3 in 1',
            videoLink: 'https://hw13.asset.aparat.com/aparat-video/eafc5df7a220c2303b066e052233cee225526637-720p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjliMDVkYjg1Nzc3MmI4NzFmNDhmODczYTVkZjM5ZjFiIiwiZXhwIjoxNjU5MTE5NjQ2LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.yYRIJ9CeMyvr66z0GpMib9bl4H_bkbPOD8xya2rFfew',
            description: 'آشنایی با اصطلاحات کافه نه تنها برای کسانی که می‌خواهند یک کافی شاپ راه‌اندازی کنند ضروری است بلکه مشتریان نیز باید یک آگاهی کلی نسبت به این موضوع داشته باشند. برای مثال فرض کنیم که شما به کافی شاپ می‌روید و اکنون باریستا به سراغ شما می‌آید تا در مورد نوع قهوه‌ای که میل در شما سؤال بپرسد. زمانی که شما می‌خواهید از کافی شاپ خارج شوید، کافی من از شما در مورد خدمات باریستا سؤال خواهد پرسید....',
            author: { name: 'مهدی', family: 'کمالی', image: require('../../../images/avatar/1.jpg') },
            date: '9 ماه پیش',
            poster: require('../../../images/articles/6.jpg'),
            link: 'http://example.com'
        },
    ])





    return (
        <section className="articles">
            <div className="articles-header">
                <h1>مقالات و آموزشی</h1>
            </div>
            <div className="articles-body">
                <ImageArticles data={imageSamples} />
                <VideoArticles data={videSamples} />
            </div>


        </section>
    )
}

export default Articles
