const Logo = ({ isWhite }) => {


    return (
        <div className={`logo ${isWhite ? 'logo--white' : ''}`}>
            <p className="logo__text">Turing</p>
            <p className="logo__help-text">Tecnología</p>
        </div>
    )
}

export default Logo;