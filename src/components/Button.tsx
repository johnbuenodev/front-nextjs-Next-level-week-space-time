const styles = {
    color: '#F00',
}

interface ButtonProps {
    title: string;
}

export function Button(props: ButtonProps) {
    return(
        <span style={styles}>
            {props.title}
        </span>
    )
}