import styles from './Video.module.css'

const Video = props => {
    return (
        <iframe
            width={props.width} height={props.height}
            src={props.src}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        >
        </iframe>)

        // <iframe width="1268" height="713" src="https://www.youtube.com/embed/u4T6zomBPEk"
        //         title="تلاوة خاشعة لعشر سور [ يس،الصافات،الأحقاف،النجم،القمر،الحديد،الملك،الحاقة،النبأ،النازعات ] حسن صالح"
        //         frameBorder="0"
        //         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        //         allowFullScreen></iframe>)
}
export default Video