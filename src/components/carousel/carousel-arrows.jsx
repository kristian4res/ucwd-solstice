export function CarouselNextArrow(props) {
    const { className, style, onClick } = props;
    
    return (
        <div
        className={className}
        style={{ ...style, display: "block", background: "gray", borderRadius: '100%' }}
        onClick={onClick}
        />
    );
}
  
 export function CarouselPrevArrow(props) {
    const { className, style, onClick } = props;

    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "gray", borderRadius: '100%' }}
            onClick={onClick}
        />
    );
}