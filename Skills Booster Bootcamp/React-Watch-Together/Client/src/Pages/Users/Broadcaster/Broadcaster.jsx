import styles from './Broadcaster.module.css'
import Video from "../../../components/Video.jsx";
import {useParams} from "react-router-dom";
import {useEffect} from "react";

const Broadcaster = props => {


    const params = useParams()
    const {room} = params

    const source = 'https://rr3---sn-hpa7znz6.googlevideo.com/videoplayback?expire=1671556010&ei=SpehY_maI5r6WZvZkNgK&ip=193.56.252.13&id=o-AIt3xaBRcTdSdzOo9pwFsKYJbLw5X_nOIUpZVjEsmVpw&itag=401&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C313%2C394%2C395%2C396%2C397%2C398%2C399%2C400%2C401&source=youtube&requiressl=yes&spc=zIddbIu_oWkK2cqNy3P0OXlmPR9npOg&vprv=1&mime=video%2Fmp4&ns=YySjtnAqDyZCvUvWGSPEtgkK&gir=yes&clen=8872896607&dur=9248.655&lmt=1671367707390118&keepalive=yes&fexp=24001373,24007246&c=WEB&txp=5532434&n=BUJrxc2lQq1cdQ&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIgTF1iRbuM7p-680Z_bkCrOkmIL6Kvp7Q5jTWL3d8S-LoCIQCSzgSHsHbKiJJPuo29-Zsvoig0U2ocZDgMSFb3YFp_5g%3D%3D&rm=sn-4g5ey77s&req_id=8ef2222c5932a3ee&redirect_counter=2&cm2rm=sn-uxaxjvhxbt2u-j5pld7s&cms_redirect=yes&cmsv=e&ipbypass=yes&mh=Pf&mip=41.43.167.122&mm=29&mn=sn-hpa7znz6&ms=rdu&mt=1671545381&mv=m&mvi=3&pl=22&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgeDxxluEIG7nwJ1JCgG_mo9b4BsBkkJ4bkRQ4seRcfQwCIQCVjhmtOj6tBeVReKgZClqTA6_3bN2lzcM2lEuStlzyrg%3D%3D'


    const onPlayHandler = () => {
        props.socket.emit('play-video', {
            room: room,
            status: 'play',
            src: source
        })
    }

    const onPauseHandler = () => {
        props.socket.emit('pause-video', {
            room: room,
            status: 'pause'
        })
    }

    return (
        <div className={styles.container}>
            <h1>Show The World</h1>

            <Video
                onPlay={onPlayHandler}
                onPause={onPauseHandler}
                src={source}
                controls={true}
                frameBorder="0"
            >
            </Video>

        </div>
    )
}

export default Broadcaster