import styles from './Log.module.css'

const Log = props => {

    return (
        <>
            <h1>History</h1>

            <div className={styles.log}>

                {
                    props.log.map((line, i) => <p key={i}>{line}</p>)
                }
            </div>
        </>
    )
}

export default Log