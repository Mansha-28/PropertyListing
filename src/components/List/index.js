export default function List({className, ...restProps}){
    return (
        <div className={className} {...restProps}>
            {children}
        </div>
    )
}