import styles from './Video.module.css'

const Video = props => {

    // console.log(props.onPlay)
    return (
        <video
            onCanPlay={props.onCanPlay}
            onPlay={props.onPlay}
            onPause={props.onPause}
            width="1200" height="600"
            src={props.src}
            controls={props.controls}
        >
        </video>)
}
export default Video