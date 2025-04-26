export default function PrimaryButton (fun: () => void, title: string, style: string) {
    return  (
    <button className={style} onClick={fun}>
        {title}
    </button>
    )
}