import styles from './Input.module.css'

const Input = props => {
    return (
        <input className={props.className} placeholder={props.placeholder} onChange={props.onChange} ref={props.ref}/>
    )
}
export default Input