export default function Input({ type, id, name, placeholder, onChange, className }) {
    return (
        <input 
        className={className}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        />
    );
};