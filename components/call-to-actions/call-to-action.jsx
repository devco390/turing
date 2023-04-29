const CalltoAction = ({ data }) => {
    const { whatsapp, call } = data;

    return (
        <div className="call-to-actions">
            <a className="call-to-action" href={call.link}>
                <div className="call-to-action__circle call-to-action__call">
                    <i className="icon icon-phone"></i>
                </div>
                <p>{call.title}</p>
            </a>
            <a className="call-to-action" href={whatsapp.link}>
                <div className="call-to-action__circle call-to-action__whatsapp">
                    <i className="icon icon-whatsapp"></i>
                </div>
                <p>{whatsapp.title}</p>
            </a>
        </div>
    )
}

export default CalltoAction;