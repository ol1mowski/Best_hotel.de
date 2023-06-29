import style from "./HomeSiteTitle.scss"

const HomeSiteTitle = () => {

    const first = {
        fontSize: '2.5rem',
        color: '#fff',
    }
    const second = {
        display: 'flex',
        alignItems: 'center',
        height: '15vh',
        justifyContent: 'center',
        flexDirection: 'column',
    }
    const big = {
        fontSize: '3rem',
        // width: '100%',
        fontWeight: '300',
        display: 'block',
    }
    const small = {
        marginTop: '-4vh',
        display: 'block',
    }
    const container = {
        height: '80%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    }
    return(
        <div style={container}>
            <h2 style={first}> Welcome to</h2>
            <div style={second}>
                <span style={big}>
                    The Wellhall
                </span>
            <br /> 
            <span style={small}>
                Resort & Spa Hotel
            </span>
            </div>
        </div>
    )
}

export default HomeSiteTitle;