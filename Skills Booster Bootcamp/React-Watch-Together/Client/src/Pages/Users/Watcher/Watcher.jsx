
const Watcher = props => {


    const source = 'https://rr1---sn-a5meknsd.googlevideo.com/videoplayback?expire=1671643756&ei=DO6iY4vSG_qRsfIPva-msAY&ip=64.145.94.124&id=o-AFPehitO01IohoSBsBDPoQPBLOAGtJ8cOXjyNUj7kfv3&itag=22&source=youtube&requiressl=yes&mh=tm&mm=31%2C26&mn=sn-a5meknsd%2Csn-n4v7sns7&ms=au%2Conr&mv=m&mvi=1&pl=24&initcwndbps=1186250&spc=zIddbHkQj2y1fc2AzBv39i2TMHswfzI&vprv=1&mime=video%2Fmp4&ns=n2fIvlqW9IVuMLE7wwwvPucK&cnr=14&ratebypass=yes&dur=1431.347&lmt=1669380030705886&mt=1671622127&fvip=5&fexp=24001373%2C24007246&c=WEB&txp=5532434&n=Mbaa6TF3p2rusg&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRgIhAOgk_D2rbw7CH75KBDZ2FsXCb0cbP8H43MpNHeBXcouOAiEAi5tuCV1mLGTH-86vCHFmDyCO2JhI4TTrFk7AuLi2Uco%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRgIhAPJoBvK75gLZoFv81-0MTn5-DEItIjS5ffXfvbJ-1eNeAiEAhawJGwd5wGinzF_9PzDOUwkpACrZszeNVOVSj3rQpUw%3D&title=%D8%A7%D9%84%D8%AF%D8%AD%D9%8A%D8%AD%20%7C%20%D9%82%D8%B5%D8%A9%20%D9%81%D9%88%D8%B1%D8%AF'


    props.socket.on('play', () => {
        document.querySelector('video').play()
    })

    props.socket.on('pause', () => {
        document.querySelector('video').pause()

    })


    return (
        <>
            <h1>Have Fun</h1>
            <video

                width='1200'
                height='600'
                src={source}
                controls={false}
            >
            </video>
        </>)
}

export default Watcher