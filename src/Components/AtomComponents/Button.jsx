export default function Button({ type, buttonText, clickEvent, className }) {
    return (
        <button
        className={className}
        type={type}
        onClick={clickEvent}
        >{buttonText}</button>
    );
};