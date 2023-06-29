import style from "./HomeSiteButton.scss"

const HomeSiteButton = () => {

    const button = {
        backgroundColor: '#fff',
        border: 'none',
        borderRadius: '15px',
        width: '50vw',
        height: '4vh',
        color: 'brown',
        fontWeight: 'bold',
    }

    return(
        <div>
            <button style={button}>
                Learn more
            </button>
        </div>
    )
}

export default HomeSiteButton;